const router = require('express').Router();
const { driverController } = require('../controllers');

router.get('/:id', driverController.findById);
router.get('/open/travels', driverController.getOpenTravels);
router.get('/', driverController.findAll);

router.post('/', driverController.createDriver);

router.patch('/:driverId/travels/:travelId', driverController.updateTravelStatus);

module.exports = router;
