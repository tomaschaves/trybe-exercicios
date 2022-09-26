const a = 60;
const b = 80;
const c = 70;

function maior (a, b, c) {
    let maior;
    if(a > b && a > c){
        maior = a;
    } else if (b > a && b > c){
        maior = b;
    } else if (c > a && c > b){
        maior = c;
    }
    return maior;
}

console.log(maior(a, b, c));