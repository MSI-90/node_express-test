const {createBooking} = require('../services/bookings');
const {queryMode} = require("pg/lib/native/query");
const router = require("../routers/bookings");

const reserve = async(req, res, next) => {
    try{
        // 400 Bad Request
        const { event_id, user_id } = req.body;
        if (!event_id || !user_id) {
            return res.status(400).json({
                error: 'Missing required fields',
                received: req.body
            });
        }

        // Create new booking
        const addBooking = await createBooking(event_id, user_id);
        if (addBooking){
            res.status(201).json({
                success: true,
                message: 'Booking created successfully',
                booking: addBooking
            });
        }
    } catch (err) {
        next(err);
    }
}

module.exports = {
    reserve
};