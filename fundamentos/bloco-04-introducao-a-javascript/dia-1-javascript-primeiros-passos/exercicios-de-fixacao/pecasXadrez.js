let pecaXadrez = 'rei'.toLowerCase();

switch(pecaXadrez){
    case 'peao':
        console.log('Uma casa por vez sempre à frente, quando não tiver alguma peça o bloqueando. Só consegue comer outras peças em diagonal, a uma casa de distância do local no qual estiver.');
        break;
    case 'torre':
        console.log('Apenas na vertical e na horizontal.');
        break;
    case 'cavalo':
        console.log('Em forma de L, em qualquer direção. O L se configura como duas casas em sua altura e uma casa em sua largura.');
        break;
    case 'bispo':
        console.log('Diagonais.');
        break;
    case 'dama':
        console.log('Vertical, horizontal, diagonais.');
        break;
    case 'rei':
        console.log('Em qualquer direção, uma casa por vez.');
        break;
        





}