// Utilize if...else para escrever um código que defina três números em variáveis e retorne true se pelo menos uma das três for par. Caso contrário, o código deve retornar false.
// Faça esse exercício utilizando somente um if.

const num1 = 2;
const num2 = 2;
const num3 = 2;
let isEven = false;

if (num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0) {
  isEven = true;
}

console.log(isEven);
