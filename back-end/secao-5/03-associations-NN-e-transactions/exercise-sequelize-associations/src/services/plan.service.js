const { Plan, Patient } = require('../models');

const getPatientsPlanById = async (id) => {
  const patientsPlan = await Plan.findOne({
    where: { planId: id },
    include: [{
      model: Patient,
      as: 'patients',
      attributes: { exclude: ['planId'] },
    }],
  });

  return patientsPlan;
};

module.exports = {
  getPatientsPlanById,
};
