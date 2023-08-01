// Utilize if/else para escrever um código que retorne o maior de dois números. Defina, no começo do seu código, duas variáveis com os valores que serão comparados.

const num1 = Math.round(Math.random() * 100);
const num2 = Math.round(Math.random() * 100);

if (num1 > num2) {
  console.log(`O primeiro número (${num1}) é maior que o segundo número (${num2})!`);
} else if (num2 > num1) {
  console.log(`O segundo número (${num2}) é maior que o primeiro número (${num1})!`);
} else {
  console.log('Os números são iguais.');
}
