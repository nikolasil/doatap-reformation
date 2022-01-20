const jwt = require('jsonwebtoken');

const User = require('../models/user');

module.exports = async (req, res, next) => {
	const authHeader = req.get('Authorization');
	if (!authHeader) {
		res.status(401).json({ message: 'Not Authenticated' });
		return;
	}
	const token = authHeader.split(' ')[1];
	let decodedToken;
	try {
		decodedToken = jwt.verify(token, 'thisismyjwtsecret');
	} catch (err) {
		err.status = 500;
		throw err;
	}
	if (!decodedToken) {
		res.status(401).json({ message: 'Not Authenticated' });
		return;
	}

	const user = await User.findById(decodedToken.id);
	if (!user) {
		res.status(401).json({ message: 'Not Authenticated' });
		return;
	}
	if (user.type !== 'user') {
		res.status(401).json({ message: 'Not Authenticated' });
		return;
	}
	req.user = user;
	next();
};
