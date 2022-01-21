const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/user');
const Application = require('../models/application');

exports.signup = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(422).json(errors.array());
    return;
  }
  const email = req.body.email;
  const name = req.body.name;
  const password = req.body.password;
  try {
    const hashedPw = await bcrypt.hash(password, 12);
    const user = new User({
      name: name,
      email: email,
      password: hashedPw,
      type: 'admin',
    });
    const result = await user.save();
    res.status(201).json({ message: 'User created', userId: result._id });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findByCredentials(email, password, 'admin');

    const token = await user.generateAuthToken();
    return res.json({
      user,
      token,
    });
  } catch (error) {
    console.error(error.message);
    if (error.message === 'Unable to login') {
      return res.status(400).json({
        message: 'Unable to login - Wrong Credentials',
      });
    }
    res.status(500).json({
      message: 'Server Error',
    });
  }
};

exports.loadAdminUser = async (req, res) => {
  try {
    res.status(201).json({
      message: 'User loaded successfully!',
      user: req.user,
    });
  } catch (e) {
    console.log(e);
  }
};
