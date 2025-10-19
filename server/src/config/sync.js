const sequelize = require("./database");
const Event = require('../models/Event');
const Booking = require("../models/Booking");

const syncDatabase = async() => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');

        await sequelize.sync({ alter: true }); // создаёт таблицы, если их нет
        console.log("Tables created or updated!");
    } catch (error) {
        console.error('Error syncing database:', error);
    }
}

module.exports = syncDatabase;