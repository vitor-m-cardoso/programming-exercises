const auth = require('../utils/auth');

const validateToken = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: { message: 'Token not found' } });
  }

  try {
    const user = auth.verify(authorization);

    req.locals = { user };
    next();
  } catch (error) {
    return res.status(401).json({ error: { message: error.message } });
  }
};

module.exports = validateToken;
