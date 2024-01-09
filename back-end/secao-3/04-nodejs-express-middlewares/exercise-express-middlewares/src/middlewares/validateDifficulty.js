const checkDifficulty = (difficulty) => {
  const difficultyArr = ['Fácil', 'Médio', 'Difícil'];
  const validDifficulty = difficultyArr.some((item) => item === difficulty);
  if (!validDifficulty) return false;
  return true;
};

const validateDifficulty = (req, res, next) => {
  const { description: { difficulty } } = req.body;

  if (!difficulty) {
    return res
      .status(400)
      .send({ message: 'O campo difficulty é obrigatório' });
  }
  if (!checkDifficulty(difficulty)) {
    return res
      .status(400)
      .send({ message: 'O campo difficulty deve ser \'Fácil\', \'Médio\' ou \'Difícil\'' });
  }
  next();
};

module.exports = validateDifficulty;
