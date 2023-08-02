//Considere esse array para realizar os próximos exercícios.
const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1 - Percorra o array imprimindo todos os valores contidos nele com a função console.log().
for (let index = 0; index < numbers.length; index += 1) {
  // console.log(numbers[index]);
}

// 2 - Some todos os valores contidos no array e imprima o resultado.
let sumAll = 0;

for (let index = 0; index < numbers.length; index += 1) {
  sumAll += numbers[index];
}
console.log(sumAll);

// 3 - Calcule e imprima a média aritmética dos valores contidos no array.
  // A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos.
let average = (sumAll / numbers.length);

console.log(average);

// 4 - Com base no código que acabou de gerar, referente ao cálculo da média aritmética, faça com que: caso o valor final seja maior que 20, imprima a mensagem “O valor da média aritmética é maior que 20”; e, caso não seja maior que 20, imprima a mensagem “O valor da média aritmética é menor ou igual a 20”.
// if (average > 20) {
//   console.log('O valor da média aritmética é maior que 20.');
// } else {
//   console.log('O valor da média aritmética é menor ou igual a 20.');
// }
average > 20 ? console.log('O valor da média aritmética é maior que 20.') : console.log('O valor da média aritmética é menor ou igual a 20.');

// 5 - Utilizando for, descubra o maior valor contido no array e imprima-o.
let biggestNumber = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
  if (biggestNumber < numbers[index]) {
    biggestNumber = numbers[index];
  }
}
console.log(biggestNumber);

// 6 - Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “Nenhum valor ímpar encontrado”.
let countOddNumbers = 0;

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 !== 0) {
    countOddNumbers += 1;
  }
}

if (countOddNumbers > 0) {
  console.log(`Quantidade de números ímpares no array: ${countOddNumbers}.`);
} else {
  console.log('Nenhum valor ímpar encontrado');
}
