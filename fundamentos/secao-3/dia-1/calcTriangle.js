// Utilize if...else para escrever um código que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, você deve retornar uma mensagem de erro.

const first = 60;
const second = 60;
const third = 60;
const triangle = first + second + third;
let isTriangle = false;

if (triangle === 180) {
  isTriangle = true;
} else if (first < 0 || second < 0 || third < 0) {
  console.log('Não é possível adicionar valores negativos!');
}

console.log(isTriangle);
