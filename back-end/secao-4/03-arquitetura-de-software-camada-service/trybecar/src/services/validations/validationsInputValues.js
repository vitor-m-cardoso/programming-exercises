const { carModel } = require('../../models');
const { addCarSchema } = require('./schemas');

const validateNewCar = async ({ model, licensePlate, year, color, driverId }) => {
  const { error } = addCarSchema
    .validate({ model, licensePlate, year, color, driverId });
  
  if (error) return { status: 'INVALID_VALUE', message: error.message };
};

const isValidLicensePlateFormat = async (licensePlate) => {
  const plateArr = licensePlate.split('');
  const validPlate = plateArr
    .map((plateChar) => (Number.isInteger(Number(plateChar)) ? 'N' : 'L'))
    .join('');
  return validPlate === 'LLLNNNN' || validPlate === 'LLLNLNN';
};

const isLicensePlateAlreadyRegistered = async (licensePlate) => {
  const car = await carModel.findByLicensePlate(licensePlate);
  return car || false;
};

const isValidFabricationYear = async (year) => {
  const currentYear = new Date().getFullYear();
  const fabricationYear = currentYear - Number(year);
  return fabricationYear > 10;
};

module.exports = {
  validateNewCar,
  isValidLicensePlateFormat,
  isLicensePlateAlreadyRegistered,
  isValidFabricationYear,
};
