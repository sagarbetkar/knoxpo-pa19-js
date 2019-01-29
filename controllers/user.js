const User = require('../models/User');

exports.createUser = (req, res) => {
  if (req.body.name && req.body.email && req.body.mobile && req.body.job_title) {
    User.findOne({where: {email: req.body.email}})
      .then((user) => {
        if (user) {
          return res.json({
            message: 'Email already exists',
            status: 401
          });
        } else {
          User.create({
            name: req.body.name,
            email: req.body.email,
            mobile: req.body.mobile,
            job_title: req.body.job_title
          }).then(() => {
            res.json({
              message: 'User added successfully',
              status: 200
            });
          });
        }
      })
      .catch((errors) => {
        return res.json({
          message: 'Server Error',
          error: errors,
          status: 500
        });
      });
  } else {
    res.json({
      message: 'Incomplete Inputs',
      status: 400
    });
  }
};

exports.getUser = (req, res) => {
  User.findAndCountAll()
    .then((users) => {
      res.json({
        message: 'All user fetched',
        count: users.count,
        data: users.rows.map((user) => {
          return (user = {
            name: user.name,
            email: user.email,
            mobile: user.mobile,
            'job-title': user.job_title
          });
        }),
        status: 200
      });
    })
    .catch((errors) => {
      res.json({
        message: 'Server Error',
        error: errors,
        status: 500
      });
    });
};
