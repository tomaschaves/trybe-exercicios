const library = require('./data');
const expectedResult = false;

function everyoneWasBornOnSecXX() {
  return library.every((book) => (
    book.author.birthYear > 1800 && book.author.birthYear <= 2000
  ))
}

console.log(everyoneWasBornOnSecXX(library));