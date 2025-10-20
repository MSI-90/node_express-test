const {createBooking} = require('../services/bookings');

const reserve = async(req, res, next) => {
    try{
        // 400 Bad Request
        const { event_id, user_id } = req.body;
        if (event_id == null|| user_id == null) {
            return res.status(400).json({
                error: 'Missing required fields',
                received: req.body
            });
        }

        // Проверка на тип и значение
        if (typeof event_id !== 'number' || isNaN(event_id) || event_id <= 0) {
            return res.status(422).json({
                error: 'event_id must be a positive number',
                received: req.body
            });
        }

        if (typeof user_id !== 'string' || user_id.trim() === '') {
            return res.status(422).json({
                error: 'user_id must be a non-empty string',
                received: req.body
            });
        }

        // Создание нового бронирования
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