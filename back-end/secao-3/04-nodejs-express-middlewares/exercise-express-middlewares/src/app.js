const express = require('express');

const app = express();
app.use(express.json());

const activitiesRouter = require('./routes/activitiesRouter');
const signupRouter = require('./routes/signupRouter');

const HTTP_OK_STATUS = 200;

app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.use('/signup', signupRouter);
app.use('/activities', activitiesRouter);

module.exports = app;
