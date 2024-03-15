const { User } = require('../models');

const getByUserId = async (id) => {
  const user = await User.findOne({ where: { id } });

  return user;
};

module.exports = {
  getByUserId,
};
