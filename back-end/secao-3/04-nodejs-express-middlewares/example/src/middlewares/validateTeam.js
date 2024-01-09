const teams = require('../utils/teams');

const validateTeam = (req, res, next) => {
  const { nome, sigla } = req.body;

  const teamExists =
    teams.some((t) => t.sigla === sigla) || req.teams.teams.includes(sigla);

  if (teamExists) {
    return res
      .status(422)
      .json({ message: 'Já existe um time com esta sigla' });
  }
  if (!nome) {
    return res.status(400).send({ message: 'O campo "nome" é obrigatório' });
  }
  if (!sigla) {
    return res.status(400).send({ message: 'O campo "sigla" é obrigatório' });
  }

  next();
};

module.exports = validateTeam;
