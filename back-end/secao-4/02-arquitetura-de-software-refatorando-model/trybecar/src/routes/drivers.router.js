const router = require('express').Router();

const { driverModel } = require('../models');

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const driver = await driverModel.findById(id);
  if (driver) {
    return res.status(200).json(driver);
  }
  return res.status(404).json({ message: 'Driver not found' });
});

router.get('/open/travels', async (_req, res) => {
  const WAITING_DRIVER = 1;

  const openTravels = await driverModel.findByStatus(WAITING_DRIVER);

  res.status(200).json(openTravels);
});

router.get('/', async (_req, res) => {
  const drivers = await driverModel.findAll();

  return res.status(200).json(drivers);
});

router.post('/', async (req, res) => {
  const { name } = req.body;

  const insertId = await driverModel.insert(name);
  return res.status(200).json(insertId);
});

module.exports = router;