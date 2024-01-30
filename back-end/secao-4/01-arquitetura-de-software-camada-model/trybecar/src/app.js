const express = require('express');

const app = express();

const passengersRouter = require('./routes/passengersRouter');

app.use(express.json());

app.use('/passengers', passengersRouter);

module.exports = app;
