const { driverModel } = require('../models');

const findAll = async () => {
  const drivers = await driverModel.findAll();
  if (!drivers) {
    return { status: 'NOT_FOUND', data: { message: 'Drivers not found' } };
  }
  return { status: 'SUCCESSFUL', data: drivers };
};

const findById = async (id) => {
  const driver = await driverModel.findById(id);
  if (!driver) {
    return { status: 'NOT_FOUND', data: { message: 'Driver not found' } };
  }
  return { status: 'SUCCESSFUL', data: driver };
};

const createDriver = async (name) => {
  const insertId = await driverModel.createDriver(name);
  if (!insertId) {
    return { status: 'INVALID_VALUE', data: { message: 'Invalid value' } };
  }
  
  const newDriver = {
    id: insertId,
    name,
  };

  return { status: 'CREATED', data: newDriver };
};

module.exports = {
  findAll,
  findById,
  createDriver,
};
