// 2 - Desenvolva um algoritmo que conte quantos números, em um intervalo entre dois números, são divisíveis por 3. Exemplo: 1 e 20.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta (pode inventar uma). 
// Não conta pra ninguém, mas no intervalo entre 2 e 150 existem 50 números divisíveis por 3 ;)

let contador = 0;
let inicio = 1;
let final = 150;


for(let index = inicio; index <= final; index += 1){
    if(index%3 === 0){
        contador +=1;
    }
}


if(contador === 50){
    console.log('Não conta pra ninguém, mas no intervalo entre 2 e 150 existem 50 números divisíveis por 3 ;)');
} else {
    console.log(contador);
}
