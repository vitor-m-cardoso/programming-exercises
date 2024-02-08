const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/connection');
const { passengerModel } = require('../../../src/models');
const { allPassengersFromDB, passengerFromDB } = require('../mocks/passenger.mock');

describe('Realizando testes - PASSENGER MODEL:', function () {
  it('Deve recuperar todos os passengers com sucesso', async function () {
    sinon.stub(connection, 'execute').resolves([allPassengersFromDB]);

    const passengers = await passengerModel.findAll();

    expect(passengers).to.be.an('array');
    expect(passengers).to.be.deep.equal(allPassengersFromDB);
  });

  it('Recuperando passenger por id com sucesso', async function () {
    sinon.stub(connection, 'execute').resolves([[passengerFromDB]]);
    
    const inputData = 1;
    const passenger = await passengerModel.findById(inputData);

    expect(passenger).to.be.an('object');
    expect(passenger).to.be.deep.equal(passengerFromDB);
  });

  afterEach(function () {
    sinon.restore();
  });
});