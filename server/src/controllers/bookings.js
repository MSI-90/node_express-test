const {createBooking} = require('../services/bookings');

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

        if (event_id <= 0){
            return res.status(422).json({
                error: 'Unprocessable Entity',
                received: req.body
            });
        }

        if (isNaN(event_id) || typeof user_id !== 'string'){
            return res.status(422).json({
                error: 'Unprocessable Entity',
                received: req.body
            });
        }

        // Create new booking
        const addBooking = await createBooking(event_id, user_id);

        res.status(201).json({
            success: true,
            message: 'Booking created successfully',
            booking: addBooking
        });

    } catch (err) {
        next(err);
    }
}

module.exports = {
    reserve
};