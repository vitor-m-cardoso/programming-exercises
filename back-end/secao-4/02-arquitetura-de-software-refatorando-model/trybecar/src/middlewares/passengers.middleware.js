const passengerModels = require('../models/passengers.model');

const validatePassenger = async (req, res, next) => {
  const { passengerId } = req.params;

  const passenger = await passengerModels.passengerExists(passengerId);
  if (!passenger) return res.status(404).json({ message: 'Passenger not found' });

  next();
};

module.exports = {
  validatePassenger,
};
