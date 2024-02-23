const { driverModel } = require('../models');
const schema = require('./validations/validateNewDriver');

const findAll = async () => {
  const drivers = await driverModel.findAll();
  return { status: 'SUCCESSFUL', data: drivers };
};

const findById = async (driverId) => {
  const driver = await driverModel.findById(driverId);
  if (!driver) {
    return { status: 'NOT_FOUND', data: { message: 'Driver not found!' } };
  }
  return { status: 'SUCCESSFUL', data: driver };
};

const createDriver = async (driverDataObject) => {
  const error = schema.validateNewDriver(driverDataObject);
  if (error) return { status: error.status, data: { message: error.message } };

  const newDriverId = await driverModel.createDriver(driverDataObject);
  const newDriver = await driverModel.findById(newDriverId);
  return { status: 'SUCCESSFUL', data: newDriver };
};

module.exports = {
  findAll,
  findById,
  createDriver,
};
