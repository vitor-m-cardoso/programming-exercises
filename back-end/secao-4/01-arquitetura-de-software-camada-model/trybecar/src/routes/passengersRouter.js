const router = require('express').Router();
const passengerModel = require('../models/passengerModel');

router.get('/', async (_req, res) => {
  const passengers = await passengerModel.findAll();
  res.status(200).json(passengers);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const passenger = await passengerModel.findById(id);
    if (!passenger) {
      return res.status(404).json({ message: 'Passenger not found!' });
    }
    return res.status(200).json(passenger);
  } catch (error) {
    console.error(error.message);
    return res.status(500).send({ message: 'Internal server error!' });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const { affectedRows } = await passengerModel.deletePassenger(id);
    if (affectedRows > 0) {
      return res.status(204).end();
    }
    return res.status(404).json({ message: 'Passenger not found!' });
  } catch (error) {
    console.error(error.message);
    return res.status(500).send({ message: 'Internal server error!' });
  }
});

module.exports = router;