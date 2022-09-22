let aprovacao = "lista";

switch (aprovacao){
    case 'aprovada':
        mensagem = 'Parabéns, você foi aprovada(o)!';
        break;
    case 'lista':
        mensagem = 'Você está na nossa lista de espera.';
    case 'reprovada':
        mensagem = 'Você foi reprovada(o).';
    default:
        mensagem = 'Informação incorreta.';
}

console.log(mensagem);