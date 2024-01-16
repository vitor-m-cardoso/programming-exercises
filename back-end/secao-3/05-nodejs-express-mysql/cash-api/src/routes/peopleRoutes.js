const router = require('express').Router();
const peopleDB = require('../db/peopleDB');

router.get('/', async (_req, res) => {
  try {
    const [result] = await peopleDB.findAll();
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).send({ message: error.sqlMessage })
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const [[result]] = await peopleDB.findById(id);
    if (result) {
      return res.status(200).json(result);
    } else {
      return res.status(404).json({ message: 'Pessoa não encontrada' });
    }
  } catch (error) {
    return res.status(500).send({ message: error.sqlMessage });
  }
})

router.post('/', async (req, res) => {
  const person = req.body;
  try {
    const [result] = await peopleDB.insert(person);
    return res
      .status(201)
      .json({ message: `Cadastro realizado com sucesso, id: ${result.insertId}` });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: 'Erro interno no servidor!' });
  }
});

router.put('/:id', async (req, res) => {
  const { 
    params: { id }, 
    body: person
  } = req;
  try {
    const [{ affectedRows }] = await peopleDB.update(person, id);
    if (affectedRows > 0) {
      return res.status(200).json({ message: `Cadastro com o id ${id} atualizado com sucesso` });
    } else {
      return res.status(404).json({ message: 'Cadastro não encontrado!' });
    }
  } catch (error) {
    return res.status(500).send({ message: 'Erro interno no servidor!' });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const [{ affectedRows }] = await peopleDB.remove(id);
    if (affectedRows > 0) {
      return res.status(200).json({ message: `Cadastro com o id ${id} excluido com sucesso` });
    } else {
      return res.status(404).json({ message: 'Cadastro não encontrado!' });
    }
  } catch (error) {
    return res.status(500).send({ message: 'Erro interno no servidor!' });
  }
});

module.exports = router;