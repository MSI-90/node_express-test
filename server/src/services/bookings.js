const Booking = require("../models/Booking");
const eventService = require('../services/events');

const createBooking = async(eventId, user_id) => {
    const event = await eventService.findEventById(eventId);
    if (!event) {
        const error = new Error(`Event with ID ${eventId} not found`);
        error.status = 404;
        throw error;
    }

    return await Booking.create({ event_id: event.id, user_id: user_id });
}

module.exports = {
    createBooking
};