const connection = require('./connection');

// const getAuthorById = async (findByAuthorId) => {
//   const [booksData] = await connection.execute(
//     'SELECT id, title, author_id FROM model_example.books WHERE author_id=?;',
//     [findByAuthorId]
//   );

//   if (booksData.length === 0) return null;
  
//   const { id, title, authorId } = booksData.map(serialize)[0];

//   return 
// }

const serialize = (booksData) => ({
  id: booksData.id,
  title: booksData.title,
  authorId: booksData.author_id
});

const getAll = async () => {
  const [booksData] = await connection.execute(
    'SELECT id, title, author_id FROM model_example.books;',
  );
  return booksData.map(serialize);
};

module.exports = {
  getAll,
}