const bodyParser = require('body-parser');
const express = require('express');

const accountRouter = require('./routes/account.route');

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/accounts', accountRouter);

module.exports = app;
