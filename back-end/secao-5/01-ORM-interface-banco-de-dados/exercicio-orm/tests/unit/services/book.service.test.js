const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

chai.use(sinonChai);

const { Book } = require('../../../src/models');
const bookService = require('../../../src/services/book.service');
const {
  allBooksFromModel,
  allBooksFromDB,
  bookFromBD,
  bookFromModel,
  booksFilteredByAuthorFromDB,
  booksFilteredByAuthorFromModel,
  newBookFromBD,
  newBookFromModel,
} = require('../mocks/books.mock');

const { expect } = chai;

describe('Testando a camada SERVICE - books', function () {
  afterEach(function() { sinon.restore(); });

  it('Deve retornar todos os books cadastrados', async function () {
    sinon.stub(Book, 'findAll').resolves(allBooksFromDB);

    const books = await bookService.getAllBooks();

    expect(books).to.be.an('array');
    expect(books).to.be.deep.equal(allBooksFromModel);
  });

  it('Deve retornar o livro com o id correto', async function () {
    sinon.stub(Book, 'findByPk').resolves(bookFromBD);

    const bookId = 12;
    const book = await bookService.getBookById(bookId);

    expect(book).to.be.an('object');
    expect(book).to.be.deep.equal(bookFromModel);
  });

  it('Não deve retornar um livro caso o id não exista', async function () {
    sinon.stub(Book, 'findByPk').resolves(null);

    const bookId = 99;
    const book = await bookService.getBookById(bookId);

    expect(book).to.be.deep.equal(null);
  });

  it('Deve retornar os livros filtrados pelo autor informado', async function () {
    sinon.stub(Book, 'findAll').resolves(booksFilteredByAuthorFromDB);

    const author = 'Dan Brown';
    const books = await bookService.getBooksByAuthor(author);

    expect(books).to.be.an('array');
    expect(books).to.be.deep.equal(booksFilteredByAuthorFromModel);
  });

  it('Deve retornar o livro cadastrado com sucesso', async function () {
    sinon.stub(Book, 'create').resolves(newBookFromBD);

    const newBook = {
      id: 5,
      title: "Okay let's go",
      author: "Roger That",
      pageQuantity: 201,
      updatedAt: "2024-03-06T20:10:37.453Z",
      createdAt: "2024-03-06T20:10:37.453Z"
    };
    
    const createdBook = await bookService.createBook(newBook);

    expect(createdBook).to.be.an('object');
    expect(createdBook).to.be.deep.equal(newBookFromModel);
  });

  it('Deve atualizar um livro com sucesso', async function () {
    sinon.stub(Book, 'update').resolves([true]);

    const bookToUpdate = {
      id: 15,
      title: "Okay let's go",
      author: "Roger That",
      pageQuantity: 201,
      publisher: "Counter Strike",
    };

    const updatedBook = await bookService.updateBook(bookToUpdate);

    expect(updatedBook).to.be.a('boolean');
    expect(updatedBook).to.be.equal(true);
  });

  it('Deve deletar um livro com sucesso', async function () {
    sinon.stub(Book, 'destroy').resolves(true);

    const bookId = 67;
    const deletedBook = await bookService.removeBook(bookId);

    expect(deletedBook).to.be.a('boolean');
    expect(deletedBook).to.be.equal(true);
  });
});
