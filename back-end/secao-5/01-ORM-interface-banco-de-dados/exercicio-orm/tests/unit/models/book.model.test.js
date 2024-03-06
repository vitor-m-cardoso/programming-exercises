const {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists,
} = require('sequelize-test-helpers');

const BookModel = require('../../../src/models/book.model');

describe('Testando a camada MODEL - books', function () {
  const Book = BookModel(sequelize, dataTypes);
  const book = new Book();

  it('Deve possuir o nome "Book"', function () {
    checkModelName(Book)('Book');
  });

  it('Deve possuir as propriedades "title", "author", "pageQuantity"', function () {
    ['title', 'author', 'pageQuantity'].forEach(checkPropertyExists(book));
  });
});
