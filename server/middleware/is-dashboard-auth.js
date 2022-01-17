const jwt = require('jsonwebtoken');

const User = require('../models/user');

module.exports = async (req, res, next) => {
  const authHeader = req.get('Authorization');
  if (!authHeader) {
    const error = new Error('Not authenticated.');
    error.statusCode = 401;
    throw error;
  }
  const token = authHeader.split(' ')[1];
  let decodedToken;
  try {
    decodedToken = jwt.verify(
      token,
      'yJhbG215cdf3N1[Z3_=+XIQ25_VozJKgfmsqghc8yY678Xnf+Pymo-V_JS}Aa3WhA'
    );
  } catch (err) {
    err.status = 500;
    throw err;
  }
  if (!decodedToken) {
    const error = new Error('Not authenticated.');
    error.statusCode = 401;
    throw error;
  }
  const user = await User.findById(decodedToken.userId);
  if (!user) {
    res.status(401).json({ message: 'Not Authenticated' });
    return;
  }
  if (user.type !== 'admin') {
    res.status(401).json({ message: 'Not Authenticated' });
    return;
  }
  req.user = user;
  req.userId = decodedToken.userId;
  next();
};
