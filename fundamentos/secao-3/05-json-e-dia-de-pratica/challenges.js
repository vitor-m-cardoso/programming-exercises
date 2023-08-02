const menu = require('./mcDonalds');
const guestsDatabase = require('./data.json');

// Requisito 1 - Crie uma função que divida uma frase
const splitSentence = (string) => string.split(' ');

// Requisito 2 - Crie uma função que calcula a quantidade de pontos em um campeonato de futebol
const footballPoints = (wins, ties) => (wins * 3) + ties;

// Requisito 3 - Crie uma função que adiciona músicas em uma playlist
const playlist = [];

const addMusics = (artistName, musicName, musicTime) => {
  playlist.push({ artist: artistName, music: musicName, musicTime });

  return playlist;
};

// Requisito 4 - Crie uma função que retorna o produto mais caro de acordo com uma categoria
const moreExpensive = (data, category) => {
  const products = data[category];
  let mostExpensiveProduct = data[category][0];

  for (let index = 1; index < products.length; index += 1) {
    const product = products[index];
    if (mostExpensiveProduct.price < product.price) {
      mostExpensiveProduct = product;
    }
  }
  const { name, price } = mostExpensiveProduct;

  return `O produto mais caro é: ${name}, que custa: R$${price.toFixed(2)}.`;
};

// Requisito 5 - Crie uma função que verifica se um determinado item já existe
const checkItem = (data, category, item) => {
  const products = data[category];
  let productExists = false;

  for (let index = 0; index < products.length; index += 1) {
    const product = products[index];
    if (product.name === item) {
      productExists = true;
    }
  }

  return productExists;
};

// Requisito 6 - Crie uma função que adiciona um novo item caso ele ainda não exista
const addNewItem = (data, category, item, price, ingredients, calories) => {
  const productExists = checkItem(data, category, item);
  const products = data[category];

  if (productExists) return `O produto: "${item}" já existe!`;

  const newProduct = {
    name: item,
    price,
    ingredients,
    calories,
  };

  products.push(newProduct);

  return newProduct;
};

// Requisito 7 - Crie uma função que conta a quantidade de pessoas por gênero
const counterGender = (data) => {
  const { guests } = data;
  const genders = {
    male: 0,
    female: 0,
  };

  for (let index = 0; index < guests.length; index += 1) {
    const person = guests[index];
    if (person.gender === 'male') {
      genders.male += 1;
    }
    if (person.gender === 'female') {
      genders.female += 1;
    }
  }

  return genders;
};

// Requisito 8 - Crie uma função que retorna os elementos de um determinado estado
const filterState = (data, state) => {
  const { guests } = data;
  const filteredArr = [];

  for (let index = 0; index < guests.length; index += 1) {
    const person = guests[index];
    if (person.address.state === state) {
      filteredArr.push(person);
    }
  }

  return filteredArr;
}

// Requisito 9 - Crie uma função que altera a propriedade `picture`
const changePicture = (data, link) => {
  const { guests } = data;
  for (let index = 0; index < guests.length; index += 1) {
    guests[index].picture = link;
  }
  return guests;
};

// Requisito 10 - Crie um função que gera um relatório
const findAvgAge = (guests) => {
  let totalAge = 0;

  for (let index = 0; index < guests.length; index++) {
    const person = guests[index];

    totalAge += person.age;
  }

  let avgAge = (totalAge / guests.length);

  return avgAge.toFixed(2);
};

const findAllCountries = (guests) => {
  const countriesArr = [];

  for (let index = 0; index < guests.length; index++) {
    const person = guests[index];
    
    if (!countriesArr.includes(person.country)) {
      countriesArr.push(person.country);
    }
  }

  return countriesArr.sort();
}

const generateReport = (data) => {
  const { guests } = data;
  const genders = counterGender(data);

  return {
    totalGuests: genders.male + genders.female,
    totalGender: {
      male: genders.male,
      female: genders.female,
    },
    avgAge: Number(findAvgAge(guests)),
    countries: findAllCountries(guests),
  };
};
