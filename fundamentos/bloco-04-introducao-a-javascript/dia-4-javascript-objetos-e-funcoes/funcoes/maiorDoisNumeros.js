const a = 60;
const b = 80;

function maior (a, b) {
    let maior;
    if(a > b){
        maior = a;
    } else{
        maior = b
    }
    return maior;
}

console.log(maior(a, b));