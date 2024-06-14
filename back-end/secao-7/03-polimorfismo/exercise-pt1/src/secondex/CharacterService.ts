import { Character } from './Character';
import IModel from './Interfaces/IModel';

class CharacterService {
  constructor(readonly model: IModel) {}

  async create(character: Character) {
    const newCharacter = await this.model.createCharacter(character);
  }

  async getAllCharacters() {
    const allCharacters = await this.model.getAllCharacters();
    return { status: 'SUCCESSFUL', data: allCharacters };
  }
};
