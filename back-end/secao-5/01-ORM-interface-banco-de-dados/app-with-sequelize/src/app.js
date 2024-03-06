const express = require('express');

const userController = require('./controllers/user.controller');

const app = express();

app.use(express.json());

app.get('/users', userController.getAll);

// Este endpoint usa o método findOne do Sequelize para buscar um usuário pelo id e email.
// URL a ser utilizada para o exemplo "http://localhost:3001/users/search/1?email=leo@test.com"
app.get('/users/search/:id', userController.getByIdAndEmail);

// Este endpoint usa o método findByPk do Sequelize para buscar um usuário pelo id.
app.get('/users/:id', userController.getById);

// Este endpoint usa o método create do Sequelize para salvar um usuário no banco.
app.post('/users', userController.createUser);

// Este endpoint usa o método update do Sequelize para alterar um usuário no banco.
app.put('/users/:id', userController.updateUser);

// Este endpoint usa o método destroy do Sequelize para remover um usuário no banco.
app.delete('/users/:id', userController.deleteUser);

module.exports = app;
