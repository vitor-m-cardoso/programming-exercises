const checkRating = (rating) => {
  if (!rating && rating !== 0) return false;
  return true;
};

const validateRating = (req, res, next) => {
  const { description: { rating } } = req.body;
  
  if (!checkRating(rating)) {
    return res.status(400).send({ message: 'O campo rating é obrigatório' });
  }

  const isInt = Number.isInteger(rating);

  if ((rating < 1 || rating > 5) || !isInt) {
    return res
      .status(400)
      .send({ message: 'O campo rating deve ser um número inteiro entre 1 e 5' });
  }
  next();
};

module.exports = validateRating;
