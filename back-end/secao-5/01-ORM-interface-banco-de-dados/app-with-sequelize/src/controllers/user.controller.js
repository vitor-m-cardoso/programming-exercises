// src/controllers/user.controller.js

const userService = require('../services/user.service');

const error500Message = 'Internal server error!';

const getAll = async (_req, res) => {
  try {
    const users = await userService.getAll();
    return res.status(200).json(users);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: error500Message });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userService.getById(id);

    if (!user) return res.status(404).json({ message: 'Usuário não encontrado' });

    return res.status(200).json(user);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: error500Message });
  }
};

const getByIdAndEmail = async (req, res) => {
  try {
    const { id } = req.params;
    const { email } = req.query;
    const user = await userService.getByIdAndEmail(id, email);

    if (!user) return res.status(404).json({ message: 'Usuário não encontrado' });

    return res.status(200).json(user);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: error500Message });
  }
};

const createUser = async (req, res) => {
  try {
    const { fullName, email, phoneNum } = req.body;
    const newUser = await userService.createUser(fullName, email, phoneNum);

    return res.status(201).json(newUser);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: error500Message });
  }
};

const updateUser = async (req, res) => {
  try {
    const { fullName, email } = req.body;
    const { id } = req.params;
    const updatedUser = await userService.updateUser(id, fullName, email);

    if (!updatedUser) return res.status(404).json({ message: 'Usuário não encontrado' });

    return res.status(200).json({ message: 'Usuário atualizado com sucesso!' });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: error500Message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await userService.deleteUser(id);

    return res.status(200).json({ message: 'Usuário excluído com sucesso!' });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: error500Message });
  }
};

module.exports = {
  getAll,
  getById,
  getByIdAndEmail,
  createUser,
  updateUser,
  deleteUser,
};
