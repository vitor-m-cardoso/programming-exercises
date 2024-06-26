const express = require('express');

const {
  loginRouter,
  userRouter,
  topSecretRouter,
} = require('./routes');

const app = express();

app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.use('/login', loginRouter);
app.use('/users', userRouter);
app.use('/top-secret', topSecretRouter);

module.exports = app;
