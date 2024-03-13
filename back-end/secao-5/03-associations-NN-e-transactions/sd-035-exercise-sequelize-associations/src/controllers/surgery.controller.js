const surgeryService = require('../services/surgery.service');

const getDoctorSurgeries = async (req, res) => {
  try {
    const { doctor } = req.params;

    const surgeries = await surgeryService.getDoctorSurgeries(doctor);

    if (!surgeries) {
      return res.status(404).json({ message: 'No surgeries or doctor found' });
    }
    return res.status(200).json(surgeries);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  getDoctorSurgeries,
};
