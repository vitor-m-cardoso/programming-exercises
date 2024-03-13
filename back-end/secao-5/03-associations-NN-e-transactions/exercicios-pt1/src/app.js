require('dotenv').config();
const express = require('express');

const userBookRoutes = require('./routes/userBook.route');

const app = express();

app.use(express.json());

app.use('/usersbooks', userBookRoutes);

module.exports = app;
