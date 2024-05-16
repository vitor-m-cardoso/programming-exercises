import Animal from './Animal';

class Mammal extends Animal {
  walk() {
    console.log(`${this.name}'s walking!`);
  }
};

const tiger = new Mammal('Tiger', new Date(Date.parse('May 03, 2018')));

const main = (animal: Animal) => {
  console.log(animal.age);
};

main(tiger);
tiger.walk();
