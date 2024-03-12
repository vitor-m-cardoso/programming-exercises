const employeeService = require('../services/employee.service');

const getAll = async (_req, res) => {
  try {
    const employees = await employeeService.getAll();

    return res.status(200).json(employees);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: 'Internal server error!' });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;

    const employee = await employeeService.getById(id);

    if (!employee) {
      return res.status(404).json({ message: 'Employee not found!' });
    }

    return res.status(200).json(employee);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: 'Internal server error' });
  }
}

module.exports = {
  getAll,
  getById,
};
