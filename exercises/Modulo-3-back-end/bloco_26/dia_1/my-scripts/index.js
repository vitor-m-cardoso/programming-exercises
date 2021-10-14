const readline = require('readline-sync');

const scripts = [
  { name: 'Calcular IMC', script: './imc.js' },
  { name: 'Calcular velocidade média', script: './velocidade.js' },
  { name: 'Jogo de adivinhação', script: './sorteio.js' },
  { name: 'Calcular Fatorial', script: './fatorial.js' },
  { name: 'Calcular Fibonacci', script: './fibonacci.js' },
];

let message = scripts.map(({ name }, index) => `${index + 1} - ${name}`);

message.unshift('Escolha um número para executar o script correspondente');

message = message.join('\n');

const scriptNumber = readline.questionInt(message) - 1;

const script = scripts[scriptNumber];

if (!script) return console.log('Número inválido. Saindo');

require(script.script);
