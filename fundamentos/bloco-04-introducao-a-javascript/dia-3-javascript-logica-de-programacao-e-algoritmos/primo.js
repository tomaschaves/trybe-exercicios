let maiorPrimo = 0;

 
for(let indexA = 2; indexA <= 50; indexA += 1){
    let divisores = 0;
    for(let indexB = 1; indexB <= indexA; indexB +=1){
        if(indexA%indexB === 0){
            divisores += 1;
        }
    }
    if(divisores === 2){
        maiorPrimo = indexA;
    }
}

console.log(maiorPrimo);