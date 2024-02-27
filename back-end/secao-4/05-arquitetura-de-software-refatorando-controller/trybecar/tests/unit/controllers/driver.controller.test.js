const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const { driverService } = require('../../../src/services');
const {
  driversFromServiceSuccessful,
  allDriversFromModel,
  driverFromServiceSuccessful,
  driverFromModel,
  createdDriverFromService,
} = require('../mocks/driver.mock');
const { driverController } = require('../../../src/controllers');

const { expect } = chai;

chai.use(sinonChai);
chai.use(chaiHttp);

describe('Realizando testes - PASSENGER CONTROLLER:', function () {
  it('Deve retornar todos os motoristas cadastrados', async function () {
    sinon.stub(driverService, 'findAll').resolves(driversFromServiceSuccessful);

    const req = { body: {}, params: {} };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await driverController.findAll(req, res);
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(allDriversFromModel);
  });

  it('Deve retornar o motorista com id correto', async function () {
    sinon.stub(driverService, 'findById').resolves(driverFromServiceSuccessful);

    const req = {
      body: {},
      params: { id: 4 },
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await driverController.findById(req, res);
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(driverFromModel);
  });

  it('Deve retornar uma mensagem de erro caso o id não exista', async function () {
    sinon.stub(driverService, 'findById')
      .resolves({ status: 'NOT_FOUND', data: { message: 'Driver not found' } });

    const req = {
      params: { id: 888 },
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await driverController.findById(req, res);
    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith(sinon.match.has('message'));
  });

  it('Deve criar um motorista com sucesso', async function () {
    sinon.stub(driverService, 'createDriver').resolves(createdDriverFromService);

    const req = {
      body: { name: 'MacMaqueen' },
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await driverController.createDriver(req, res);
    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith({ id: 28, name: 'MacMaqueen' });
  });

  afterEach(function () { sinon.restore(); });
});
