const router = require('express').Router();

const topSecretController = require('../controllers/topSecret.controller');
const topSecretAuth = require('../middlewares/topSecret.middleware');

router.get('/', topSecretAuth, topSecretController.getTopSecret);

module.exports = router;