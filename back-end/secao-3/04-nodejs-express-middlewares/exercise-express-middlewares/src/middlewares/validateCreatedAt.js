const validateCreatedAt = (req, res, next) => {
  const {
    description: { createdAt },
  } = req.body;
  const dateRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;

  if (!createdAt) {
    return res.status(400).send({ message: 'O campo createdAt é obrigatório' });
  }

  if (!dateRegex.test(createdAt)) {
    return res
      .status(400)
      .send({ message: 'O campo createdAt deve ter o formato \'dd/mm/aaaa\'' });
  }
  next();
};

module.exports = validateCreatedAt;
