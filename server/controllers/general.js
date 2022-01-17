const Application = require('../models/application');
const country = require('../models/country');

const Country = require('../models/country');
const University = require('../models/university');

exports.postCountry = async (req, res, next) => {
  const name = req.body.name;
  const code = req.body.code;
  try {
    const country = new Country({
      name: name,
      code: code,
    });
    const result = await country.save();
    res.status(201).json({ message: 'Country created', countryId: result._id });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
exports.getCountries = async (req, res, next) => {
  try {
    const countries = await Country.find();
    res.status(200).json([countries]);
  } catch (e) {
    console.log(e);
  }
};

exports.postUniversity = async (req, res, next) => {
  const name = req.body.name;
  const code = req.body.code;
  const country = req.body.country;
  try {
    const university = new University({
      name: name,
      code: code,
      country: country,
    });
    const result = await university.save();
    res
      .status(201)
      .json({ message: 'University created', universityId: result._id });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
exports.getUniversities = async (req, res, next) => {
  try {
    const universities = await University.find({ country: req.params.country });
    res.status(200).json([universities]);
  } catch (e) {
    console.log(e);
  }
};
