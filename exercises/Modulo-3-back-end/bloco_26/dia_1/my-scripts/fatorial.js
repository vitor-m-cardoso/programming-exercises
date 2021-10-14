const readline = require('readline-sync');

const factorialize = (num) => {
  if (num < 0) {
    console.log('Digite um numero maior que 0!');
    return -1;
  } else if (num === 0) {
    return 1;
  } else {
    return (num * factorialize(num - 1));
  }
};

const calcNum = () => {
  const num = readline.questionInt('Informe o valor do num: ');

  console.log(`Numero escolhido: ${num}!`);

  const result = factorialize(num);

  console.log(`O fatorial de ${num} é: ${result}`);
};

calcNum();