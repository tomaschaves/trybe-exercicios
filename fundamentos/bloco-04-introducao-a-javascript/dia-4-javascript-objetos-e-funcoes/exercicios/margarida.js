let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim',
    };

let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
    };

console.log('Item 1:');
console.log('Bem-vinda, ' + info.personagem);
console.log(' ');

let objetoChave = info;
console.log('Item 2:');
console.log(objetoChave);
console.log(' ');

console.log('Item 3:');
for (let key in info){
    console.log(key);
}
console.log(' ');

console.log('Item 4:');
for (let key in info){
    console.log(info[key]);
}
console.log(' ');

console.log('Item 5:');
for (let key in info){
    console.log(info[key] + ' e ' + info2[key]);
}
