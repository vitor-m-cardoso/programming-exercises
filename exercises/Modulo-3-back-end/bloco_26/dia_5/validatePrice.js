const express = require('express');

const app = express();

app.post('/recipes', validatePrice);

function validatePrice(req, res, next) {
  
};

app.listen(8000, () => {
  console.log('Listening at 8000');
});
