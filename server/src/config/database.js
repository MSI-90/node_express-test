const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    dialect: process.env.DIALECT,
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    logging: false, // Set to true to log SQL queries
});

module.exports = sequelize;