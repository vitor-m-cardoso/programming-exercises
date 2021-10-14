const readline = require('readline-sync');

const fibonacci = (num) => {
  let a = 1;
  let b = 1;

  for (; num >= 0; num -= 1) {
    if (b) console.log(b);

    const temp = a;

    a = a + b;

    b = temp;
  };

  console.log(b);
  return b;
};

const calc = () => {
  const num = readline.questionInt('Digite o valor de num: ');

  if (num <= 0) {
    console.log('Digite um numero maior que 0');
    return;
  };

  console.log(`numero escolhido: ${num}`);

  fibonacci(num - 2);
}

calc();
