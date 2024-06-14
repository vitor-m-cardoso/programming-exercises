import Character from './Character';

class LongRangeCharacter extends Character {
  constructor (name: string) {
    super(name)
  }
  talk(): void { console.log(`${this.name} is a long range character`) };
  specialMove(): void { console.log(`${this.name} special move is a poison arrow`) };
};

const samus = new LongRangeCharacter('Samus');
// samus.talk();
// samus.specialMove();
Character.characterPresentation(samus);

export default LongRangeCharacter;
