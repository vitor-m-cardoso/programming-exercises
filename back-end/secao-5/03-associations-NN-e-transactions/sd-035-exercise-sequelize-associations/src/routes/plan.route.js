const router = require('express').Router();

const planController = require('../controllers/plan.controller');

router.get('/:id', planController.getPatientsPlanById);

module.exports = router;
