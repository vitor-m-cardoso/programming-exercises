interface Animal {
  name: string;
  age: number;

  getBirthDate(): Date;
};

class Bird implements Animal {
  constructor(public name: string, private birthDate: Date) {}

  get age() {
    let timeDiff = Math.abs(Date.now() - new Date(this.birthDate).getTime());
    return Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
  }

  getBirthDate() { return this.birthDate };

  fly() { console.log(`${this.name}'s flying!`) };
};

const parrot = new Bird('Parrot', new Date(Date.parse('Aug 16, 2015')));

console.log(parrot.age);
parrot.fly();
