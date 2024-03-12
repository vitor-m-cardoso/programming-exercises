const router = require('express').Router();
const employeeController = require('../controllers/employee.controller');

router.get('/:id', employeeController.getById);
router.get('/', employeeController.getAll);

module.exports = router;
