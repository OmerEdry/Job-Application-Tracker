const express = require('express');
const router = express.Router();
const { getAllApplications, createApplication, deleteApplication,updateApplication } = require('../controllers/applicationControllers');

router.get('/', getAllApplications);
router.post('/', createApplication);
router.delete('/:id', deleteApplication);
router.put('/:id', updateApplication);

module.exports = router;