const express = require('express');
const router = express.Router();
const { getAllApplications, createApplication, deleteApplication } = require('../controllers/applicationControllers');

router.get('/', getAllApplications);
router.post('/', createApplication);
router.delete('/:id', deleteApplication);

module.exports = router;