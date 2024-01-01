const fs = require('fs').promises;
const { join } = require('path');

const path = '/files/cacauWowFile.json';

const readDataFile = async () => {
  try {
    const chocolatesPath = fs.readFile(join(__dirname, path), 'utf-8');
    const contentFile = await chocolatesPath;
    return JSON.parse(contentFile);
  } catch (error) {
    return error.message;
  }
};

const writeDataFile = async (data) => {
  try {
    await fs.writeFile(join(__dirname, path), JSON.stringify(data));
  } catch (error) {
    return error.message;
  }
};

const getAllChocolates = async () => {
  const cacauTrybe = await readDataFile();
  return cacauTrybe.chocolates;
};

const getChocolateById = async (id) => {
  const { chocolates } = await readDataFile();
  const chocolate = chocolates.find((cho) => cho.id === Number(id));
  return chocolate;
};

const getChocolateByBrandId = async (brandId) => {
  const { chocolates } = await readDataFile();
  const chocolate = chocolates.filter((cho) => cho.brandId === Number(brandId));
  return chocolate;
};

const updateChocolate = async (data) => {
  try {
    const { id, name, brandId } = data;
    const trybeFile = await readDataFile();
    const chocolate = trybeFile.chocolates.find((cho) => cho.id === Number(id));

    if (!chocolate) return;

    chocolate.name = name;
    chocolate.brandId = brandId;
    await writeDataFile(trybeFile);
    return chocolate;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  getAllChocolates,
  getChocolateById,
  getChocolateByBrandId,
  updateChocolate,
};
