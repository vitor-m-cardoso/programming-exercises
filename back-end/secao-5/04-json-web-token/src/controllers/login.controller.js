const loginService = require('../services/login.service');

const { createToken } = require('../utils/jwt');

const isBodyValid = (email, password) => email && password;

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!isBodyValid(email, password)) {
      return res.status(401).json({ message: 'Email and password required' });
    }

    const user = await loginService.getByEmail(email);

    if (!user || user.password !== password) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const token = createToken(user);
    
    res.status(200).json({ token });
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  login,
};
