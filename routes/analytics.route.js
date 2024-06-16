const express = require('express');
const controller = require('../controllers/analytics.controller.js');
const router = express.Router();

router.get('/overview', controller.overview)
router.get('/analytics', controller.analytic)

module.exports = router;