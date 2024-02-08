const router = require('express').Router();

const {
  validatePassenger,
} = require('../middlewares/passengers.middleware');
const { travelModel, passengerModel } = require('../models');

const passengerExists = async (passengerId) => {
  const passenger = await passengerModel.findById(passengerId);
  return passenger || false;
};

router.get('/', async (_req, res) => {
  const passengers = await passengerModel.findAll();
  return res.status(200).json(passengers);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const passenger = await passengerModel.findById(id);
  return res.status(200).json(passenger);
});

router.post('/:passengerId/request/travel', validatePassenger, async (req, res) => {
  const { passengerId } = req.params;
  const { startingAddress, endingAddress, waypoints } = req.body;

  const passenger = await passengerExists(passengerId);
  if (!passenger) return res.status(404).json({ message: 'Passenger not found' });

  const travelId = await travelModel.insert(
    passengerId,
    startingAddress,
    endingAddress,
    waypoints, 
  );

  const newTravel = await travelModel.findById(travelId);

  return res.status(201).json(newTravel);
});

module.exports = router;