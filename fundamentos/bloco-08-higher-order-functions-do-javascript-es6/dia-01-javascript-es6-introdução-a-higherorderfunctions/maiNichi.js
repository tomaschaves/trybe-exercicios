// Crie uma função que retorne a string 'Acordando!!';
// Crie outra função que retorne a string 'Bora tomar café!!';
// Crie mais uma função que retorne a string 'Partiu dormir!!';
// Agora desenvolva uma HOF chamada doingThings e configure esta função para que imprima no console o resultado da execução das funções que você criou nos exemplos anteriores. Exemplo:

// Ao chamar a função doingThings:
//doingThings(wakeUp);

// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!

const acordando = () => 'Acordando!!';
const cafe = () => 'Bora tomar café!!';
const dormir = () => 'Partiu dormir!!';

const doingThings = (text) => {
  const resultado = text();
  console.log(resultado);
};

doingThings(acordando);
doingThings(cafe);
doingThings(dormir);