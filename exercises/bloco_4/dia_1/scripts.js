// Exercicio 1

let a = 20;
let b = 20;

console.log('soma:', a + b);

console.log('Subtração:', a - b);

console.log('Multiplicação:', a * b);

console.log('Divisão:', a / b);

console.log('Módulo:', a % b);



// Exercicio 2

let a = 5;
let b = 4;

if (a > b) {
  console.log('O valor de a é maior que b:', a);
} else if (b > a) {
  console.log('O valor de b é maior que a:', b);
} else {
  console.log('Erro: valores iguais');
}



// Exercicio 3

let a = 7;
let b = 5;
let c = 6;

if (a > b && a > c) {
  console.log('O valor de a é maior que b e c:', a);
} else if (b > a && b > c) {
  console.log('O valor de b é maior que a e c:', b);
} else if (c > a && c > b) {
  console.log('O valor de c é maior que a e b:', c);
} else {
  console.log('Erro: valores iguais');
}



// Exercicio 4

let a = 0;

if (a > 0) {
  console.log('positive');
} else if (a < 0) {
  console.log('negative');
} else {
  console.log('zero');
}



// Exercicio 5

let a = 60;
let b = 40;
let c = 80;
let triangle = a + b + c;
let invalid = a > 0 && b > 0 && c > 0;

if (invalid) {
  if (triangle === 180) {
    console.log('true');
  } else {
    console.log('false');
  }
} else {
  console.log('Erro: ângulo inválido')
}



// Exercicio 6 // neste exercicio, usei este site para saber como as pecas do xadrez se movem: https://www.ichess.net/blog/chess-pieces-moves/

let chessPiece = 'Knight';

switch (chessPiece.toLowerCase()) {
  case 'king':
    console.log('move one square in any direction');
    break;
  case 'queen':
    console.log('move diagonally, horizontally, or vertically any number');
    break;
  case 'rook':
    console.log('move horizontally or vertically any number of squares');
    break;
  case 'bishop':
    console.log('move diagonally any number of squares');
    break;
  case 'knight':
    console.log('move in an ‘L’ shape');
    break;
  case 'pawn':
    console.log('move vertically forward one square');
    break;
  default:
    console.log('Error: invalid piece');
    break;
}



// Exercicio 7

let grade = 40;
let error = grade > 0 && grade < 100;

 if (error) {
   if (grade >= 90) {
     console.log('A');
   } else if (grade >= 80) {
     console.log('B');
   } else if (grade >= 70) {
     console.log('C');
   } else if (grade >= 60) {
     console.log('D');
   } else if (grade >= 50) {
     console.log('E');
   } else {
     console.log('F');
   }
 } else {
   console.log('Erro: nota incorreta!');
 }



// Exercicio 8

let a = 12;
let b = 15;
let c = 17;


if (a % 2 === 0 || b % 2 === 0 || c % 2 === 0) {
  console.log(true);
} else {
  console.log(false);
}



// Exercicio 9

let a = 16;
let b = 18;
let c = 56;


if (a % 2 !== 0 || b % 2 !== 0 || c % 2 !== 0) {
  console.log(true);
} else {
  console.log(false);
}



// Exercicio 10

let valorCusto = 15;
let valorVenda = 30;
let impostoSobreOCusto = valorCusto/100 * 20
let valorCustoTotal = 

