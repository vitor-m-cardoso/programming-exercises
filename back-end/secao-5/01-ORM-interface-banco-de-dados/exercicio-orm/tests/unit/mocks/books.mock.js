const allBooksFromDB = [
  {
    id: 1,
    title: "O Código Da Vinci",
    author: "Dan Brown",
    pageQuantity: 1000,
    createdAt: "2024-03-06T13:50:06.000Z",
    updatedAt: "2024-03-06T13:50:06.000Z"
  },
  {
    id: 2,
    title: "Anjos e Demônios",
    author: "Dan Brown",
    pageQuantity: 763,
    createdAt: "2024-03-06T13:50:06.000Z",
    updatedAt: "2024-03-06T13:50:06.000Z"
  },
  {
    id: 3,
    title: "A volta dos que não foram",
    author: "Vitor",
    pageQuantity: 998,
    createdAt: "2024-03-06T14:08:24.000Z",
    updatedAt: "2024-03-06T14:08:24.000Z"
  }
];
const allBooksFromModel = [
  {
    id: 1,
    title: "O Código Da Vinci",
    author: "Dan Brown",
    pageQuantity: 1000,
    createdAt: "2024-03-06T13:50:06.000Z",
    updatedAt: "2024-03-06T13:50:06.000Z"
  },
  {
    id: 2,
    title: "Anjos e Demônios",
    author: "Dan Brown",
    pageQuantity: 763,
    createdAt: "2024-03-06T13:50:06.000Z",
    updatedAt: "2024-03-06T13:50:06.000Z"
  },
  {
    id: 3,
    title: "A volta dos que não foram",
    author: "Vitor",
    pageQuantity: 998,
    createdAt: "2024-03-06T14:08:24.000Z",
    updatedAt: "2024-03-06T14:08:24.000Z"
  }
];

const bookFromBD = {
  id: 12,
  title: "Power Rangers",
  author: "Ranger Vermelho",
  pageQuantity: 9999,
  createdAt: "2024-03-06T13:50:06.000Z",
  updatedAt: "2024-03-06T13:50:06.000Z"
};
const bookFromModel = {
  id: 12,
  title: "Power Rangers",
  author: "Ranger Vermelho",
  pageQuantity: 9999,
  createdAt: "2024-03-06T13:50:06.000Z",
  updatedAt: "2024-03-06T13:50:06.000Z"
};

const booksFilteredByAuthorFromDB = [
  {
    id: 1,
    title: "O Código Da Vinci",
    author: "Dan Brown",
    pageQuantity: 1000,
    createdAt: "2024-03-06T13:50:06.000Z",
    updatedAt: "2024-03-06T13:50:06.000Z"
  },
  {
    id: 2,
    title: "Anjos e Demônios",
    author: "Dan Brown",
    pageQuantity: 763,
    createdAt: "2024-03-06T13:50:06.000Z",
    updatedAt: "2024-03-06T13:50:06.000Z"
  },
];
const booksFilteredByAuthorFromModel = [
  {
    id: 1,
    title: "O Código Da Vinci",
    author: "Dan Brown",
    pageQuantity: 1000,
    createdAt: "2024-03-06T13:50:06.000Z",
    updatedAt: "2024-03-06T13:50:06.000Z"
  },
  {
    id: 2,
    title: "Anjos e Demônios",
    author: "Dan Brown",
    pageQuantity: 763,
    createdAt: "2024-03-06T13:50:06.000Z",
    updatedAt: "2024-03-06T13:50:06.000Z"
  },
];

const newBookFromBD = {
  id: 5,
  title: "Okay let's go",
  author: "Roger That",
  pageQuantity: 201,
  updatedAt: "2024-03-06T20:10:37.453Z",
  createdAt: "2024-03-06T20:10:37.453Z"
};
const newBookFromModel = {
  id: 5,
  title: "Okay let's go",
  author: "Roger That",
  pageQuantity: 201,
  updatedAt: "2024-03-06T20:10:37.453Z",
  createdAt: "2024-03-06T20:10:37.453Z"
};

module.exports = {
  allBooksFromDB,
  allBooksFromModel,
  bookFromBD,
  bookFromModel,
  booksFilteredByAuthorFromDB,
  booksFilteredByAuthorFromModel,
  newBookFromBD,
  newBookFromModel,
};
