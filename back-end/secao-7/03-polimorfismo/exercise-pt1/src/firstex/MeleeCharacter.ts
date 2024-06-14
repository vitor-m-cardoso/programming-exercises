import Character from './Character';

class MeleeCharacter extends Character {
  constructor(public name: string) {
    super(name)
  }
  talk(): void { console.log(`${this.name} is a melee character`) };
  specialMove(): void { console.log(`${this.name} special move is a berserk attack`) };
};

const yoshi = new MeleeCharacter('Yoshi');
// yoshi.talk();
// yoshi.specialMove();
Character.characterPresentation(yoshi);

export default MeleeCharacter;
