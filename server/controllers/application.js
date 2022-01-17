const Application = require('../models/application');
const fs = require('fs');

exports.createApplication = async (req, res, next) => {
  try {
    // const application = await Application.findById(req.body._id);
    // if (!application) {
    //   res.status(404).json({
    //     message: 'Application was NOT found!',
    //   });
    //   return;
    // }
    const application = new Application({
      type: req.body.type,
      subType: req.body.subType,
      belongsTo: req.userId,
    });

    const result = await application.save();
    const dirOfApplication = './applications/' + result._id;

    if (!fs.existsSync(dirOfApplication)) {
      fs.mkdirSync(dirOfApplication, { recursive: true });
    }
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
        message: 'Application was NOT found!',
      });
      return;
    }
    if (application.belongsTo != req.userId) {
      res.status(404).json({
        message: 'Application DOES NOT BELONG TO YOU!',
      });
      return;
    }
    res.status(201).json({
      message: 'Application was found!',
      application: application,
    });
  } catch (e) {
    console.log(e);
  }
};
