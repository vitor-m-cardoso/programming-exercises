const router = require('express').Router();

const surgeryController = require('../controllers/surgery.controller');

router.get('/:doctor', surgeryController.getDoctorSurgeries);

module.exports = router;