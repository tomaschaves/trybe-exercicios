
// Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: “Tente novamente” ou “Parabéns você ganhou”).

const lottery = () => {
  const luckyNumber = (Math.ceil(Math.random() * 5));
  return luckyNumber;
}

const result = (number) => {
  const sorteado = lottery();
  const check = (number === sorteado) ? `Parabéns você ganhou` : `Tente novamente`;
  console.log(check);
  console.log(`Número apostado: ${number}`);
  console.log(`Número sorteado: ${sorteado}`);
}

result(5);