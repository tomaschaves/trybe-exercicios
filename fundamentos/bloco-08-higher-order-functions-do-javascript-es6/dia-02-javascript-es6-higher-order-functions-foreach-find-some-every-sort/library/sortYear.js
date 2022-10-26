const library = require('./data');

function booksOrderedByReleaseYearDesc() {
  return library.sort((bookA, bookB) => bookB.releaseYear - bookA.releaseYear);
}

function booksOrderedByReleaseYearAsc() {
  return library.sort((bookA, bookB) => bookA.releaseYear - bookB.releaseYear);
}

console.log(booksOrderedByReleaseYearAsc());
console.log(booksOrderedByReleaseYearDesc());