const userService = require('../services/user.service');

const getUserRole = async (req, res) => {
  try {
    const { authorization } = req.headers;

    const userRole = await userService.getUserRole(authorization);

    return res.status(200).json(userRole);
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  getUserRole,
};
