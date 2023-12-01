const { question, questionFloat } = require('readline-sync');

const imc = () => {
  const weight = question('What"s your weight? ');
  const height = questionFloat('What"s your height? ');

  const bmi = (weight / (height * height)).toFixed(2);

  switch (true) {
    case bmi < 18.5:
      return 'Abaixo do peso (magreza)';
    case bmi >= 18.5 && bmi <= 29.0:
      return 'Peso normal';
    case (bmi >= 30 && bmi <= 34, 9):
      return 'Obesidade grau I';
    case (bmi >= 35 && bmi <= 39, 9):
      return 'Obesidade grau II';
    case bmi > 40:
      return 'Obesidade grau III e IV';
    default:
      return 'Insira dados válidos';
  }
};

console.log(imc());
