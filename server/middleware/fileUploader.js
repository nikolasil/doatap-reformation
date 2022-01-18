const multer = require('multer');

const upload = multer({
	fileFilter: (req, file, cb) => {
		if (!file.originalname.match(/\.(pdf)$/)) {
			return cb(new Error('Please upload an PDF File'));
		}
		cb(undefined, true);
	},
	limits: {
		fileSize: 4000000,
	},
});

const fileUploader = (req, res, next) => {
	return upload.any('attachments')(req, res, () => {
		if (!req.files || req.files.length === 0)
			return res.status(400).json({ error: 'No file is uploaded' });
		next();
	});
};

module.exports = fileUploader;
