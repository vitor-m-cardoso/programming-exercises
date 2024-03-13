const planService = require('../services/plan.service');

const getPatientsPlanById = async (req, res) => {
  try {
    const { id } = req.params;

    const patientsPlan = await planService.getPatientsPlanById(id);

    if (!patientsPlan) {
      return res.status(404).json({ message: 'Plan not found' });
    }
    return res.status(200).json(patientsPlan);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  getPatientsPlanById,
};
