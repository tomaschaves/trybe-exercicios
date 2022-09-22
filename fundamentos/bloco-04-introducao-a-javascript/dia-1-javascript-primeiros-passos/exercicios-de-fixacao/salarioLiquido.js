let salarioBruto = 1500.10;
let inss;
let salarioBase;
let ir;
let salarioLiquido;
let aliquota;
let parcela;


if (salarioBruto < 1556.94){
 salarioBase = salarioBruto * 0.92;                                             // salarioBruto*0,92  === salarioBruto - (salarioBruto * 0,08)
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92){
 salarioBase = salarioBruto * 0.91;                                             // salarioBruto*0,91  === salarioBruto - (salarioBruto * 0,09)
} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82){
 salarioBase = salarioBruto * 0.89;                                             // salarioBruto*0,89  === salarioBruto - (salarioBruto * 0,11)
} else if (salarioBruto > 5189.82){
 salarioBase = salarioBruto - 570.88;
}

if (salarioBase < 1903.98){
    ir = 0;
} else if (salarioBase >= 1903.99 && salarioBase <= 2826.65){
    aliquota = 7.5;
    parcela = 142.80;
    ir = (salarioBase * aliquota/100) - parcela;
} else if (salarioBase >= 2826.66 && salarioBase <= 3751.05){
    aliquota = 15;
    parcela = 354.80;
    ir = (salarioBase * aliquota/100) - parcela;
} else if (salarioBase >= 3751.06 && salarioBase <= 4664.68){
    aliquota = 22.5;
    parcela = 636.13;
    ir = (salarioBase * aliquota/100) - parcela;
} else if (salarioBase > 4664.68){
    aliquota = 27.5;
    parcela = 869.36;
    ir = (salarioBase * aliquota/100) - parcela;
}


salarioLiquido = salarioBase - ir;

console.log(salarioLiquido.toFixed(2));
