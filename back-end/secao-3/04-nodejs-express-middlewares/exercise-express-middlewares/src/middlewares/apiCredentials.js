// const fs = require('fs');

// const { readFile } = fs.promises;
// const { join } = require('path');

const checkToken = (token) => {
  if (!token) return false;
  if (token.length !== 16) return false;
  return true;
};

const apiCredentials = async (req, res, next) => {
  const token = req.header('authorization');

  if (!checkToken(token)) {
    return res.status(401).send({ message: 'Token inválido!' });
  }
  next();
};

module.exports = apiCredentials;
