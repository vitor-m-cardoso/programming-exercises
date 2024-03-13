const router = require('express').Router();

const userBookController = require('../controllers/userBook.controller');

router.get('/:id', userBookController.getUsersBooksById);

module.exports = router;
