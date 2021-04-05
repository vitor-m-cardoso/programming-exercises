// Exercicio 1: Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log()

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index]);
}



// Exercicio 2: Para o segundo exercício, você deve somar todos os valores contidos no array e imprimir o resultado;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sumNumbers = 0;

for (let index = 0; index < numbers.length; index += 1) {
  sumNumbers = sumNumbers + numbers[index];
  console.log(sumNumbers);
}



// Exercicio 3: Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sumNumbers = 0;

for (let index = 0; index < numbers.length; index += 1) {
  sumNumbers = sumNumbers + numbers[index];
  console.log(sumNumbers);
} 
console.log(sumNumbers / numbers.length);



// Exercicio 4: Com o mesmo código do exercício anterior, caso valor final seja maior que 20, imprima a mensagem: "valor maior que 20". 
// Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sumNumbers = 0;

for (let index = 0; index < numbers.length; index += 1) {
  sumNumbers = sumNumbers + numbers[index];
  console.log(sumNumbers);
} 
console.log(sumNumbers / numbers.length);

if ((sumNumbers / numbers.length) > 20) {
  console.log('valor maior que 20');
} else {
  console.log('valor menor ou igual a 20');
}



// Exercicio 5: Utilizando for , descubra qual o maior valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let valorMaior = 0;

for (let index = 0; index < numbers.length; index += 1) {
  if (valorMaior < numbers[index]) {
   valorMaior = numbers[index];
  }
}
console.log(valorMaior);



// Exercicio 6: Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let valorImpar = 0;

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 !== 0) {
    valorImpar += 1;
  }
} 
console.log(valorImpar);

if (valorImpar === 0) {
  console.log('nenhum valor impar encontrado');
}



// Exercicio 7: Utilizando for , descubra qual o menor valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let valorMenor = numbers[0];

for (let index = 0; index < numbers.length; index += 1) {
  if (valorMenor > numbers[index]) {
   valorMenor = numbers[index];
  }
}
console.log(valorMenor);



// Exercicio 8: Utilizando for , crie uma array que vá de 1 até 25 e imprima o resultado;

let number = [];

for (let index = 1; index <= 25; index += 1) {
  number.push(index);
}
console.log(number);



// Exercicio 9: Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.

let number = [];

for (let index = 1; index <= 25; index += 1) {
  number.push(index / 2);
}
console.log(number);