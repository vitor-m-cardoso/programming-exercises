require('dotenv').config();

const loginRouter = require('./routes/login.route');

const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (_req, res) => {
  return res.status(200).json({ message: 'App working' });
});

app.use('/login', loginRouter);

module.exports = app;
