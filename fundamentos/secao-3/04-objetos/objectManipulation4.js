// Por meio do array de frutas chamado basket,
// crie um objeto que contenha o nome da fruta como chave e a quantidade de vezes que ela aparece no array como valor.
  // Por exemplo, o array ['Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva'] deverá retornar:
    // { 
    //   Melancia: 3,
    //   Abacate: 1,
    //   Uva: 1 
    // }

// Em seguida, imprima esse resultado na tela com uma mensagem no seguinte formato:
// Sua cesta possui: x Melancias, x Abacates...

const basket = [
  'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
  'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
  'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
  'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
  'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
  'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
  'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
  'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
  'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
  'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
  'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
  'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
  'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
  'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
  'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
  'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
  'Banana', 'Pera', 'Abacate', 'Uva',
];

const createFruitsObject = (array) => {
  const obj = {};
  for (let index = 0; index < array.length; index += 1) {
    const fruits = array[index];
    obj[fruits] = 0;
  }

  return obj;
};

const countFruitsInBasket = (array) => {
  const fruitsObj = createFruitsObject(array);
  const fruitsArr = Object.keys(fruitsObj);
  for (let fruitsArrIndex = 0; fruitsArrIndex < fruitsArr.length; fruitsArrIndex += 1) {
    const fruitsInArr = fruitsArr[fruitsArrIndex];
    for (let fruitsBasketIndex = 0; fruitsBasketIndex < array.length; fruitsBasketIndex += 1) {
      const fruitsInBasket = array[fruitsBasketIndex];
      if (fruitsInArr === fruitsInBasket) {
        fruitsObj[fruitsInArr] += 1;
      }
    }
  }
  return fruitsObj;
};

const showBasketFruits = (object) => {
  const basketFruits = countFruitsInBasket(object);
  const basketArr = Object.entries(basketFruits);
  const newBasketArr = [];

  for (let index = 0; index < basketArr.length; index += 1) {
    newBasketArr.push(` ${basketArr[index][1]} ${basketArr[index][0]}s`);
  }
  return `Sua cesta possui: ${newBasketArr}`;
};

console.log(showBasketFruits(basket));
