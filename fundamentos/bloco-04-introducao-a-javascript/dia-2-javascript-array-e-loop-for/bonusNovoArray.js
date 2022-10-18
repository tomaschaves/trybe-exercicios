let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let produto = 0;
let multiplicados = [];


for (let index = 0; index < numbers.length; index += 1) {
    if(numbers[index] <= numbers.length-2){
        produto = numbers[index]*3;
    } else if (numbers[index] === numbers.length-1){
        produto = numbers[index]*2;
    }
    
    multiplicados.push(produto);
}

console.log(multiplicados);
