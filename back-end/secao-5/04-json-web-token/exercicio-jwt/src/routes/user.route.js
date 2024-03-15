const router = require('express').Router();

const validateToken = require('../middlewares/auth');
const userController = require('../controllers/user.controller');

router.get('/me', validateToken, userController.getUserRole);

module.exports = router;