const syncDatabase = require('../src/config/sync');
const express = require('express');
const app = express();
const bookingRouter = require('../src/routers/bookings');

// syncDatabase();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/bookings', bookingRouter);

module.exports = app;