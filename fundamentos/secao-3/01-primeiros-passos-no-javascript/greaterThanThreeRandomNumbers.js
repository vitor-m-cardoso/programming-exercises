// Utilize if/else para escrever um código que retorne o maior de três números. Defina, no começo do seu código, três variáveis com os valores que serão comparados.

const num1 = Math.round(Math.random() * 100);
const num2 = Math.round(Math.random() * 100);
const num3 = Math.round(Math.random() * 100);

if (num1 > num2 && num1 > num3) {
  console.log(`O num1 (${num1}) é maior que num2 (${num2}) e num3 (${num3})!`);
} else if (num2 > num1 && num2 > num3) {
  console.log(`O num2 (${num2}) é maior que num1 (${num1}) e num3 (${num3})!`);
} else if (num3 > num1 && num3 > num2) {
  console.log(`O num3 (${num3}) é maior que num1 (${num1}) e num2 (${num2})!`);
} else {
  console.log('Os números são iguais.');
}
