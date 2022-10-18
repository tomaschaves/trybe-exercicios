// Abaixo, você verá algumas especificações de algoritmos para desenvolver. É fundamental que você utilize o que aprendeu sobre let, const, arrow functions, template literals e ternary operator.

// Crie uma função que receba uma frase como parâmetro e retorne a maior palavra contida nesta frase.

// Exemplo:
// Copiar
//   longestWord('Antônio foi ao banheiro e não sabemos o que aconteceu') // retorna 'aconteceu'
// Dica: Nesse exercício será necessário utilizar os conhecimentos sobre array, método split e loop for/of.

// Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort().

const mesasure = (phrase) => {
  const words = phrase.split(' ');
  let maxLength = 0;
  let result = '';

  for (let index = 0; index < words.length; index +=1){
    if (words[index].length > maxLength){
      maxLength = words[index].length;
      result = words[index];
    }
  }
  return result;
}

console.log(mesasure('Antonio foi ao banheiro e não sabemos o que aconteceu'));

// outra resolução possível (gabarito)

// const longestWord = text => text.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)[0];

// console.log(longestWord("Antonio foi ao banheiro e não sabemos o que aconteceu"));