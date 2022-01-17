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
  const email = req.body.email;
  const password = req.body.password;
  try {
    const user = await User.findOne({ email: email, type: 'admin' });
    if (!user) {
      res
        .status(401)
        .json({ message: 'A user with this email could not be found.' });
      return;
    }
    const isEqual = await bcrypt.compare(password, user.password);
    if (!isEqual) {
      res.status(401).json({ message: 'Wrong Password' });
      return;
    }
    const token = jwt.sign(
      {
        email: user.email,
        userId: user._id.toString(),
      },
      'yJhbG215cdf3N1[Z3_=+XIQ25_VozJKgfmsqghc8yY678Xnf+Pymo-V_JS}Aa3WhA',
      { expiresIn: '30d' }
    );
    res.status(200).json({ token: token, userId: user._id.toString() });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.getAllApplications = async (req, res, next) => {
  try {
    const applications = await Application.find();
    res.status(200).json(applications);
  } catch (e) {
    console.log(e);
  }
};
