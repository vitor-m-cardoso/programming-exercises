const validateDescription = (req, res, next) => {
  const { description } = req.body;
  if (!description) {
    return res
      .status(400)
      .send({ message: 'O campo description é obrigatório' });
  }
  next();
};

module.exports = validateDescription;
