import { Character, DbCharacter } from './Character';
import IModel from './Interfaces/IModel';

const db: DbCharacter[] = [];

export default class LocalDbModel implements IModel {
  async createCharacter(character: Character) {
    const newCharacter = { id: db.length + 1, ...character }
    db.push(newCharacter);
    return newCharacter
  }

  async findIndexById(id: number) {
    const index = db.findIndex((ch) => ch.id === id);
    if (index < 0) throw new Error('CharacterNotFound');
    return index;
  }

  async getCharacterById(id: number) {
    const index = await this.findIndexById(id);
    return db[index];
  }

  async getAllCharacters() {
    return db;
  }

  async updateCharacter(id: number, character: Character) {
    const index = await this.findIndexById(id);
    db[index] = { ...db[index], ...character };
    return db[index];
  };

  async deleteCharacter(id: number) {
    const index = await this.findIndexById(id);
    const deletedCharacter = db.splice(index, 1);
    return deletedCharacter.length > 0;
  }
};
