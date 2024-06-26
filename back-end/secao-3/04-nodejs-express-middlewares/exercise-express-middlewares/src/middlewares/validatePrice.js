const validatePrice = (req, res, next) => {
  const { price } = req.body;

  if (!price && price !== 0) {
    return res.status(400).send({ message: 'O campo price é obrigatório' });
  }

  if (typeof price !== 'number' || price < 0) {
    return res.status(400).send({
      message: 'O campo price deve ser um número maior ou igual a zero',
    });
  }
  next();
};

module.exports = validatePrice;
