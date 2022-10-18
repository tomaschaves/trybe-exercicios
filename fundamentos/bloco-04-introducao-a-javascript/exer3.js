// 3 - Desenvolva um algoritmo que simule o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando. Imprima o resultado no formato:
// "Player 1 won" ou "A Ties" ou "Player 2 won".

let primeiraPessoa = 'pedra';
let segundaPessoa = 'pedra';


if(primeiraPessoa === 'pedra' && segundaPessoa === 'tesoura' || primeiraPessoa === 'tesoura' && segundaPessoa === 'papel' || primeiraPessoa === 'papel' && segundaPessoa === 'pedra'){
    console.log('Player 1 won');
} else if(primeiraPessoa === 'tesoura' && segundaPessoa === 'pedra' || primeiraPessoa === 'papel' && segundaPessoa === 'tesoura' || primeiraPessoa === 'pedra' && segundaPessoa === 'papel'){
    console.log('Player 2 won');
} else if(primeiraPessoa === segundaPessoa){
    console.log('A Ties');
}