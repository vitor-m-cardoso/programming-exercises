const jwt = require('jsonwebtoken');

const userService = require('../services/user.service');

const secret = process.env.JWT_SECRET || 'secret';

const extractToken = (bearerToken) => {
  return bearerToken.split(' ')[1];
}

const validateToken = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(404).json({ error: 'Token not found' });
  }

  const token = extractToken(authorization);

  try {
    const decoded = jwt.verify(token, secret);

    const user = await userService.getByUserId(decoded.data.userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    req.user = user;
    next();
  } catch (err) {
    console.error(err.message);
    return res.status(401).json({ message: 'Invalid Token' });
  }
};

module.exports = {
  validateToken,
};
