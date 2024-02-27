const express = require('express');

const { passengerRouter, driversRouter } = require('./routes');

const app = express();

app.use(express.json());

app.use('/passengers', passengerRouter);
app.use('/drivers', driversRouter);

module.exports = app;
