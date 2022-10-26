const library = require('./data');

function authorUnique() {
  return library.every((book) => 
    library.some((bookSome) =>
      (bookSome.author.birthYear === book.author.birthYear)
      && (bookSome.author.name !== book.author.name)
    )
  );
}

console.log(authorUnique());