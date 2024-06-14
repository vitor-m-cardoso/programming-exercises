import { Character, DbCharacter } from '../Character';

export default interface IModel {
  createCharacter(character: Character): Promise<DbCharacter>;
  getAllCharacters(): Promise<DbCharacter[]>;
  getCharacterById(id: number): Promise<DbCharacter>;
  updateCharacter(id: number, character: Character): Promise<DbCharacter>;
  deleteCharacter(id: number): Promise<boolean>;
};
