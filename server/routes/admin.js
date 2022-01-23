const express = require('express');
const { body } = require('express-validator');
const User = require('../models/user');

const router = express.Router();

const adminController = require('../controllers/admin');
const isDashboardAuth = require('../middleware/is-dashboard-auth');

router.post('/login', adminController.login);
router.get('/me', isDashboardAuth, adminController.loadAdminUser);
router.get('/applications', isDashboardAuth, adminController.getAllApplications);
router.get('/applications/:id', isDashboardAuth, adminController.getApplication);
router.get('/applications/:id/approve', isDashboardAuth, adminController.approveApplication);
router.get('/applications/:id/reject', isDashboardAuth, adminController.rejectApplication);
router.post('/applications/:id/comment', isDashboardAuth, adminController.commentApplication);
module.exports = router;
