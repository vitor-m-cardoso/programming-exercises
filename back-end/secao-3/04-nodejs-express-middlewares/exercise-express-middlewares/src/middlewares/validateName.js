const validateName = (req, res, next) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).send({ message: 'O campo name é obrigatório' });
  }

  const minCharacteres = 4;
  if (name.length < minCharacteres) {
    return res
      .status(400)
      .send({ message: 'O campo name deve ter pelo menos 4 caracteres' });
  }
  next();
};

module.exports = validateName;
