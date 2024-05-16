import Animal from './Animal';

class Bird extends Animal {
  fly() {
    console.log(`${this.name}'s flying!`);    
  }

  showBirthDate() {
    console.log(this.birthDate);
  }
}

const parrot = new Bird('Parrot', new Date(Date.parse('Jun 07, 2017')));

console.log(parrot.age);
parrot.fly();
