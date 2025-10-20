const express = require('express');
const router = express.Router();
const bookingsController = require('../controllers/bookings');

router.post('/reserve', bookingsController.reserve);


module.exports = router;