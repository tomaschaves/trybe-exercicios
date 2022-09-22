let resultado = [];

for (let index = 1; index < 26; index += 1){
    resultado.push(index);
}

for (let index = 0; index < resultado.length; index += 1){
    resultado[index] = resultado[index] / 2;
    console.log(resultado[index]);
}

