const { questionInt } = require('readline-sync');

const handleFibonacci = (n) => {
  const fibonacciSequence = [1, 1];

  for (let index = 2; index < n; index += 1) {
    let nextNumber =
      fibonacciSequence[index - 1] + fibonacciSequence[index - 2];
    fibonacciSequence.push(nextNumber);
  }
  return fibonacciSequence;
};

const genFibonacciNum = () => {
  const fiboNum = Number(questionInt('What"s your number? '));
  if (fiboNum <= 0) {
    throw new Error('Number must be greater than 0!');
  }
  return handleFibonacci(fiboNum);
};

console.log(genFibonacciNum());
