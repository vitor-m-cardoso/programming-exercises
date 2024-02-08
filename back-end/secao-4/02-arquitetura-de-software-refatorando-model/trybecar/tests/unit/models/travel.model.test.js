const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/connection');
const {
  travelFromDB,
  travelFromModel,
  travelWithWaypointsFromDB,
  travelWithWaypointsFromModel,
} = require('../mocks/travel.mock');
const { travelModel } = require('../../../src/models');

describe('Realizando testes - TRAVEL MODEL:', function () {
  it('Recuperando travel por id sem waypoints com sucesso', async function () {
    sinon.stub(connection, 'execute').resolves([[travelFromDB]]);

    const inputDataId = 42;
    const travel = await travelModel.findById(inputDataId);

    expect(travel).to.be.an('object');
    expect(travel).to.be.deep.equal(travelFromModel);
  });

  it('Recuperando travel por id com waypoints com sucesso', async function () {
    sinon.stub(connection, 'execute').resolves([travelWithWaypointsFromDB]);

    const inputDataId = 1;
    const travel = await travelModel.findById(inputDataId);

    expect(travel).to.be.an('object');
    expect(travel).to.be.deep.equal(travelWithWaypointsFromModel);
  });

  afterEach(function () {
    sinon.restore();
  });
});