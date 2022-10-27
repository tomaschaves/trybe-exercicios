const library = require('./data');

const expectedResult = [
  'O Senhor dos Anéis',
  'Fundação',
  'O Chamado de Cthulhu',
];

function oldBooks() {
  const filtered = library.filter((book) => ((2022 - book.releaseYear) > 60))
  .map((book) => book.name)
  return filtered;
}

console.log(oldBooks());