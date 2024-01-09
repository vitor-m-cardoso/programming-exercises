const fs = require('fs');
const { readFile } = fs.promises;
const { join } = require('path');

const path = '../authdata.json';

// como vamos ler arquivos assincronamente, precisamos do async
const apiCredentials = async (req, res, next) => {
  // pega o token do cabeçalho, se houver
  const token = req.header('X-API-TOKEN');

  // lê o conteúdo do `./authdata.json` (raiz do projeto)
  const authdata = await readFile(join(__dirname, path), { encoding: 'utf-8' });

  // readFile nos deu uma string, agora vamos carregar um objeto a partir dela
  const authorized = JSON.parse(authdata);

  if (token in authorized) {
    req.teams = authorized[token];
    next();
  } else {
    res.status(401).send({ message: 'Token inválido ou expirado' });
  }
};

module.exports = apiCredentials;
