const accountService = require('../services/account.service');

const validateEmail = (req, res, next) => {
  const { email } = req.body;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isValidEmail = emailRegex.test(email);

  if (!email) {
    return res.status(404).json({ message: 'Missing "email"' });
  }
  if (!isValidEmail) {
    return res.status(422).json({ message: '"email" invalid format' });
  }

  next();
};

const validatePassword = (req, res, next) => {
  const { password } = req.body;

  if (!password) {
    return res.status(404).json({ message: 'Missing "password"' });
  }
  if (password.length < 5) {
    return res.status(422).json({ message: '"password" must be at least 5 character long' });
  }
  next();
};

const validateFirstName = (req, res, next) => {
  const { firstName } = req.body;

  if (!firstName) {
    return res.status(404).json({ message: 'Missing "firstName"' });
  }
  next();
};

const validateLastName = (req, res, next) => {
  const { lastName } = req.body;

  if (!lastName) {
    return res.status(404).json({ message: 'Missing "lastName"' });
  }
  next();
};

const validatePhone = (req, res, next) => {
  const { phone } = req.body;

  if (!phone) {
    return res.status(404).json({ message: 'Missing "phone"' });
  }
  next();
};

const validateAccount = async (req, res, next) => {
  const { email } = req.body;

  const account = await accountService.getAccountByEmail(email);

  if (account) {
    return res.status(409).json({ message: 'Account already registered' });
  }
  next();
};

module.exports = {
  validateEmail,
  validatePassword,
  validateFirstName,
  validateLastName,
  validatePhone,
  validateAccount,
};
