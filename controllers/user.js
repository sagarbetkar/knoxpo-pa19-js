const request = require('request');
const User = require('../models/User');
const dotenv = require('dotenv');

dotenv.load({
  path: '.env'
});

const apiKey = process.env.OWM_API_KEY;

exports.createUser = (req, res) => {
  if (
    req.body.name &&
    req.body.email &&
    req.body.mobile &&
    req.body.job_title
  ) {
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
            return res.json({
              message: 'User added successfully',
              status: 201
            });
          });
        }
      })
      .catch((error) => {
        return res.json({
          message: 'Server Error',
          error: error,
          status: 500
        });
      });
  } else {
    return res.json({
      message: 'Incomplete Inputs',
      status: 400
    });
  }
};

exports.getUser = (req, res) => {
  User.findAndCountAll()
    .then((users) => {
      if (users.count == 0) {
        return res.json({
          message: 'No user found',
          status: 404
        });
      } else {
        return res.json({
          message: 'All user fetched',
          count: users.count,
          data: users.rows.map((user) => {
            return (user = {
              id: user.id,
              name: user.name,
              email: user.email,
              mobile: user.mobile,
              designation: user.job_title
            });
          }),
          status: 200
        });
      }
    })
    .catch((error) => {
      res.json({
        message: 'Server Error',
        error: error,
        status: 500
      });
    });
};

exports.getUserById = (req, res) => {
  User.findOne({where: {id: req.params.id}})
    .then((user) => {
      if (user == null) {
        return res.json({
          message: 'No User found',
          status: 404
        });
      } else {
        return res.json({
          data: {
            id: user.id,
            name: user.name,
            email: user.email,
            mobile: user.mobile,
            designation: user.job_title
          },
          status: 200
        });
      }
    })
    .catch((error) => {
      return res.json({
        message: 'Server Error',
        error: error,
        status: 500
      });
    });
};

exports.updateUser = (req, res) => {
  if (
    req.body.name &&
    req.body.email &&
    req.body.mobile &&
    req.body.job_title
  ) {
    User.findOne({where: {id: req.params.id}})
      .then((user) => {
        if (user == null) {
          return res.json({
            message: 'No User Found',
            status: 404
          });
        } else {
          user
            .update(
              {
                name: req.body.name,
                email: req.body.email,
                mobile: req.body.mobile,
                job_title: req.body.job_title
              },
              {fields: ['name', 'email', 'mobile', 'job_title']}
            )
            .then(() => {
              return res.json({
                message: 'User updated successfully',
                status: 200
              });
            });
        }
      })
      .catch((error) => {
        return res.json({
          message: 'Server Error',
          error: error,
          status: 500
        });
      });
  } else {
    return res.json({
      message: 'Incomplete Inputs',
      status: 400
    });
  }
};

exports.deleteUser = (req, res) => {
  User.findOne({where: {id: req.params.id}})
    .then((user) => {
      if (user == null) {
        return res.json({
          message: 'No user found',
          status: 404
        });
      } else {
        user.destroy();
        return res.json({
          message: 'User deleted successfully',
          status: 200
        });
      }
    })
    .catch((error) => {
      return res.json({
        message: 'Server Error',
        error: error,
        status: 500
      });
    });
};

exports.postWeather = (req, res) => {
  let city = req.body.city;
  let url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;

  request(url, (err, response, body) => {
    if (err) {
      res.json({
        message: 'Error, please try again',
        status: 500
      });
    } else {
      let weather = JSON.parse(body);
      if (weather == undefined) {
        res.json({
          message: 'Error, please try again',
          status: 500
        });
      } else {
        temp = weather.list.map((list) => list.main.temp);
        dateTime = weather.list.map((list) => list.dt_txt);
        res.json({
          message: {
            temp,
            dateTime
          },
          status: 200
        });
      }
    }
  });
};
