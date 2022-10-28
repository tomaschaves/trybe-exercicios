// Dado o array de nomes, utilize o reduce para retornar a quantidade de vezes em que aparece a letra a, maiúscula ou minúscula.
const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const expectedResult = 20;

function containsA() {
  let numbersOfA = 0; // variável para guardar o número de vezes que a letra a aparece
  names.forEach((name) => { //para cada uma das palavras, quantas vezes a letra a aparece em cada nome(name)?
    const letters = name.split(''); //para transformar cada um dos nomes, que é uma string, em um array e facilitar a contagem. isso fará com que cada uma das letras se torne um elemento dentro do array
    numbersOfA += letters.reduce((totalOfA, currentLetter) => {   //reduzir cada uma das palavras em um número, a qtdade de letras a que aparece em cada uma
      if (currentLetter.toLowerCase() === 'a') {    //verificamos se a letra atual é igual a 'a' ou 'A' 
        return totalOfA + 1;                        //aumentamos o reultado se sim
      }
      return totalOfA;                              //deixamos igual se não
    }, 0);
  });

  return numbersOfA;                                //preciso retornar esse valor
}

console.log(containsA());