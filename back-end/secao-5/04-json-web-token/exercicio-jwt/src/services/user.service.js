const auth = require('../utils/auth');

const getUserRole = async (authorization) => {
  const user = auth.verify(authorization);
  return user;
};

module.exports = { 
  getUserRole,
};
