require('dotenv').config();
const { Sequelize } = require('sequelize');

const pr = process.env;

const sequelize = new Sequelize(pr.DB_NAME, pr.DB_USER, pr.DB_PASSWORD, {
    dialect: 'postgres',
    host: 'localhost',
    port: 5440,
    logging: false, // Set to true to log SQL queries
});

module.exports = sequelize;