const readline = require('readline-sync');

function calculaVelocidade() {
  const distancia = readline.questionInt('Distância? (metros) ');
  const tempo = readline.questionInt('Tempo? (segundos) ');

  console.log(`Distância: ${distancia} metros. Tempo: ${tempo} segundos.`);
  
  const velocidade = (distancia / tempo);

  console.log(`Velocidade: ${velocidade} m/s.`);

};

calculaVelocidade();
