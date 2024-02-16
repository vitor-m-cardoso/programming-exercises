const { carModel, driverModel } = require('../models');
const {
  validateNewCar,
  isValidLicensePlateFormat,
  isLicensePlateAlreadyRegistered,
  isValidFabricationYear,
} = require('./validations/validationsInputValues');

const driverExists = async (driverId) => {
  const driver = await driverModel.findById(driverId);
  return driver || false;
};

const validateLicensePlate = async (licensePlate) => {
  const isValidPlate = await isValidLicensePlateFormat(licensePlate);
  if (!isValidPlate) return { status: 'INVALID_VALUES', data: { message: 'Invalid license plate' } };
}

const createCar = async ({ model, licensePlate, year, color, driverId }) => {
  const licensePlateError = await validateLicensePlate(licensePlate);
  if (licensePlateError) return licensePlateError

  const driver = await driverExists(driverId);
  if (!driver) return { status: 'NOT_FOUND', data: { message: 'Driver not found' } };

  const licenseAlreadyRegistered = await isLicensePlateAlreadyRegistered(licensePlate);
  if (licenseAlreadyRegistered) {
    return { status: 'CONFLICT', data: { message: 'Car already registered' } };
  };

  const invalidFabricationYear = await isValidFabricationYear(year);
  if (invalidFabricationYear) {
    return {
      status: 'INVALID_VALUE',
      data: { message: 'Manufacture year can\'t be superior than 10 years old' },
    };
  }

  const error = await validateNewCar({ model, licensePlate, year, color, driverId });
  if (error) return { status: error.status, data: { message: error.message } };

  const carId = await carModel.insert({ model, licensePlate, year, color, driverId });
  const newCar = { id: carId, model, licensePlate, year, color, driverId };

  return { status: 'SUCCESSFUL', data: newCar };
};

const findAll = async () => {
  const cars = await carModel.findAll();
  return { status: 'SUCCESSFUL', data: cars };
};

module.exports = {
  createCar,
  findAll,
};
