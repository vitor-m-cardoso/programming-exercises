const router = require('express').Router();

const patientController = require('../controllers/patient.controller');

router.get('/', patientController.getAllPatientsAndPlans);
router.get('/v1/surgeries', patientController.getAllPatientsSurgeries);
router.get('/v2/surgeries', patientController.getPatientsSurgeriesWithoutDoc);

router.post('/', patientController.createPatient);

module.exports = router;
