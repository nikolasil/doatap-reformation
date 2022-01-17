const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const universitySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('University', universitySchema);
