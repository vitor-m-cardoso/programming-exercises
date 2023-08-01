// Elabore alguns códigos e imprima o resultado no console usando o console.log, um para cada operação aritmética básica. É necessário que seu código tenha duas variáveis, num1 e num2, definidas no começo com os valores que serão operados. Escreva códigos para:

// Adição (num1 + num2);
// Subtração (num1 - num2);
// Multiplicação (num1 * num2);
// Divisão (num1 / num2);
// Módulo (num1 % num2).

const num1 = 13321;
const num2 = 12039;

const sum = num1 + num2;
const sub = num1 - num2;
const div = num1 / num2;
const mult = num1 * num2;
const mod = num1 % num2;

console.log(`Soma: ${sum};`);
console.log(`Subtração: ${sub};`);
console.log(`Divisão: ${div.toFixed(2)};`);
console.log(`Multiplicação: ${mult};`);
console.log(`Módulo: ${mod}.`);
