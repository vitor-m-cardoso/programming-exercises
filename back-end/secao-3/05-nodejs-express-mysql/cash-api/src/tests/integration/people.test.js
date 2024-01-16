const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');

const app = require('../../app');
const connection = require('../../db/connection');

const { expect, use } = chai;

use(chaiHttp);

const peopleList = [
  {
    id: 1,
    firstName: 'Luke',
    lastName: 'Skywalker',
    email: 'luke.skywalker@trybe.com',
    phone: '851 678 4453',
  },
  {
    id: 2,
    firstName: 'Dart',
    lastName: 'Vader',
    email: 'dart.vader@trybe.com',
    phone: '851 678 5665',
  }
]

describe('Testando os endpoints de /people', function () {
  it('Deve cadastrar uma pessoa corretamente', async function () {
    sinon.stub(connection, 'execute').resolves([{ insertId: 42 }]);

    const response = await chai
      .request(app)
      .post('/people')
      .send({  
        firstName: 'Luke',
        lastName: 'Skywalker',
        email: 'luke.skywalker@email.com',
        phone: '851 678 4453',
      });

    expect(response.status).to.be.equal(201);
    expect(response.body).to.deep.equal({ message: 'Cadastro realizado com sucesso, id: 42' });
  });

  it('Deve listar todas as pessoas cadastradas', async function () {
    sinon.stub(connection, 'execute').resolves([peopleList]);
    const response = await chai
      .request(app)
      .get('/people');

    expect(response.status).to.be.equal(200);
    expect(response.body).to.deep.equal(peopleList);
  });

  it('Deve listar corretamente a pessoa com o id 1', async function () {
    sinon.stub(connection, 'execute').resolves([[peopleList[0]]]);
    const response = await chai
      .request(app)
      .get('/people/1');

    expect(response.status).to.be.equal(200);
    expect(response.body).to.deep.equal(peopleList[0]);
  });

  it('Deve alterar o cadastro com o id 1', async function () {
    sinon.stub(connection, 'execute').resolves([{ affectedRows: 1 }]);
    const response = await chai
      .request(app)
      .put('/people/1')
      .send({
        firstName: 'Luquinha',
        lastName: 'Home da Kombe',
        email: 'luquinha.homedakombe@email.com',
        phone: '400 289 2200',
      });

    expect(response.status).to.be.equal(200);
    expect(response.body).to.deep.equal({ message: 'Cadastro com o id 1 atualizado com sucesso'});
  });

  it('Deve remover o cadastro com o id 1', async function () {
    sinon.stub(connection, 'execute').resolves([{ affectedRows: 1 }]);
    const response = await chai
      .request(app)
      .delete('/people/1');

    expect(response.status).to.be.equal(200);
    expect(response.body).to.deep.equal({ message: 'Cadastro com o id 1 excluido com sucesso' });
  })

  afterEach(sinon.restore);
});
