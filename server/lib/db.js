const mongoose = require('mongoose');

const connectToDb = async () => {
  try {
    const db = await mongoose.connect('mongodb://localhost:27017/doatap', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
    return db;
  } catch (e) {
    console.log('Connection to MongoDB failed ' + e);
    process.exit(1);
  }
};

module.exports = connectToDb;
