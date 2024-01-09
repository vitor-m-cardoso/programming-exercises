const teams = require('../utils/teams');

const existingId = (req, res, next) => {
  const { id } = req.params;
  const team = teams.some((team) => team.id === Number(id));
  if (!team) {
    return res.status(404).send({ message: 'Time não encontrado' });
  }

  next();
};

module.exports = existingId;
