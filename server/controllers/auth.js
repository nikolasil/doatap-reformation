const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/user');

exports.signup = async (req, res, next) => {
	try {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(422).json(errors.array());
		}

		const user = new User({
			...req.body,
		});
		const token = await user.generateAuthToken();
		await user.save();
		res.status(201).json({ message: 'User created', user, token });
	} catch (err) {
		return res.status(500).json({
			message: 'Server Error',
		});
	}
};

exports.login = async (req, res) => {
	try {
		const { email, password } = req.body;
		const user = await User.findByCredentials(email, password);

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
