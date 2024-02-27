const router = require('express').Router();
const { passengerController } = require('../controllers');
const validateTravelFields = require('../middlewares/validateTravelFields');

router.post(
  '/:passengerId/request/travel',
  validateTravelFields,
  passengerController.createTravel,
);

module.exports = router;
