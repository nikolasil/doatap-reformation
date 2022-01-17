const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const applicationSchema = new Schema({
  belongsTo: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  status: {
    type: Number,
    enum: [0, 1, 2, 3, 4],
    default: 0,
    required: true,
  },
  type: {
    type: String,
  },
  subType: {
    type: String,
  },
});

module.exports = mongoose.model('Application', applicationSchema);
