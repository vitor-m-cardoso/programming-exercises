const menu = require('./mcDonalds');
const guestsDatabase = require('./data.json');

const splitSentence = (string) => string.split(' ');

const footballPoints = (wins, ties) => (wins * 3) + ties;

const playlist = [];

const addMusics = (artistName, musicName, musicTime) => {
  playlist.push({ artist: artistName, music: musicName, musicTime });

  return playlist;
};

const mostExpensive = (data, category) => {
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

const changePicture = (data, link) => {
  const { guests } = data;
  for (let index = 0; index < guests.length; index += 1) {
    guests[index].picture = link;
  }
  return guests;
};

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
