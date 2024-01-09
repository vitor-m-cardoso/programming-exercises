const express = require('express');
require('express-async-errors');
const { join } = require('path');

// middlewares externos
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

// importando as rotas
const teamsRouter = require('./routes/teamsRouter');

// Configuramos um limitador para uma taxa máxima de
// 100 requisições em um intervalo de 15 minutos
const limiter = rateLimit({
  max: 100, // número de requisições
  windowMs: 15 * 60 * 1000, // intervalo de tempo, em milissegundos, para atingir o número máximo de requisições
  message: 'Limite de requisições excedido', // mensagem personalizada
});

const app = express();

// utilizando middlewares externos
app.use(limiter);
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.static(join(__dirname, './images')));

// utilizando as rotas criadas
app.use('/teams', teamsRouter);

// se nenhuma rota respondeu, cai neste middleware
app.use((_req, res) => res.status(404).send({ message: 'Not found' }));

// middleware de erro
app.use((error, _req, res, _next) => {
  return res.status(500).json({ error: error.message });
});

module.exports = app;
