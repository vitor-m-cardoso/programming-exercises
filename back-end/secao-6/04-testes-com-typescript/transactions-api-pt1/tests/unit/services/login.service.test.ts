import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'sequelize';
import UserModel from '../../../src/database/models/user.model';
import loginMock from '../../mocks/login.mock';
import loginService from '../../../src/services/login.service';

describe('Testes da camada SERVICE - loginService', function () {
  beforeEach(function () { sinon.restore() });

  it('Deve retornar um erro ao não receber um email', async function () {
    const parameters = loginMock.noEmailLoginBody;

    const serviceResponse = await loginService.verifyLogin(parameters);

    expect(serviceResponse.status).to.be.equal('INVALID_DATA');
    expect(serviceResponse.data).not.to.have.key('token');
    expect(serviceResponse.data).to.be.deep.equal({ message: 'Dados inválidos' });
  });

  it('Deve retornar um token ao receber um email e senha válidos', async function () {
    const parameters = loginMock.validLoginBody;
    const mockFindOneReturn = UserModel.build(loginMock.existingUser);
    sinon.stub(UserModel, 'findOne').resolves(mockFindOneReturn);

    const serviceResponse = await loginService.verifyLogin(parameters);

    expect(serviceResponse.status).to.be.equal('SUCCESSFUL');
    expect(serviceResponse.data).to.have.key('token');
  });

  it('Deve retornar um erro ao não receber uma senha', async function () {
    const parameters = loginMock.noPasswordLoginBody;

    const serviceResponse = await loginService.verifyLogin(parameters);

    expect(serviceResponse.status).to.be.equal('INVALID_DATA');
    expect(serviceResponse.data).not.to.have.key('token');
    expect(serviceResponse.data).to.be.deep.equal({ message: 'Dados inválidos' });
  });

  it('Deve retornar um erro ao receber um email inexistente', async function () {
    const parameters = loginMock.nonExistentEmailBody;
    sinon.stub(UserModel, 'findOne').resolves(null);

    const serviceResponse = await loginService.verifyLogin(parameters);

    expect(serviceResponse.status).to.be.equal('UNAUTHORIZED');
    expect(serviceResponse.data).not.to.have.key('token');
    expect(serviceResponse.data).to.be.deep.equal({ message: 'E-mail ou senha inválidos' });
  });

  it('Deve retornar um erro ao receber um email válido e uma senha inválida', async function () {
    const parameters = loginMock.userWithWrongPasswordBody;
    const mockFindOneReturn = UserModel.build(loginMock.existingUser);
    sinon.stub(UserModel, 'findOne').resolves(mockFindOneReturn);

    const serviceResponse = await loginService.verifyLogin(parameters);

    expect(serviceResponse.status).to.be.equal('UNAUTHORIZED');
    expect(serviceResponse.data).not.to.have.key('token');
    expect(serviceResponse.data).to.be.deep.equal({ message: 'E-mail ou senha inválidos' });
  });
});
