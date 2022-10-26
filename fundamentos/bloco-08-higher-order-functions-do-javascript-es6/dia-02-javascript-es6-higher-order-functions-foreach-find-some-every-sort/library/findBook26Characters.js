const library = require('./data');

const expectedResult = {
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  genre: 'Fantasia',
  author: {
        name: 'George R. R. Martin',
    birthYear: 1948,
  },
    releaseYear: 1991,
};
function getNamedBook(number) {
  return library.find((book) => book.name.length === number);
}

console.log(getNamedBook(26));