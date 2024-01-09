const validateSignup = (req, res, next) => {
  const { email, password, firstName, phone } = req.body;

  if (!email || !password || !firstName || !phone) {
    return res.status(401).send({ message: 'Campos ausentes!' });
  }
  next();
};

module.exports = validateSignup;