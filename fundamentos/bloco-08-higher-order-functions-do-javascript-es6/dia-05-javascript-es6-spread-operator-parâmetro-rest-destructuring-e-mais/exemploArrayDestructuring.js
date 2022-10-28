// Exercício 1
// const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];
// saudacoes[1](saudacoes[0]); // Olá
// // Produza o mesmo resultado acima, porém utilizando array destructuring


const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];
const [first, second] = saudacoes;

console.log(first);
second('tudo bem?');

// Exercício 2
let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';
// console.log(comida, animal, bebida); // arroz gato água
// // Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo

[comida, animal, bebida] = [bebida, comida, animal];
console.log(comida, animal, bebida);


// Exercício 3
// O array abaixo possui alguns números que não condizem com o conteúdo que ele deveria possuir. Através de array destructuring, faça com que existam apenas números pares na variável numerosPares.


let numerosPares = [1, 3, 5, 6, 8, 10, 12];
// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo
// console.log(numerosPares); // [6, 8, 10, 12];

// const [one, three, five, six, eight, ten, twelve] = numerosPares;

// console.log(six, eight, ten, twelve);


[,,, ...numerosPares] = numerosPares;

console.log(numerosPares); // [6, 8, 10, 12];