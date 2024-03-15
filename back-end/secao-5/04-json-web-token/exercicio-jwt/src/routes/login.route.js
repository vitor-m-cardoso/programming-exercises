const router = require('express').Router();

const loginController = require('../controllers/login.controller');
const {
  validatePassword,
  validateUsername,
} = require('../middlewares/login.middleware');

const validateLogin = [validateUsername, validatePassword];

router.post('/', validateLogin, loginController.login);

module.exports = router;