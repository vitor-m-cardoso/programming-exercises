import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';
import loginService from '../../../src/services/login.service';
import loginController from '../../../src/controllers/login.controller';
import loginMock from '../../mocks/login.mock';
import { ServiceResponse } from '../../../src/types/ServiceResponse';
import { Token } from '../../../src/types/Token';

chai.use(sinonChai);

describe('Testes da camada CONTROLLER - loginController', function () {
  const req = {} as Request;
  const res = {} as Response;
  const messageEmailOrPasswordEmpty = 'Dados inválidos';
  const messageEmailOrPasswordInvalid = 'E-mail ou senha inválidos';

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });

  it('Deve retornar um erro caso não receba um email', async function () {
    req.body = loginMock.noEmailLoginBody;

    const serviceResponse: ServiceResponse<Token> = {
      status: 'INVALID_DATA',
      data: { message: messageEmailOrPasswordEmpty },
    };
    sinon.stub(loginService, 'verifyLogin').resolves(serviceResponse);

    await loginController.login(req, res);

    expect(res.status).to.have.been.calledWith(400);
    expect(res.json).to.have.been.calledWith({ message: messageEmailOrPasswordEmpty });
  });

  it('Deve retornar o token de login caso receba um email e uma senha válida', async function () {
    req.body = loginMock.validLoginBody;

    const token = { token: 'validtoken' };
    const serviceResponse: ServiceResponse<Token> = {
      status: 'SUCCESSFUL',
      data: token,
    }
    sinon.stub(loginService, 'verifyLogin').resolves(serviceResponse);

    await loginController.login(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(token);
  });

  it('Deve retornar um erro caso não receba uma senha', async function () {
    req.body = loginMock.noPasswordLoginBody;

    const serviceResponse: ServiceResponse<Token> = {
      status: 'INVALID_DATA',
      data: { message: messageEmailOrPasswordEmpty },
    }
    sinon.stub(loginService, 'verifyLogin').resolves(serviceResponse);

    await loginController.login(req, res);

    expect(res.status).to.have.been.calledWith(400);
    expect(res.json).to.have.been.calledWith({ message: messageEmailOrPasswordEmpty });
  });

  it('Deve retornar um erro caso receba um email inexistente', async function () {
    req.body = loginMock.nonExistentEmailBody;

    const serviceResponse: ServiceResponse<Token> = {
      status: 'UNAUTHORIZED',
      data: { message: messageEmailOrPasswordInvalid }
    };
    sinon.stub(loginService, 'verifyLogin').resolves(serviceResponse);

    await loginController.login(req, res);

    expect(res.status).to.have.been.calledWith(401);
    expect(res.json).to.have.been.calledWith({ message: messageEmailOrPasswordInvalid });
  });

  it('Deve retornar um erro caso receba uma senha inválida', async function () {
    req.body = loginMock.userWithWrongPasswordBody;

    const serviceResponse: ServiceResponse<Token> = {
      status: 'UNAUTHORIZED',
      data: { message: messageEmailOrPasswordInvalid }
    };
    sinon.stub(loginService, 'verifyLogin').resolves(serviceResponse);

    await loginController.login(req, res);

    expect(res.status).to.have.been.calledWith(401);
    expect(res.json).to.have.been.calledWith({ message: messageEmailOrPasswordInvalid });
  });
});