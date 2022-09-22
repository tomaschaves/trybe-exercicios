const custo = 100;
const venda = 140;
let quantidade = 1000;


if (custo < 0 || venda < 0){
    console.log ("Erro: o valor deve ser maior do que 0.");
} else {
let lucro = quantidade*(venda - (custo + (0.2*custo)));
console.log(lucro);
}