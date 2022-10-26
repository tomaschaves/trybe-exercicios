const books = require('./data');
const library = require('./data');
const expectedResult = true;

function someBookWasReleaseOnThe80s() {
  return library.some((book) => (
    book.releaseYear >= 1980 && book.releaseYear < 1990
  ))
}

console.log(someBookWasReleaseOnThe80s());

//mesma coisa que isso: 
// function someBookWasReleaseOnThe80s() {
//   return library.some((book) => book.releaseYear >= 1980 && book.releaseYear < 1990)
// }