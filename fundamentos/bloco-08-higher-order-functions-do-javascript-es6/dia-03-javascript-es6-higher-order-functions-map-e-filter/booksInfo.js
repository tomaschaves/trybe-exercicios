const library = require('./data');

const expectedResult = [
  'As Crônicas de Gelo e Fogo - Fantasia - George R. R. Martin',
  'O Senhor dos Anéis - Fantasia - J. R. R. Tolkien',
  'Fundação - Ficção Científica - Isaac Asimov',
  'Duna - Ficção Científica - Frank Herbert',
  'A Coisa - Terror - Stephen King',
  'O Chamado de Cthulhu - Terror - H. P. Lovecraft',
];

// function formatedBookNames() {
//   const nameBook = library.find
//   const genre = 
//   const nameAuthor = 
//   // escreva seu código aqui
// }

const formatedBookNames = library.map((book) => `${book.name} - ${book.genre} - ${book.author.name}`);

console.log(formatedBookNames);