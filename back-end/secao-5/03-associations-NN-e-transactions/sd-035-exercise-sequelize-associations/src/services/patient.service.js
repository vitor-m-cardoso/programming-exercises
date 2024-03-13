const { Patient, Plan, Surgery } = require('../models');

const getAllPatientsAndPlans = async () => {
  const patients = await Patient.findAll({
    include: { model: Plan, as: 'plan' },
  });

  return patients;
};

const getAllPatientsSurgeries = async () => {
  const patients = await Patient.findAll({
    include: [{
      model: Surgery,
      as: 'surgeries',
      through: { attributes: [] },
    }],
  });

  return patients;
};

const createPatient = async (fullName, planId) => {
  const newPatient = await Patient.create({ fullName, planId });

  return newPatient;
};

const getPatientsSurgeriesWithoutDoc = async () => {
  const patientsSurgeries = await Patient.findAll({
    include: [{
      model: Surgery,
      as: 'surgeries',
      attributes: { exclude: ['doctor'] },
      through: { attributes: [] },
    }],
    attributes: { exclude: ['planId'] },
  });
  return patientsSurgeries;
};

module.exports = {
  getAllPatientsAndPlans,
  getAllPatientsSurgeries,
  createPatient,
  getPatientsSurgeriesWithoutDoc,
};
