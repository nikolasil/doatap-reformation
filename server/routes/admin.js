const express = require('express');
const { body } = require('express-validator');
const User = require('../models/user');

const router = express.Router();

const adminController = require('../controllers/admin');
const isDashboardAuth = require('../middleware/is-dashboard-auth');

router.put(
  '/signup',
  [
    body('email')
      .isEmail()
      .withMessage('Please enter a valid email.')
      .custom((value, { req }) => {
        return User.findOne({ email: value }).then((userDoc) => {
          if (userDoc) {
            return Promise.reject('E-Mail address already exists');
          }
        });
      })
      .normalizeEmail(),
    body('password').trim().isLength({ min: 8 }),
    body('name').trim().not().isEmpty(),
  ],
  adminController.signup
);

router.post('/login', adminController.login);

router.get('/me', isDashboardAuth, adminController.loadAdminUser);
module.exports = router;
