const a = 60;

function sinal (a) {
    let numero;
    if(a > 0){
        numero = 'positive';
    } else if (a < 0){
        numero = 'negative';
    } else if (a === 0){
        numero = 'zero';
    }
    return numero;
}

console.log(sinal(a));