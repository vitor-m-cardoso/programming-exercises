require('dotenv').config();

const express = require('express');

const patientRouter = require('./routes/patient.route');
const planRouter = require('./routes/plan.route');
const surgeryRouter = require('./routes/surgery.route');

const app = express();
app.use(express.json());

// Não remova a linha abaixo, pois pode causar problema nos testes
app.get('/', (_req, res) => res.send('ok'));

app.use('/patients', patientRouter);
app.use('/plans', planRouter);
app.use('/surgeries', surgeryRouter);

module.exports = app;