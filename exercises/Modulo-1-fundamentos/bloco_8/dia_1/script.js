// 1: Crie uma função de primeira classe que tenha o retorno console.log('Acordando!!') ;
const wakeUp = () => console.log('Acordando!!');
wakeUp();
// 2: Crie outra função de primeira classe que tenha o retorno console.log('Bora tomar café!!') ;
const coffeeBreak = (event2) => console.log('Bora tomar café!!');
coffeeBreak();
// 3: Crie mais uma função de primeira classe que tenha o retorno console.log('Partiu dormir!!') ;
const goToSleep = (event3) => console.log('Partiu dormir!!')
goToSleep();
// 3: Desenvolva uma HOF chamada doingThings e configure esta função para que retorne a execução das funções de primeira classe que você criou nos exemplos anteriores. Exemplo: Ao chamar a função doingThings: doingThings(wakeUp);
// Ela deve retornar o valor do respectivo parâmetro, neste caso: 'Acordando!!'
const doingThings = (wakeUp) => doingThings; // plantao

// EXERCICIO 1: Crie uma função de primeira classe que retorna um objeto { nomeCompleto, email } de uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respctivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com.

const newEmployees = () => {
  const employees = {
    id1: // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro
    id2: // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro
    id3: // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro
  }
  return employees;
};
