const express = require('express');
const router = express.Router();
const { getAllApplications } = require('../controllers/applicationControllers');

router.get('/', getAllApplications);

module.exports = router;