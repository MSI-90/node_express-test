const Events = require('../models/Event');

const findEventById = async(eventId) => {
    const event = await Events.findByPk(eventId);
    if (!event) {
        const error = new Error(`Event with ID ${eventId} not found`);
        error.status = 404;
        throw error;
    }

    return event;
};

module.exports = {
    findEventById
}