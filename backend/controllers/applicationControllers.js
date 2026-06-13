const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '../data/applications.json');

// Helper function to read the DB
const readDB = (callback) => {
    fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) return callback(err, null);
        try {
            callback(null, JSON.parse(data));
        } catch (pErr) {
            callback(pErr, null);
        }
    });
};

// Helper function to write to the DB
const writeDB = (data, callback) => {
    fs.writeFile(dataPath, JSON.stringify(data, null, 2), 'utf8', callback);
};

// Helper to index an array into a hashmap for 1-to-1 relationships (e.g., companies, statuses)
const indexBy = (array, key) => array.reduce((acc, item) => {
    acc[item[key]] = item;
    return acc;
}, {});

// Helper to group an array into a hashmap of arrays for 1-to-many relationships (e.g., tags)
const groupBy = (array, key, valueSelector = (item) => item) => array.reduce((acc, item) => {
    const groupKey = item[key];
    if (!acc[groupKey]) {
        acc[groupKey] = [];
    }
    acc[groupKey].push(valueSelector(item));
    return acc;
}, {});

//helper to safely calculate the next ID for any table array
const getNextId = (tableArray) => {
    if (!tableArray || tableArray.length === 0) return 1;
    return Math.max(...tableArray.map(item => item.id)) + 1;
}

/**
 * @desc    Get all job applications with enriched relational data
 * @route   GET /api/applications
 * @access  Public
 */
const getAllApplications = (req, res) => {
    readDB((err, db) => {
        if (err) return res.status(500).json({ message: 'Internal Server Error' });

        // 1. Create Hashmaps upfront 
        const companyMap = indexBy(db.companies, 'id');
        const statusMap = indexBy(db.app_status, 'id');
        const appliedMap = indexBy(db.application_applied_details, 'application_id');
        const interviewMap = indexBy(db.application_interviewing_details, 'application_id');
        const offerMap = indexBy(db.application_offer_details, 'application_id');
        const tagsMap = groupBy(db.application_tags, 'application_id', (t) => t.tag);
        const activeApplications = db.job_applications.filter(app => app.isDeleted !== true);

        const enrichedApplications = activeApplications.map(app => {
            const company = companyMap[app.company_id] || {};
            const status = statusMap[app.status_id] || {};

            return {
                ...app,
                companyName: company.name || '',
                companyLogo: company.logo_url || '',
                statusName: status.name || '',
                appliedDetails: appliedMap[app.id] || null,
                interviewDetails: interviewMap[app.id] || null,
                offerDetails: offerMap[app.id] || null,
                tags: tagsMap[app.id] || []
            };
        });

        res.status(200).json(enrichedApplications);
    });
};

/**
 * @desc    Create a new job application adhering to ERD Relational Schema
 * @route   POST /api/applications
 * @access  Public
 */
const createApplication = (req, res) => {
    const { companyName, title, work_type, status_id, url, location, notes, tags, offer_amount, answer_deadline } = req.body;

    // NOT NULL Validation
    if (!companyName || !title || !status_id || !work_type) {
        return res.status(400).json({ message: 'Validation Error', error: 'Company name, title, status_id, and work_type are required.' });
    }

    // ENUM Validation for work_type
    const allowedWorkTypes = ['remote', 'on_site', 'hybrid'];
    if (!allowedWorkTypes.includes(work_type)) {
        return res.status(400).json({ message: 'Validation Error', error: 'work_type must be remote, on_site, or hybrid.' });
    }

    // CHECK Validation for offer_amount
    if (offer_amount !== undefined && offer_amount !== null && offer_amount < 0) {
        return res.status(400).json({ message: 'Validation Error', error: 'offer_amount must be greater than or equal to 0.' });
    }

    readDB((err, db) => {
        if (err) return res.status(500).json({ message: 'Internal Server Error' });

        // Handle Company (Find existing or create new)
        let company = db.companies.find(c => c.name.toLowerCase() === companyName.toLowerCase());
        if (!company) {
            const nextCompanyId = getNextId(db.companies);
            company = {
                id: nextCompanyId,
                name: companyName,
                logo_url: `https://www.google.com/s2/favicons?domain=${companyName.toLowerCase().replace(/\s+/g, '')}.com&sz=256`
            };
            db.companies.push(company);
        }

        // Create the Core Job Application record
        const nextAppId = getNextId(db.job_applications);
        const newApplication = {
            id: nextAppId,
            company_id: company.id,
            title,
            url: url || "",
            location: location || "",
            work_type,
            status_id: Number(status_id),
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
            notes: notes || "",
            isDeleted: false
        };
        db.job_applications.push(newApplication);

        // Handle optional Offer Details (only for 'statusID=4/'offer')
        if (Number(status_id) === 4 && (offer_amount || answer_deadline)) {
            const nextOfferId = getNextId(db.application_offer_details);
            db.application_offer_details.push({
                id: nextOfferId,
                application_id: nextAppId,
                answer_deadline: answer_deadline || null,
                offer_amount: offer_amount ? Number(offer_amount) : null
            });
        }

        // Handle Tags relation
        if (tags && Array.isArray(tags)) {
            let currentTagId = getNextId(db.application_tags);
            tags.forEach(tagText => {
                db.application_tags.push({
                    id: currentTagId,
                    application_id: nextAppId, 
                    tag: tagText
                });
                currentTagId++; 
            });
        }

        // Save everything back to the DB
        writeDB(db, (writeErr) => {
            if (writeErr) return res.status(500).json({ message: 'Internal Server Error' });
            res.status(201).json(newApplication);
        });
    });
};

/**
 * @desc    Delete a job application and all its related ERD entities
 * @route   DELETE /api/applications/:id
 * @access  Public
 */
const deleteApplication = (req, res) => {
    const appId = Number(req.params.id);

    readDB((err, db) => {
        if (err) return res.status(500).json({ message: 'Internal Server Error' });
        
        const appIndex = db.job_applications.findIndex(app => app.id === appId);
        if (appIndex === -1) {
            return res.status(404).json({ message: 'Delete Error', error: `Application with ID ${appId} not found.` });
        }

        db.job_applications[appIndex].isDeleted = true;
        db.job_applications[appIndex].updated_at = new Date().toISOString();

        writeDB(db, (writeErr) => {
            if (writeErr) return res.status(500).json({ message: 'Internal Server Error' });
            res.status(200).json({ message: `Application ${appId} soft-deleted successfully.` });
        });
    });
};

/**
 * @desc    Update a job application and its related entities
 * @route   PUT /api/applications/:id
 * @access  Public
 */
const updateApplication = (req, res) => {
    const appId = Number(req.params.id);
    const { companyName, title, work_type, status_id, url, location, notes, tags, offer_amount, answer_deadline } = req.body;

    // validations 
    const allowedWorkTypes = ['remote', 'on_site', 'hybrid'];
    if (work_type && !allowedWorkTypes.includes(work_type)) {
        return res.status(400).json({ message: 'Validation Error', error: 'work_type must be remote, on_site, or hybrid.' });
    }

    if (offer_amount !== undefined && offer_amount !== null && offer_amount < 0) {
        return res.status(400).json({ message: 'Validation Error', error: 'offer_amount must be greater than or equal to 0.' });
    }

    if (companyName !== undefined && (companyName === null || companyName.trim().length === 0)) {
        return res.status(400).json({ message: 'Validation Error', error: 'Company name cannot be empty.' });
    }

    if (title !== undefined && (title === null || title.trim().length === 0)) {
        return res.status(400).json({ message: 'Validation Error', error: 'Title cannot be empty.' });
    }

    readDB((err, db) => {
        if (err) return res.status(500).json({ message: 'Internal Server Error' });

        const appIndex = db.job_applications.findIndex(app => app.id === appId);
        if (appIndex === -1) {
            return res.status(404).json({ message: 'Update Error', error: `Application with ID ${appId} not found.` });
        }

        const currentApp = db.job_applications[appIndex];
        
        db.job_applications[appIndex] = {
            ...currentApp,
            title: title || currentApp.title,
            url: url !== undefined ? url : currentApp.url,
            location: location !== undefined ? location : currentApp.location,
            work_type: work_type || currentApp.work_type,
            status_id: status_id !== undefined ? Number(status_id) : currentApp.status_id,
            notes: notes !== undefined ? notes : currentApp.notes,
            updated_at: new Date().toISOString()
        };

        if (companyName) {
            const companyByNameMap = db.companies.reduce((acc, c) => {
                acc[c.name.toLowerCase()] = c;
                return acc;
            }, {});
            let company = companyByNameMap[companyName.toLowerCase()];
            
            if (!company) {
                const nextCompanyId = getNextId(db.companies);
                company = {
                    id: nextCompanyId,
                    name: companyName,
                    logo_url: `https://www.google.com/s2/favicons?domain=${companyName.toLowerCase().replace(/\s+/g, '')}.com&sz=256`
                };
                db.companies.push(company);
            }
            db.job_applications[appIndex].company_id = company.id;
        }

        if (tags && Array.isArray(tags)) {
            db.application_tags = db.application_tags.filter(t => t.application_id !== appId);
            
            let currentTagId = getNextId(db.application_tags);

            tags.forEach(tagText => {
                db.application_tags.push({
                    id: currentTagId,
                    application_id: appId,
                    tag: tagText
                });
                currentTagId++; 
            });
        }

        if (Number(db.job_applications[appIndex].status_id) === 4) {
            const offerIndex = db.application_offer_details.findIndex(o => o.application_id === appId);

            if (offerIndex !== -1) {
                db.application_offer_details[offerIndex] = {
                    ...db.application_offer_details[offerIndex],
                    answer_deadline: answer_deadline !== undefined ? answer_deadline : db.application_offer_details[offerIndex].answer_deadline,
                    offer_amount: offer_amount !== undefined ? (offer_amount ? Number(offer_amount) : null) : db.application_offer_details[offerIndex].offer_amount
                };
            } else if (offer_amount || answer_deadline) {
                const nextOfferId = getNextId(db.application_offer_details);
                db.application_offer_details.push({
                    id: nextOfferId,
                    application_id: appId,
                    answer_deadline: answer_deadline || null,
                    offer_amount: offer_amount ? Number(offer_amount) : null
                });
            }
        } else {
            db.application_offer_details = db.application_offer_details.filter(o => o.application_id !== appId);
        }


        writeDB(db, (writeErr) => {
            if (writeErr) return res.status(500).json({ message: 'Internal Server Error' });
            res.status(200).json(db.job_applications[appIndex]);
        });
    });
}

module.exports = {
    getAllApplications,
    createApplication,
    deleteApplication,
    updateApplication
};