const express = require('express');

const router = express.Router();

const generalController = require('../controllers/general');

router.get('/countries', generalController.getCountries);
router.post('/country', generalController.postCountry);

router.get('/universities/:country', generalController.getUniversities);
router.post('/university', generalController.postUniversity);

module.exports = router;
