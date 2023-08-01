// Escreva um algoritmo que, dado um valor n, sendo n > 1, que imprima um triângulo retângulo com n asteriscos de base

let n = 5;
let asteriskTriangle = '';

for (let column = 0; column < n; column += 1) {
  asteriskTriangle += '\n';
  for (let row = 0; row <= column; row += 1) {
    asteriskTriangle += '*';
  }
}

console.log(asteriskTriangle);
