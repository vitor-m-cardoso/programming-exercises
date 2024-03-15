const auth = require('../utils/auth');

const getToken = (bearerToken) => bearerToken.split(' ')[1];

const topSecretAuth = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: { message: 'Token not found' } });
  }

  try {
    const user = auth.verify(authorization);

    if (!user.admin) {
      return res.status(401).json({ error: { message: 'Restricted access' } });
    }

    req.locals = { user };
    next();
  } catch (error) {
    return res.status(401).json({ error: { message: error.message } });
  }
};

module.exports = topSecretAuth;
