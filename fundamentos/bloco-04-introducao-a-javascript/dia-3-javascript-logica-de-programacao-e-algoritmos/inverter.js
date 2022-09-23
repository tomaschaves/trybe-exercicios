let word = 'tryber';
let inverter = [];
let inverterPalavra;

for (let index = word.length-1; index >= 0; index -=1){
    inverter.push(word[index]);
}
 
for (let index = word.length-1; index >= 0; index -=1){
    inverterPalavra = inverterPalavra+word[index];
}

console.log('Em array: ' + inverter);
console.log('Em palavra: ' + inverterPalavra);