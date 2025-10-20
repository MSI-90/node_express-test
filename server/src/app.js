const syncDatabase = require('../src/config/sync');
const express = require('express');
const cors = require('cors');
const app = express();
const bookingRouter = require('../src/routers/bookings');

syncDatabase();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use('/api/bookings', bookingRouter);

app.use((err, req, res, next) => {
    // console.error(err.stack);
    const status = err.status || 500;
    res.status(status).json({
        message: status === 500 ? 'Internal Server Error' : err.message
    });
});

module.exports = app;