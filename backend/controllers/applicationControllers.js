const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '../data/applications.json');

/**
 * @desc    Get all job applications
 * @route   GET /api/applications
 * @access  Public
 */
const getAllApplications = (req, res) => {
    
    fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading data file:', err);
            return res.status(500).json({ 
                message: 'Internal Server Error', 
                error: 'Could not retrieve job applications' 
            });
        }
        
        try {
            const applications = JSON.parse(data);
            res.status(200).json(applications);
        } catch (parseError) {
            console.error('Error parsing JSON:', parseError);
            res.status(500).json({ 
                message: 'Internal Server Error', 
                error: 'Data corruption detected' 
            });
        }
    });
};

module.exports = {
    getAllApplications
};