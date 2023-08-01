// Agora, inverta o lado do triângulo
let position = n - 1;

for (let column = 0; column < n; column += 1) {
  asteriskTriangle += '\n';
  for (let row = 0; row < n; row += 1) {
    if (row < position) {
      asteriskTriangle += ' ';
    } else {
      asteriskTriangle += '*';
    }
  }
  position -= 1;
}

console.log(asteriskTriangle);
