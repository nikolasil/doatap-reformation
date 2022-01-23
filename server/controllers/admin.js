const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const User = require('../models/user');
const Application = require('../models/application');

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

exports.getAllApplications = async (req, res) => {
	try {
		const applications = await Application.find({ status: { $gt: 0 } });
		if (applications.length === 0) {
			res.status(404).json({
				message: 'No applications found!',
			});
			return;
		}

		return res.json({
			message: 'Applications found!',
			applications,
		});
	} catch (e) {
		console.log(e);
	}
};

exports.approveApplication = async (req, res) => {
	try {
		const { id } = req.params;
		if (!mongoose.isValidObjectId(id)) {
			return res.status(400).json({
				message: 'Invalid application id!',
			});
		}
		const application = await Application.findById(id);
		if (!application) {
			return res.status(404).json({
				message: 'Application not found!',
			});
		}
		application.status = 2;
		await application.save();
		return res.json({
			message: 'Application approved!',
			application,
		});
	} catch (error) {
		return res.json({
			message: 'Server Error',
		});
	}
};

exports.rejectApplication = async (req, res) => {
	try {
		const { id } = req.params;
		if (!mongoose.isValidObjectId(id)) {
			return res.status(400).json({
				message: 'Invalid application id!',
			});
		}
		const application = await Application.findById(id);
		if (!application) {
			return res.status(404).json({
				message: 'Application not found!',
			});
		}
		application.status = 3;
		await application.save();
		return res.json({
			message: 'Application rejected!',
			application,
		});
	} catch (error) {
		return res.json({
			message: 'Server Error',
		});
	}
};

exports.getApplication = async (req, res) => {
	try {
		const { id } = req.params;
		if (!mongoose.isValidObjectId(id)) {
			return res.status(400).json({
				message: 'Invalid application id!',
			});
		}
		const application = await Application.findById(id);
		if (!application) {
			return res.status(404).json({
				message: 'Application not found!',
			});
		}
		return res.json({
			message: 'Application found!',
			application,
		});
	} catch (error) {
		return res.json({
			message: 'Server Error',
		});
	}
};

exports.commentApplication = async (req, res) => {
	try {
		const { id } = req.params;
		if (!mongoose.isValidObjectId(id)) {
			return res.status(400).json({
				message: 'Invalid application id!',
			});
		}
		const application = await Application.findById(id);
		if (!application) {
			return res.status(404).json({
				message: 'Application not found!',
			});
		}
		const { comments } = req.body;

		if (!comments) {
			return res.status(400).json({
				message: 'Comments are required!',
			});
		}

		application.comments = comments;
		application.status = 4;
		await application.save();

		return res.json({
			message: 'Added Comments To Application!',
			comments: application.comments,
		});
	} catch (error) {
		return res.json({
			message: 'Server Error',
		});
	}
};
