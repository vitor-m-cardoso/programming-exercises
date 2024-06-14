abstract class Character {
  constructor(public name: string) {}
  abstract talk(): void;
  abstract specialMove(): void;

  static characterPresentation(character: Character): void {
    character.talk();
    character.specialMove();
  }
};


export default Character;
