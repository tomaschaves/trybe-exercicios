const library = require('./data');

const expectedResult = [
  'Frank Herbert',
  'George R. R. Martin',
  'Isaac Asimov',
  'J. R. R. Tolkien',
];

function fantasyOrScienceFictionAuthors() {
  const wantedGenres = ['Fantasia', 'Ficção Científica'];
  return library
    .filter((book) => wantedGenres.includes(book.genre))
    .map((bookAuthor) => bookAuthor.author.name).sort();
}

console.log(fantasyOrScienceFictionAuthors());