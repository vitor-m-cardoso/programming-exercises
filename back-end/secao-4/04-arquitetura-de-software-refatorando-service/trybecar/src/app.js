const express = require('express');
const { travelModel } = require('./models');
const { travelService, driverService } = require('./services');

const app = express();

app.use(express.json());

app.post('/passengers/:passengerId/request/travel', async (req, res) => {
  const { passengerId } = req.params;

  const travelData = { passengerId, ...req.body };

  const serviceResponse = await travelService.requestTravel(travelData);
  if (serviceResponse.status !== 'SUCCESSFUL') {
    return res.status(422).json(serviceResponse.data);
  }

  return res.status(201).json(serviceResponse.data);
});

app.post('/drivers', async (req, res) => {
  const driverData = { ...req.body };

  const serviceResponse = await driverService.createDriver(driverData);
  if (serviceResponse.status !== 'SUCCESSFUL') {
    return res.status(422).json(serviceResponse.data);
  }
  return res.status(201).json(serviceResponse.data);
});

app.get('/drivers/:id', async (req, res) => {
  const { id } = req.params;
  const driver = await driverService.findById(id);
  if (driver.status !== 'SUCCESSFUL') {
    return res.status(404).send(driver.data);
  }
  return res.status(200).json(driver.data);
});

app.get('/drivers', async (_req, res) => {
  const serviceResponse = await driverService.findAll();
  return res.status(200).json(serviceResponse);
});

app.get('/drivers/open/travels', async (_req, res) => {
  const serviceResponse = await travelService.getOpenTravels();
  if (serviceResponse.status !== 'SUCESSFUL') {
    return res.status(404).json(serviceResponse.data);
  }
  return res.status(200).json(serviceResponse.data);
});

app.patch('/drivers/:driverId/travels/:travelId', async (req, res) => {
  const { driverId, travelId } = req.params;
  const INCREMENT_STATUS = 1;
  const { travelStatusId } = await travelModel.findById(travelId);
  const nextTravelStatusId = travelStatusId + INCREMENT_STATUS;

  await travelModel.update(travelId, { driverId, travelStatusId: nextTravelStatusId });
  const updatedTravel = await travelModel.findById(travelId);

  res.status(200).json(updatedTravel);
});

module.exports = app;
