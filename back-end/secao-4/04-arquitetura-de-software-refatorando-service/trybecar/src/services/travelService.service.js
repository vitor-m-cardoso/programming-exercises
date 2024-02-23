const schema = require('./validations/validationsInputValues');
const { passengerModel, travelModel } = require('../models');

const requestTravel = async (travelDataObject) => {
  const error = schema.validateRequestTravel(travelDataObject);
  if (error) return { status: error.status, data: { message: error.message } };

  const passengerExists = await passengerModel.findById(travelDataObject.passengerId);
  if (!passengerExists) {
    return { status: 'NOT_FOUND', data: { message: 'Passenger not found' } };
  }

  const newTravelId = await travelModel.insert(travelDataObject);
  const newTravel = await travelModel.findById(newTravelId);
  return { status: 'SUCCESSFUL', data: newTravel };
};

const getOpenTravels = async () => {
  const WAITING_DRIVER = 1;
  let data = await travelModel.findByStatus(WAITING_DRIVER);
  if (!data || data.length === 0) data = { message: 'There\'s no open trips' };

  return { status: 'SUCCESSFUL', data };
};

module.exports = {
  requestTravel,
  getOpenTravels,
};