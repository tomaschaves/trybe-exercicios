let a = 60;
let b = 59;
let c = 61;

if (a < 0 || b < 0 || c < 0){
    console.log('O valor de todos os ângulos deve ser maior do que zero!');
} else if (a + b + c ===180){
    console.log(true);
} else {
    console.log(false);
}