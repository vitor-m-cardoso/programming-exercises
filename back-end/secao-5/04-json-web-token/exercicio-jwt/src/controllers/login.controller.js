const loginService = require('../services/login.service');

const login = async (req, res) => {
  try {
    const credentials = req.body;

    const { status, data } = await loginService.getByUsername(credentials);

    return res.status(status).json(data);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  login,
};
