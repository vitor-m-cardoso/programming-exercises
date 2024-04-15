import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';

import app from '../../../src/app';

import UserModel from '../../../src/database/models/user.model';
import loginMock from '../../mocks/login.mock';

chai.use(chaiHttp);

describe('POST /login', function () {
  beforeEach(function () { sinon.restore() });

  it('Deve retornar um erro caso não receba um email', async function () {
    // Arrange
    const httpRequestBody = loginMock.noEmailLoginBody;

    // Act
    const httpResponse = await chai
      .request(app)
      .post('/login')
      .send(httpRequestBody);

    // Assert
    expect(httpResponse.status).to.be.equal(400);
    expect(httpResponse.body).to.be.deep.equal({ message: 'Dados inválidos' });
  });

  it('Deve retornar um erro caso não receba uma senha', async function () {
    // Arrange
    const httpRequestBody = loginMock.noPasswordLoginBody;

    // Act
    const httpResponse = await chai
      .request(app)
      .post('/login')
      .send(httpRequestBody);

    // Assert
    expect(httpResponse.status).to.be.equal(400);
    expect(httpResponse.body).to.be.deep.equal({ message: 'Dados inválidos' });
  });

  it('Deve retornar um erro caso receba um email inexistente', async function () {
    const httpRequestBody = loginMock.nonExistentEmailBody;
    sinon.stub(UserModel, 'findOne').resolves(null);

    const httpResponse = await chai
      .request(app)
      .post('/login')
      .send(httpRequestBody);

    expect(httpResponse.status).to.be.equal(401);
    expect(httpResponse.body).to.be.deep.equal({ message: 'E-mail ou senha inválidos' });
  });

  it('Deve retornar um erro caso a senha esteja incorreta', async function () {
    const httpRequestBody = loginMock.userWithWrongPasswordBody;
    const mockFindOneReturn = UserModel.build(loginMock.existingUser);
    sinon.stub(UserModel, 'findOne').resolves(mockFindOneReturn);

    const httpResponse = await chai
      .request(app)
      .post('/login')
      .send(httpRequestBody);

    expect(httpResponse.status).to.be.equal(401);
    expect(httpResponse.body).to.be.deep.equal({ message: 'E-mail ou senha inválidos' });
  });

  it('Deve retornar um token caso receba um email e senha válidos', async function () {
    const httpRequestBody = loginMock.validLoginBody;
    const mockFindOneReturn = UserModel.build(loginMock.existingUser);
    sinon.stub(UserModel, 'findOne').resolves(mockFindOneReturn);

    const httpResponse = await chai
      .request(app)
      .post('/login')
      .send(httpRequestBody);

    expect(httpResponse.status).to.be.equal(200);
    expect(httpResponse.body).to.have.key('token');
  });
});