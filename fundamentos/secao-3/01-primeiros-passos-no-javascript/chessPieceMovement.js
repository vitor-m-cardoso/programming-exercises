// Utilize switch/case para escrever um código que receba o nome de uma peça de xadrez e retorne os movimentos que ela pode fazer.

// Se a peça passada for inválida, o código deve retornar uma mensagem de erro.
// ⭐️ Desafio extra, escreva um código para funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais. Uma dica é pesquisar uma função que faça uma string ficar com todas as letras minúsculas (lower case).

// Exemplo: Bispo -> Diagonais.

const piece = 'Cavalo';

switch (piece.toLowerCase()) {
  case 'rei':
    console.log('Uma casa em qualquer direção!');
    break;
  case 'dama':
    console.log('Pode se mover em qualquer direção!');
    break;
  case 'torre':
    console.log('Pode se mover na horizontal e vertical!');
    break;
  case 'bispo':
    console.log('Pode se mover na diagonal!');
    break;
  case 'cavalo':
    console.log('Pode se mover em L!');
    break;
  case 'peão':
    console.log('Pode se mover uma casa para frente (no primeiro movimento pode se mover duas casas para frente)!');
    break;
  default:
    console.log('Insira uma peça válida!');
    break;
}
