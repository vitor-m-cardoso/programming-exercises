const router = require('express').Router();

const { validateSignup } = require('../middlewares');
const generateToken = require('../utils/generateToken');

router.post('/', validateSignup, (_req, res) => {
  const token = generateToken();
  return res.status(201).json({ token });
});

module.exports = router;
