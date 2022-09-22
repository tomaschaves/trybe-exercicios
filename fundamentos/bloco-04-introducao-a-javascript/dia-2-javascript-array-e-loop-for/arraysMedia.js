let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let denominador = 0;
let numerador = 0;
let media = 0;

for (let index = 0; index < numbers.length; index += 1){
    numerador = numerador + numbers[index];
}

denominador = numbers.length;
media = numerador / denominador;



console.log(media);

