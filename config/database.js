const dotenv = require('dotenv');
const Sequelize = require('sequelize');

dotenv.load({
  path: '.env',
});

const sequelize = new Sequelize(`${process.env.DB_URL}`, {
  dialect: 'postgres',
});

module.exports = sequelize;
