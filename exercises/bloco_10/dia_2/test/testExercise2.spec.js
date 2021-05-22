const { getUserName } = require('./src/exercise2');

// Utilizando a sintaxe de Promise , faça um teste que verifique o resultado da função getUserName para o caso em que o usuário é encontrado, e também um teste para o caso em que o usuário não é encontrado.
// Dica : Veja os dados falsos utilizados no banco de dados, disponíveis na variável users , para saber quais IDs existem.

describe('When the user id exists', () => {
  it('Should return the user name', () => {
    expect.assertions(1);
    return getUserName(4).then(userNames => {
      expect(userNames).toEqual('Mark');
    })
  });
});

describe('When the user id doesnt exists', () => {
  it('return an error', () => {
    expect.assertions(1);
    return getUserName(2).catch(error => {
      expect(error).toEqual({ error: 'User with 2 not found.'});
    });
  });
});