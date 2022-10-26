const library = require('./data');

const found = (year) => {
  return library.find((book) => book.author.birthYear === year);
} 

console.log(found(1920));