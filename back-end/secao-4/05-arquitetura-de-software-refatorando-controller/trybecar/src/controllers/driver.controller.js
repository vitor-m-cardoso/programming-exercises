const { driverService } = require('../services');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const getOpenTravels = async (_req, res) => {
  const { status, data } = await travelService.getOpenTravels();
  if (status !== 'SUCCESSFUL') {
    return res.status(mapStatusHTTP(status)).json(data);
  }
  return res.status(mapStatusHTTP(status)).json(data);
};

const updateTravelStatus = async (req, res) => {
  const { driverId, travelId } = req.params;
  
  const { status, data } = await travelService
    .updateTravelStatus(driverId, travelId);
  
  if (status !== 'SUCCESSFUL') {
    return res.status(mapStatusHTTP(status)).json(data);
  }

  return res.status(mapStatusHTTP(status)).json(data);
};

const findAll = async (_req, res) => {
  const { status, data } = await driverService.findAll();
  if (status !== 'SUCCESSFUL') {
    return res.status(mapStatusHTTP(status)).json(data);
  }
  return res.status(mapStatusHTTP(status)).json(data);
};

const findById = async (req, res) => {
  const { id } = req.params;
  const { status, data } = await driverService.findById(id);

  if (status !== 'SUCCESSFUL') {
    return res.status(mapStatusHTTP(status)).json(data);
  }
  return res.status(mapStatusHTTP(status)).json(data);
};

const createDriver = async (req, res) => {
  const { name } = req.body;
  const { status, data } = await driverService.createDriver(name);
  if (status !== 'SUCCESSFUL') {
    return res.status(mapStatusHTTP(status)).json(data);
  }
  return res.status(mapStatusHTTP(status)).json(data);
};

module.exports = {
  getOpenTravels,
  updateTravelStatus,
  findAll,
  findById,
  createDriver,
};
