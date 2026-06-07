const express = require('express');
const router = express.Router();
const { getAllApplications, createApplication } = require('../controllers/applicationControllers');

router.get('/', getAllApplications);
router.post('/', createApplication);

module.exports = router;