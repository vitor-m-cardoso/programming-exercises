// cria um router middleware
const router = require('express').Router();

const teams = require('../utils/teams');
const { validateTeam, existingId, apiCredentials } = require('../middlewares');

let nextId = 3;

router.get('/', (_req, res, next) => {
  try {
    res.json(teams);
  } catch (error) {
    return next(error);
  }
});
router.get('/:id', existingId, (req, res) => {
  const { id } = req.params;
  const team = teams.find((team) => team.id === Number(id));
  res.status(200).json(team);
});

router.use(apiCredentials);

router.post('/', validateTeam, (req, res) => {
  const { nome, sigla } = req.body;

  const team = { id: nextId, nome, sigla };
  teams.push(team);
  nextId += 1;
  res.status(201).json(team);
});

router.put('/:id', existingId, validateTeam, (req, res) => {
  const { id } = req.params;

  const team = teams.find((team) => team.id === Number(id));
  if (team) {
    const index = teams.indexOf(team);
    const updatedTeam = { id: Number(id), ...req.body };
    teams.splice(index, 1, updatedTeam);
    res.status(201).json(updatedTeam);
  } else {
    res.status(404).send({ message: 'Team not found' });
  }
});

router.delete('/:id', existingId, (req, res) => {
  const { id } = req.params;
  const team = teams.find((team) => team.id === Number(id));
  if (team) {
    const index = teams.indexOf(team);
    teams.splice(index, 1);
    res.status(204);
  } else {
    res.status(404).send({ message: 'Team not found' });
  }
});

module.exports = router;
