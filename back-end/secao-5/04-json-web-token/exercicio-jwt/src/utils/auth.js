const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'secret';

const jwtConfig = {
  expiresIn: '1h',
  algorithm: 'HS256',
};

const createToken = ({ username, admin }) => {
  const token = jwt.sign({ username, admin }, secret, jwtConfig);

  return token;
};

const verify = (token) => {
  const decoded = jwt.verify(token, secret);

  return decoded;
};

module.exports = {
  createToken,
  verify,
};
