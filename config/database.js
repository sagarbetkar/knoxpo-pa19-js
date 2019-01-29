const dotenv = require('dotenv');
const Sequelize = require('sequelize');

dotenv.load({
  path: '.env'
});

const sequelize = new Sequelize({
  database: process.env.MYSQL_DATABASE,
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  dialect: 'mysql',
  operatorsAliases: false
});

module.exports = sequelize;
