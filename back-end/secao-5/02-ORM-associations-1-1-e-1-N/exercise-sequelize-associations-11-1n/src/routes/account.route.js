const router = require('express').Router();

const accountController = require('../controllers/account.controller');
const commentController = require('../controllers/comment.controller');

const {
  validateEmail,
  validatePassword,
  validateFirstName,
  validateLastName,
  validatePhone,
  validateAccount,
} = require('../middlewares/account.middleware');
const {
  validateMessage,
} = require('../middlewares/comment.middleware');

const accountValidations = [
  validateEmail,
  validatePassword,
  validateFirstName,
  validateLastName,
  validatePhone,
  validateAccount,
];

router.get('/:id/comments', commentController.getComments);
router.get('/:id', accountController.getById);
router.get('/v2/:id', accountController.getAccountById);

router.post('/:id/comment', validateMessage, commentController.createComment);
router.post('/', accountValidations, accountController.createAccount);

module.exports = router;