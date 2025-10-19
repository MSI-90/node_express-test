const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');

router.post('/reserve', async (req, res) => {
    try{
        const { event_id, user_id } = req.body;
        console.log(user_id);
        if (!event_id || !user_id) {
            return res.status(400).json({
                error: 'Missing required fields',
                received: req.body
            })
        }

        const addBooking = await Booking.create({ event_id: event_id, user_id: user_id });
        console.log(addBooking);
    } catch (error) {
        console.log(error.message);
    }


});

module.exports = router;