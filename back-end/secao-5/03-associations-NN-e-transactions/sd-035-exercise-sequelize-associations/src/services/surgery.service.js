const { Patient, Surgery } = require('../models');

const getDoctorSurgeries = async (doctor) => {
  const surgeries = await Surgery.findAll({
    where: { doctor },
    include: [{
      model: Patient,
      as: 'patients',
      through: { attributes: [] },
      attributes: { exclude: ['planId'] },
    }],
  });
  return surgeries;
};

module.exports = {
  getDoctorSurgeries,
};
