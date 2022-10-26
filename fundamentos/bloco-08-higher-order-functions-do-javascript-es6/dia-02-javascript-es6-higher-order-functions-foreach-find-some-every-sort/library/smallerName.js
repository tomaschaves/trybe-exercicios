const library = require('./data');

function smallerName() {
  let nameBook;
  // escreva aqui o seu código
  library.forEach((book) =>{
    if(!nameBook || book.name.length < nameBook.length) {             //quando minha variável está vazia (!nameBook) ou quando encontro uma string menor
      nameBook = book.name;
    }

  })
  // Variável nameBook que receberá o valor do menor nome;
  return nameBook;
}

console.log(smallerName(library));