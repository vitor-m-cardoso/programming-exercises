const router = require('express').Router();

const bookController = require('../controllers/book.controller');
const { validateTitle, validateAuthor, validatePageQuantity } = require('../middlewares/book.middleware');

const validateBooks = [validateTitle, validateAuthor, validatePageQuantity];

router.get('/:id', bookController.getBookById);
router.get('/', bookController.getAllBooks);

router.post('/', validateBooks, bookController.createBook);

router.put('/:id', validateBooks, bookController.updateBook);

router.delete('/:id', bookController.removeBook);

module.exports = router;
