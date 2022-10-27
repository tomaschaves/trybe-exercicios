const books = require('./data');
const library = require('./data');

const expectedResult = 'O Senhor dos Anéis';

function authorWith3DotsOnName() {
  return library.find((book) => (
    book.author.name[1] === '.' && 
    book.author.name[4] === '.' &&
    book.author.name[7] === '.'
  )).name;
}