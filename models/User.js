/**
 * CREATE TABLE 'crud'.'users' (                                            // use ` instead of '
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `mobile` BIGINT(11) NOT NULL,
  `job_title` VARCHAR(255) NOT NULL,
  `createdAt` DATE,
  `updatedAt` DATE,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC),
  UNIQUE INDEX `mobile_UNIQUE` (`mobile` ASC));
 */

const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('user', {
  id: {type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true},
  name: {type: Sequelize.STRING, allowNull: false},
  email: {type: Sequelize.STRING, allowNull: false, unique: true},
  mobile: {type: Sequelize.BIGINT, allowNull: false, unique: true},
  job_title: {type: Sequelize.STRING, allowNull: false},
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE
});

module.exports = User;
