const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
    default: 'user',
  },
});

userSchema.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject();

  delete userObject.password;

  return userObject;
};

userSchema.methods.generateAuthToken = async function () {
  const user = this;

  const payload = {
    id: user.id,
  };

  const token = jwt.sign(payload, 'thisismyjwtsecret', {
    expiresIn: 36000000,
  });

  return token;
};

userSchema.statics.findByCredentials = async (email, password, type) => {
  const user = await User.findOne({ email, type }); //check if user with given email exists

  if (!user) {
    throw new Error('Unable to login');
  }

  //check if password given is same with hashed password
  const userIsMatch = await bcrypt.compare(password, user.password);

  if (!userIsMatch) {
    throw new Error('Unable to login');
  }
  return user;
};

//Hash user's password before saving

userSchema.pre('save', async function (next) {
  const user = this;

  if (user.isModified('password')) {
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
  }

  next();
});

const User = mongoose.model('User', userSchema);
module.exports = User;
