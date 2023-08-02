// Escreva um algoritmo que, dado um valor n, sendo n > 1, imprima na tela um quadrado feito de asteriscos de tamanho n.

let n = 5;
let asterisk = '';

for (let column = 0; column < n; column += 1) {
  asterisk += '\n';
  for (let row = 0; row < n; row += 1) {
    asterisk += '*';
  }
}

console.log(asterisk);
