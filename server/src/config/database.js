const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('booking', 'admin', 'admin_password', {
    dialect: 'postgres',
    host: 'localhost',
    port: 5440,
    logging: false, // Set to true to log SQL queries
});

module.exports = sequelize;