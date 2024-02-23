const { driverSchema } = require('./schemas');

const validateNewDriver = (keysObjectToValidate) => {
  const { error } = driverSchema.validate(keysObjectToValidate);
  if (error) return { status: 'INVALID_VALUE', message: error.message };
};

module.exports = {
  validateNewDriver,
};
