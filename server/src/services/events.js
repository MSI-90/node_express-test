const Events = require('../models/Event');

const findEventById = async(eventId) => {
    return await Events.findByPk(eventId);
};

module.exports = {
    findEventById,
}