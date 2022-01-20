const express = require('express');
const fileUploader = require('../middleware/fileUploader');

const router = express.Router();

const applicationController = require('../controllers/applications');
const isAuth = require('../middleware/is-auth');

router.post('/create', isAuth, fileUploader, applicationController.createApplication);
router.get('/:id', isAuth, applicationController.getApplication);
router.get('', isAuth, applicationController.getAllApplications);

module.exports = router;
