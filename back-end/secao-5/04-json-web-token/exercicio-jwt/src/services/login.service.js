const { User } = require('../models');

const { createToken } = require('../utils/auth');

const getByUsername = async (credentials) => {
  const user = await User.findOne({ where: { username: credentials.username } });

  if (!user || user.password !== credentials.password) {
    return {
      status: 401,
      data: { error: { message: 'Invalid username or password' } },
    };
  }
  const { username, admin } = user;
  const token = createToken({ username, admin });

  return { status: 200, data: { token } };
};

module.exports = {
  getByUsername,
};
