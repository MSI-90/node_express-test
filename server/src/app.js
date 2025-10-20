const syncDatabase = require('../src/config/sync');
const express = require('express');
const app = express();
const bookingRouter = require('../src/routers/bookings');

// syncDatabase();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/bookings', bookingRouter);

app.use((err, req, res, next) => {
    // console.error(err.stack);
    const status = err.status || 500; // если статус не указан — по умолчанию 500
    res.status(status).json({
        message: status === 500 ? 'Internal Server Error' : err.message
    });
});

module.exports = app;