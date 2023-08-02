const school = {
  lessons: [
    {
      course: 'Python',
      students: 20,
      professor: 'Carlos Patrício',
      shift: 'Manhã',
    },
    {
      course: 'Kotlin',
      students: 10,
      professor: 'Gabriel Oliva',
      shift: 'Noite',
    },
    {
      course: 'JavaScript',
      students: 738,
      professor: 'Gustavo Caetano',
      shift: 'Tarde',
    },
    {
      course: 'MongoDB',
      students: 50,
      shift: 'Noite',
    },
  ]
};

// 1 - Crie uma função que obtenha o valor da chave de acordo com sua posição no array.
// Essa função deve possuir dois parâmetros: o objeto e a posição no array.
const getObjectValues = (objectKey, arrayIndex) => {
  // const objectKey = Object.keys(object)[0];
  return objectKey[arrayIndex];
};
// console.log(getObjectValues(school.lessons, 0));

// 2 - Crie uma função que retorne a soma do número total de estudantes em todos os cursos.
const sumTotalStudents = (objectKey) => {
  let totalStudents = 0;

  for (let index = 0; index < objectKey.length; index += 1) {
    totalStudents += objectKey[index].students;
  }

  return totalStudents;
};
// console.log(sumTotalStudents(school.lessons));

// 3 - Crie uma função que verifica se uma determinada chave existe em todos os elementos do array lessons. O retorno deve ser um booleano (true ou false).
// Essa função deve possuir dois parâmetros: o objeto e o nome da chave.
const verifyExistentKey = (object, keyName) => {
  let isValidKey = false;

  if (object[keyName]) isValidKey = true;

  return isValidKey;
};
// console.log(verifyExistentKey(school, 'lessons'));

// 4 - Crie uma função para alterar o turno para `noite` no curso de Python.
// Essa função deve ter três parâmetros: a base de dados a ser modificada, o nome do curso e o novo valor da chave.
const changeCourseName = (objectArr, courseName, newShift) => {
  for (let index = 0; index < objectArr.length; index += 1) {
    if (objectArr[index].course === courseName) {
      objectArr[index].shift = newShift;
    }
  }
  return objectArr;
};
// console.log(changeCourseName(school.lessons, 'Python', 'Noite'));
