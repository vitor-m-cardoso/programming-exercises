const readline = require('readline-sync');

function sorteio() {
  const resposta = readline.questionInt('Digite um número entre 0 e 10 para saber o número sorteado ');
  const numero = parseInt(Math.random() * 10);

  console.log(`Número escolhido: ${resposta}.`);
  
  if (resposta === numero) {
    console.log(`Parabéns, número correto! (${numero})`);
  } else {
    console.log(`Opa, não foi dessa vez. O número era ${numero}`);
  }

  const jogarNovamente = readline.question('Deseja jogar novamente? s/n ');

  if (jogarNovamente !== 's') return console.log('OK, até a próxima!');

  sorteio();
};

sorteio();
