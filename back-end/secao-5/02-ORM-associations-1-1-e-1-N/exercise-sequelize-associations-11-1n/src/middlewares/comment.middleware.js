const validateMessage = (req, res, next) => {
  const { message } = req.body;

  if (!message) {
    return res.status(404).json({ message: 'Missing "message" field' });
  }
  next();
};

module.exports = {
  validateMessage,
};
