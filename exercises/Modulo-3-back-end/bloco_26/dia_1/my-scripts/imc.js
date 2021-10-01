const readline = require('readline-sync');

function calculaImc() {
  const peso = readline.questionFloat('Qual seu peso? (em kg) ');
  const altura = readline.questionInt('Qual sua altura? (em cm) ');

  console.log(`Peso: ${peso}, Altura: ${altura}`);
  
  const imc = (peso / Math.pow(altura / 100, 2)).toFixed(2);

  console.log(`IMC: ${imc}`);

  switch (true) {
  case imc < 18.5:
    console.log('Situação: Abaixo do peso (magreza).');
    return;
  case imc >= 18.5 && imc <= 24.9:
    console.log('Situação: Peso normal.');
    return;
  case imc >= 25.0 && imc <= 29.9:
    console.log('Situação: Acima do peso (sobrepeso).');
    return;
  case imc >= 30.0 && imc <= 34.9:
    console.log('Situação: Obesidade grau I.');
    return;
  case imc >= 35.0 && imc <= 39.9:
    console.log('Situação: Obesidade grau II.');
    return;
  case imc > 40.0:
    console.log('Situação: Obesidade graus III e IV.');
    return;
  default:
    return 'por favor, insira um numero valido.';
  }
};

calculaImc();
