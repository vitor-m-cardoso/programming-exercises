// Exercicio 1: Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome.

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

console.log('Bem-vinda, ' + info.personagem);



// Exercicio 2: Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console.

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim',
};

console.log(info);



// Exercicio 3: Faça um for/in que mostre todas as chaves do objeto.

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim',
};

for (let keyIndex in info) {
  console.log(keyIndex);
};




// Exercicio 4: Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto.

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim',
};

for (let keyIndex in info) {
  console.log(info[keyIndex]);
};




// Exercicio 5: Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves.

let info = {
  personagem: 'Margarida',
  personagemDois: 'Tio Patinhas',
  origem: 'Pato Donald',
  origemDois: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  notaDois: 'O último MacPatinhas',
  recorrente: 'Sim',
};

for (let in)
