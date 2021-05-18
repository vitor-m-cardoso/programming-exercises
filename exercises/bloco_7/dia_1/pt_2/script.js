// Exercicio 1: Crie uma função que receba um número e retorne seu fatorial.

const factorial = number => (number === 0) ? 1 : number * factorial(number-1);

let number = 6;
result = factorial(number);
console.log(`O fatorial de ${number} é: ${result}.`);

// Exercicio 2: Crie uma função que receba uma frase e retorne qual a maior palavra. Exemplo: longestWord("Antônio foi no banheiro e não sabemos o que aconteceu") // retorna 'aconteceu'

