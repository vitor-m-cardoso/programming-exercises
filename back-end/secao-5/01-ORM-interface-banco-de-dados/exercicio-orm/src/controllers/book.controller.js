const booksService = require('../services/book.service');

const error500Message = 'Internal server error!';

const getAllBooks = async (req, res) => {
  const { author } = req.query;
  try {
    let books = []
    
    if (author) {
      books = await booksService.getBooksByAuthor(author);
    } else {
      books = await booksService.getAllBooks();
    }

    return res.status(200).json(books);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: error500Message });
  }
};

const getBookById = async (req, res) => {
  const { id } = req.params;
  try {
    const book = await booksService.getBookById(id);

    if (!book) {
      return res.status(404).json({ message: 'Book not found!' });
    }
    return res.status(200).json(book);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: error500Message });
  }
};

const createBook = async (req, res) => {
  const book = req.body;
  try {
    const newBook = await booksService.createBook(book);

    return res.status(201).json(newBook);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: error500Message });
  }
};

const updateBook = async (req, res) => {
  const {
    params: { id },
    body: { title, author, pageQuantity },
  } = req;
  try {
    const updatedBook = await booksService.updateBook({ id, title, author, pageQuantity });

    if (!updatedBook) {
      return res.status(404).json({ message: 'Book not found!' });
    }
    const book = { id, title, author, pageQuantity };

    return res.status(200).json(book);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: 'Internal server error!' });
  };
};

const removeBook = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedBook = await booksService.removeBook(id);

    if (!deletedBook) {
      return res.status(404).json({ message: 'Book not found!' });
    }
    return res.status(200).json({ message: 'Book deleted successfully!' });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: 'Internal server error!' });
  };
};

module.exports = {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  removeBook,
};
