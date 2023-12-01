const fs = require('fs');
const { readFile, writeFile } = fs.promises;

const getFileResponse = async () => {
  const characterData = JSON.parse(await readFile('./simpsons.json', 'utf-8'));
  return characterData;
};

const showCharacter = async () => {
  try {
    const characterData = await getFileResponse();
    const result = characterData.map(({ id, name }) => `${id} - ${name}`);
    console.log(result);
  } catch (err) {
    console.log(err.message);
  }
};
// showCharacter();

const findCharacterById = async (id) => {
  const characterData = await getFileResponse();
  const foundCharacter = characterData.find((character) => character.id == id);

  if (!foundCharacter) throw new Error('Personagem não encontrado');

  console.log(foundCharacter);
};
// findCharacterById('2');

// C - Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.
const filterCharacter = async () => {
  const characterData = await getFileResponse();
  const filteredCharacters = characterData.filter(
    ({ id }) => id !== '6' && id !== '10'
  );
  await writeFile('./simpsons.json', JSON.stringify(filteredCharacters));
};
// filterCharacter();

const writeFamilyData = async (data) => {
  writeFile('./simpsonFamily.json', JSON.stringify(data));
};

const createNewCharacterFile = async () => {
  const characterData = await getFileResponse();
  const filteredCharacters = characterData.filter(({ id }) => Number(id) < 5);
  await writeFamilyData(filteredCharacters);
};
// createNewCharacterFile();

const readFamilyData = async () => {
  const data = JSON.parse(await readFile('./simpsonFamily.json', 'utf-8'));
  return data;
};

const addNewCharacterToFamily = async () => {
  const characterData = await readFamilyData();
  characterData.push({
    id: String(characterData.length + 1),
    name: 'Nelson Muntz',
  });
  await writeFamilyData(characterData);
};
// addNewCharacterToFamily();

const replaceCharacter = async () => {
  const characterData = await readFamilyData();
  characterData.forEach((character) => {
    if (character.name === 'Nelson Muntz') {
      character.name = 'Maggie Simpson';
    }
  });
  await writeFamilyData(characterData);
};
replaceCharacter();
