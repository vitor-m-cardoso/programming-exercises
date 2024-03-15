const jwt = require('jsonwebtoken');

/* Sua chave secreta. É com ela que os dados do seu usuário serão encriptados.
Em projetos reais, armazene-a numa variável de ambiente e tenha cuidado com ela,
pois só quem tem acesso
a ela poderá criar ou alterar tokens JWT. */
const secret = process.env.JWT_SECRET || 'secret';

/* Criamos uma config básica para o nosso JWT, onde:
expiresIn -> significa o tempo pelo qual esse token será válido;
algorithm -> algoritmo que você usará para assinar sua mensagem

/* A propriedade expiresIn aceita o tempo de forma bem descritiva. Por exemplo: '7d' = 7 dias. '8h' = 8 horas. */
const jwtConfig = {
  expiresIn: '8h',
  algorithm: 'HS256',
};

const createToken = (user) => {
  /* Aqui é quando assinamos de fato nossa mensagem com a nossa "chave secreta".
  Mensagem essa que contém dados do seu usuário e/ou demais dados que você
  quiser colocar dentro de "data".
  O resultado dessa função será equivalente a algo como: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjozLCJ1c2VybmFtZSI6Iml0YWxzc29kaiIsInBhc3N3b3JkIjoic2VuaGExMjMifSwiaWF0IjoxNjM4OTc1MTMyLCJleHAiOjE2Mzk1Nzk5MzJ9.hnpmu2p61Il8wdQfmUiJ7wiWXgw8UuioOU_D2RnB9kY */
  const token = jwt.sign({ data: { userId: user.id } }, secret, jwtConfig);

  return token;
};

module.exports = {
  createToken,
}
