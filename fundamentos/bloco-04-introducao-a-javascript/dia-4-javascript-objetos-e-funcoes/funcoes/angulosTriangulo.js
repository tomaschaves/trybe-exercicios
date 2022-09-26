const a = 70; 
const b = 30;
const c = 80;

function triangulo(a, b, c){
    if (a < 0 || b < 0 || c < 0){
        triangulo = 'erro';
    } else if (a + b + c === 180){
        triangulo = 'true';
    } else if (a + b + c !== 180){
        triangulo = 'false';
    }
    return triangulo;
}


console.log(triangulo(a, b, c));


