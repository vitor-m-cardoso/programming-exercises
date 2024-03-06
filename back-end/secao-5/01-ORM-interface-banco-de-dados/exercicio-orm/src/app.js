require('dotenv').config();
const express = require('express');
const app = express();

const bookRoutes = require('./routes/book.route');

app.use(express.json());

app.use('/books', bookRoutes);

module.exports = app;
