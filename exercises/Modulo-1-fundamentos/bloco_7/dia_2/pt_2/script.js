const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Exercicio 1: Crie uma função para adicionar o turno da manhã na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

const addShiftKey = (object, addKey, value) => {
  object[addKey] = value;
}

addShiftKey(lesson2, 'turno', 'manhã');

// Exercicio 2: Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

const listObjectKeys = (object1) => Object.keys(object1);

// Exercicio 3: Crie uma função para mostrar o tamanho de um objeto.

const objectKeysLength = (object2) => Object.keys(object2).length

// Exercicio 4: Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

const listObjectValue = (object3) => Object.values(object3);

// Exercicio 5: Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte:

