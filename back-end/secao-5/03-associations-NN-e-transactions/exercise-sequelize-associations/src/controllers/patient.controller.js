const patientService = require('../services/patient.service');

const getAllPatientsAndPlans = async (_req, res) => {
  try {
    const patients = await patientService.getAllPatientsAndPlans();

    return res.status(200).json(patients);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

const getAllPatientsSurgeries = async (_req, res) => {
  try {
    const patients = await patientService.getAllPatientsSurgeries();

    return res.status(200).json(patients);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

const createPatient = async (req, res) => {
  const { fullName, planId } = req.body;
  try {
    const newPatient = await patientService.createPatient(fullName, planId);

    if (!newPatient) {
      return res.status(422).json({ message: 'Failed to create a new patient' });
    }
    return res.status(201).json(newPatient);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

const getPatientsSurgeriesWithoutDoc = async (_req, res) => {
  try {
    const patientsSurgeries = await patientService.getPatientsSurgeriesWithoutDoc();

    return res.status(200).json(patientsSurgeries);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  getAllPatientsAndPlans,
  getAllPatientsSurgeries,
  createPatient,
  getPatientsSurgeriesWithoutDoc,
};
