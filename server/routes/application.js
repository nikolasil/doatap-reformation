const express = require('express');

const router = express.Router();

const applicationController = require('../controllers/application');
const isAuth = require('../middleware/is-auth');

router.post('/create', isAuth, applicationController.createApplication);
router.get('/:id', isAuth, applicationController.getApplication);

module.exports = router;
