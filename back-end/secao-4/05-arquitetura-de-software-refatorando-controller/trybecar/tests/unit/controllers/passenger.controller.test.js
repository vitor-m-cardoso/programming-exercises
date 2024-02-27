const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;

chai.use(sinonChai);

const { passengerController } = require('../../../src/controllers');
const { travelService } = require('../../../src/services');
const {
  travelFromServiceCreated,
  travelFromModel,
} = require('../mocks/travel.mock');

describe('Realizando testes - PASSENGER CONTROLLER:', function () {
  it('Inserindo travel com sucesso - status 201', async function () {
    sinon.stub(travelService, 'requestTravel').resolves(travelFromServiceCreated);

    const req = {
      params: { passengerId: 1 },
      body: { startingAddress: 'starting street', endingAddress: 'end street' },
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await passengerController.createTravel(req, res);
    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith(travelFromModel);
  });

  it('Não insere travel com params errado', async function () {
    const req = {
      params: { passengerId: 0 },
      body: { startingAddress: 'starting address', endingAddress: 'end street' },
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await passengerController.createTravel(req, res);
    expect(res.status).to.have.been.calledWith(422);
    expect(res.json).to.have.been.calledWith(sinon.match.has('message'));
  });

  it('Não insere travel com body errado', async function () {
    const req = {
      params: { passengerId: 1 },
      body: { startingAddress: 'st', endingAddress: 'en' },
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await passengerController.createTravel(req, res);
    expect(res.status).to.have.been.calledWith(422);
    expect(res.json).to.have.been.calledWith(sinon.match.has('message'));
  });

  it('Não insere travel com endereços iguais', async function () {
    const req = {
      params: { passengerId: 1 },
      body: { startingAddress: 'Essa rua aqui', endingAddress: 'Essa rua aqui' },
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await passengerController.createTravel(req, res);
    expect(res.status).to.have.been.calledWith(422);
    expect(res.json).to.have.been.calledWith(sinon.match.has('message'));
  });

  afterEach(function () {
    sinon.restore();
  });
});
