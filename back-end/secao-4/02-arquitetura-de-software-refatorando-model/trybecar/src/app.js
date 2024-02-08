const express = require('express');

const passengerRouter = require('./routes/passengers.router');
const driversRouter = require('./routes/drivers.router');

const app = express();

app.use(express.json());

app.use('/passengers', passengerRouter);
app.use('/drivers', driversRouter);

module.exports = app;
