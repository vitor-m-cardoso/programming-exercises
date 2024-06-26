const { Book } = require('../models');

const getAllBooks = async () => {
  const books = await Book.findAll({ order: [['author', 'ASC']] });

  return books;
};

const getBookById = async (id) => {
  const book = await Book.findByPk(id);

  return book;
};

const getBooksByAuthor = async (author) => {
  const books = await Book.findAll(
    { 
      where: { author },
      order: [['author', 'ASC']],
    },
  );

  return books;
};

const createBook = async ({ title, author, pageQuantity, publisher }) => {
  const newBook = await Book.create({ title, author, pageQuantity, publisher });
  return newBook;
};

const updateBook = async ({ id, title, author, pageQuantity, publisher }) => {
  const [updatedBook] = await Book.update(
    { title, author, pageQuantity, publisher },
    { where: { id } },
  );
  
  return updatedBook;
};

const removeBook = async (id) => {
  const book = await Book.destroy({ where: { id } });

  return book;
};

module.exports = {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  removeBook,
  getBooksByAuthor,
};
