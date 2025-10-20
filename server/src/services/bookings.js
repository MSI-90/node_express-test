const Booking = require("../models/Booking");
const eventService = require('../services/events');

const createBooking = async(eventId, user_id) => {
    try{
        const event = await eventService.findEventById(eventId);
        return await Booking.create({ event_id: event.id, user_id: user_id });

    } catch (error) {
        if (error.name === 'SequelizeUniqueConstraintError') {
            const customError = new Error('User already has a booking for this event');
            customError.status = 409;
            throw customError;
        }

        throw error;
    }
}

module.exports = {
    createBooking
};