const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/connection');
const {
  travelByStatusFromDB,
  travelByStatusFromModel, 
  driversFromDB,
  driversFromModel,
  driverFromDB,
  driverFromModel,
  driverIdFromDB,
  driverIdFromModel,
} = require('../mocks/driver.mock');
const { driverModel } = require('../../../src/models');

describe('Realizando testes - DRIVER MODEL:', function () {
  it('Deve listar todos os motoristas que estão cadastrados', async function () {
    sinon.stub(connection, 'execute').resolves([driversFromDB]);
    const drivers = await driverModel.findAll();

    expect(drivers).to.be.an('array');
    expect(drivers).to.have.lengthOf(5);
    expect(drivers).to.be.deep.equal(driversFromModel);
  });

  it('Deve listar o motorista com o id corretamente', async function () {
    sinon.stub(connection, 'execute').resolves([[driverFromDB]]);

    const driverId = 4;
    const driver = await driverModel.findById(driverId);

    expect(driver).to.be.an('object');
    expect(driver).to.be.deep.equal(driverFromModel);
  });

  it('Recuperando informações de status de viagens com sucesso', async function () {
    sinon.stub(connection, 'execute').resolves([travelByStatusFromDB]);

    const WAITING_DRIVER = 1;
    const travels = await driverModel.findByStatus(WAITING_DRIVER);

    expect(travels).to.be.an('array');
    expect(travels).to.be.deep.equal(travelByStatusFromModel);
  });

  it('Deve cadastrar um motorista com sucesso', async function () {
    sinon.stub(connection, 'execute').resolves([driverIdFromDB]);

    const inputData = { name: 'Stevie Pizza' };
    const insertId = await driverModel.insert(inputData);

    expect(insertId).to.be.an('number');
    expect(insertId).to.be.equal(driverIdFromModel);
  });

  afterEach(function () {
    sinon.restore();
  });
});