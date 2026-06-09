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

/**
 * @desc    Get all job applications (Enriched for Frontend UI comfort)
 * @route   GET /api/applications
 * @access  Public
 */
const getAllApplications = (req, res) => {
    readDB((err, db) => {
        if (err) return res.status(500).json({ message: 'Internal Server Error' });

        //making combined table as object 
        const enrichedApplications = db.job_applications.map(app => {
            const company = db.companies.find(c => c.id === app.company_id) || {};
            const status = db.app_status.find(s => s.id === app.status_id) || {};
            const appliedDetails = db.application_applied_details.find(d => d.application_id === app.id) || null;
            const interviewDetails = db.application_interviewing_details.find(d => d.application_id === app.id) || null;
            const offerDetails = db.application_offer_details.find(d => d.application_id === app.id) || null;
            const tags = db.application_tags.filter(t => t.application_id === app.id).map(t => t.tag);

            return {
                ...app,
                companyName: company.name || '',
                companyLogo: company.logo_url || '',
                statusName: status.name || '',
                appliedDetails,
                interviewDetails,
                offerDetails,
                tags
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
            const nextCompanyId = db.companies.length > 0 ? Math.max(...db.companies.map(c => c.id)) + 1 : 1;
            company = {
                id: nextCompanyId,
                name: companyName,
                logo_url: `https://www.google.com/s2/favicons?domain=${companyName.toLowerCase().replace(/\s+/g, '')}.com&sz=256`
            };
            db.companies.push(company);
        }

        // Create the Core Job Application record
        const nextAppId = db.job_applications.length > 0 ? Math.max(...db.job_applications.map(a => a.id)) + 1 : 1;
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
            notes: notes || ""
        };
        db.job_applications.push(newApplication);

        // Handle optional Offer Details (only for 'statusID=4/'offer')
        if (Number(status_id) === 4 && (offer_amount || answer_deadline)) {
            const nextOfferId = db.application_offer_details.length > 0 ? Math.max(...db.application_offer_details.map(o => o.id)) + 1 : 1;
            db.application_offer_details.push({
                id: nextOfferId,
                application_id: nextAppId,
                answer_deadline: answer_deadline || null,
                offer_amount: offer_amount ? Number(offer_amount) : null
            });
        }

        // Handle Tags relation
        if (tags && Array.isArray(tags)) {
            tags.forEach(tagText => {
                const nextTagId = db.application_tags.length > 0 ? Math.max(...db.application_tags.map(t => t.id)) + 1 : 1;
                db.application_tags.push({
                    id: nextTagId,
                    application_id: nextAppId, //using the id from the core job creation earlier(Foreign key connection)
                    tag: tagText
                });
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
        
        // check if the job is existing 
        const appExists = db.job_applications.some(app => app.id === appId);
        if (!appExists) {
            return res.status(404).json({ message: 'Delete Error', error: `Application with ID ${appId} not found.` });
        }

        // remove job from core jobs table
        db.job_applications = db.job_applications.filter(app => app.id !== appId);

        // remove all linked tables (according the ERD)
        db.application_tags = db.application_tags.filter(t => t.application_id !== appId);
        db.application_applied_details = db.application_applied_details.filter(d => d.application_id !== appId);
        db.application_interviewing_details = db.application_interviewing_details.filter(d => d.application_id !== appId);
        db.application_offer_details = db.application_offer_details.filter(d => d.application_id !== appId);

        
        writeDB(db, (writeErr) => {
            if (writeErr) return res.status(500).json({ message: 'Internal Server Error' });
            res.status(200).json({ message: `Application ${appId} and all its relations deleted successfully.` });
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
            let company = db.companies.find(c => c.name.toLowerCase() === companyName.toLowerCase());
            
            if (!company) {
                const nextCompanyId = db.companies.length > 0 ? Math.max(...db.companies.map(c => c.id)) + 1 : 1;
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

            tags.forEach(tagText => {
                const nextTagId = db.application_tags.length > 0 ? Math.max(...db.application_tags.map(t => t.id)) + 1 : 1;
                db.application_tags.push({
                    id: nextTagId,
                    application_id: appId,
                    tag: tagText
                });
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
                const nextOfferId = db.application_offer_details.length > 0 ? Math.max(...db.application_offer_details.map(o => o.id)) + 1 : 1;
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