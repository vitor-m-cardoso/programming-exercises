const reader = {
  name: 'Julia',
  lastName: 'Pessoa',
  age: 21,
  favoriteBooks: [
    {
      title: 'O Senhor dos Anéis - a Sociedade do Anel',
      author: 'J. R. R. Tolkien',
      publisher: 'Martins Fontes'
    },
  ],
};

// 1 - Acesse as chaves name, lastName e title e exiba informações em um console.log() no seguinte formato:
// “O livro favorito de Julia Pessoa se chama ‘O Senhor dos Anéis - a Sociedade do Anel’.”.
const { name, lastName, favoriteBooks } = reader;

console.log(`O livro favorito de ${name} ${lastName} se chama ${favoriteBooks[0].title}.`);

// 2 - Adicione um novo livro favorito na chave favoriteBooks, que é um array de objetos.
// Atribua a essa chave um objeto que contenha as seguintes informações:
favoriteBooks.push({
  title: 'Harry Potter e o Prisioneiro de Azkaban',
  author: 'JK Rowling',
  publisher: 'Rocco'
});
console.log(favoriteBooks);

// 3 - Acesse as chaves name e favoriteBooks e faça um console.log() no seguinte formato:
  // “Julia tem XX livros favoritos.”
console.log(`${name} tem ${favoriteBooks.length} livros favoritos.`);
