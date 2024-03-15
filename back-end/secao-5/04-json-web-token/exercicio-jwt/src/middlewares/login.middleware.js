const validateUsername = (req, res, next) => {
  const { username } = req.body;

  if (!username) {
    return res.status(422).json({ error: { message: 'Missing "username"' } });
  }
  if (username.length < 5) {
    return res
      .status(422)
      .json({ error: { message: '"username" must be at least 5 characters long' } });
  }
  next();
};

const validatePassword = (req, res, next) => {
  const { password } = req.body;

  if (!password) {
    return res.status(422).json({ error: { message: 'Missing "password"' } });
  }
  if (password.length < 5) {
    return res
      .status(422)
      .json({ error: { message: '"password" must be at least 5 characters long' } });
  }
  next();
};

module.exports = {
  validateUsername,
  validatePassword,
};
