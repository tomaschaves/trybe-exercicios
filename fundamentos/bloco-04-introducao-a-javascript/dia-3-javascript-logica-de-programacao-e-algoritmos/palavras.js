let array = ['java', 'javascript', 'python', 'html', 'css'];
let maior = array[0];
let menor = array[1];


for(let indexMaior = 0; indexMaior < array.length; indexMaior += 1){
    if(maior.length < array[indexMaior].length){
        maior = array[indexMaior];
    }
}
 
 

for(let indexMenor = 0; indexMenor < array.length; indexMenor += 1){
    if(menor.length > array[indexMenor].length){
        menor = array[indexMenor];
    }
}

console.log(maior.length);
console.log(menor.length);
console.log('Maior palavra: ' + maior);
console.log('Menor palavra: ' + menor);