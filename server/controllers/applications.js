const Application = require('../models/application');
const fs = require('fs');

exports.createApplication = async (req, res) => {
	try {
		let application;
		if (req.body._id != null) {
			application = await Application.findByIdAndUpdate(req.body._id, req.body);
		} else {
			application = new Application({
				...req.body,
				belongsTo: req.user._id,
			});
		}
		console.log(application);
		const result = await application.save();
		const dirOfApplication = './applications/' + result._id;

		if (!fs.existsSync(dirOfApplication)) {
			fs.mkdirSync(dirOfApplication, { recursive: true });
		}

		req.files.forEach((file) => {
			fs.writeFileSync(dirOfApplication + '/' + file.originalname, file.buffer);
		});

		res.status(201).json({
			message: 'Application created successfully!',
			application: result,
		});
	} catch (e) {
		console.log(e);
	}
};

exports.getApplication = async (req, res, next) => {
	try {
		const application = await Application.findById(req.params.id);
		if (!application) {
			res.status(404).json({
				message: 'Application was not found!',
			});
			return;
		}
		if (application.belongsTo.toString() != req.user._id.toString()) {
			res.status(404).json({
				message: 'You are not authenticated to view this application!',
			});
			return;
		}
		const dirOfApplication = './applications/' + application._id;
		const files = fs.readdirSync(dirOfApplication);
		const filesWithPath = files.map((file) => {
			return fs.readFileSync(dirOfApplication + '/' + file);
		});

		application.attachments = filesWithPath;
		return res.json({
			message: 'Application was found!',
			application,
		});
	} catch (e) {
		console.log(e);
	}
};

exports.getAllApplications = async (req, res, next) => {
	try {
		const applications = await Application.find({ belongsTo: req.user._id });
		if (applications.length === 0) {
			return res.status(404).json({
				message: 'You have no applications!',
			});
		}
		return res.json({
			message: 'Applications were found!',
			applications,
		});
	} catch (e) {
		console.log(e);
	}
};
