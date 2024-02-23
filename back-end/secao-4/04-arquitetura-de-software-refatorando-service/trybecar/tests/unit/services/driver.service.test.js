const { expect } = require('chai');
const sinon = require('sinon');

const { driverModel } = require('../../../src/models');
const { driverService } = require('../../../src/services');
const {
  driversMockFromDB,
  driversMockFromModel,
  driverFromDB,
  driverFromModel,
} = require('../mocks/driver.mock');

describe('Realizando testes - DRIVER SERVICE', function () {
  it('Deve retornar todos os motoristas cadastrados', async function () {
    sinon.stub(driverModel, 'findAll').resolves(driversMockFromDB);
    const serviceResponse = await driverService.findAll();

    expect(serviceResponse.status).to.equal('SUCCESSFUL');
    expect(serviceResponse.data).to.deep.equal(driversMockFromModel);
  });

  it('Deve retornar o motorista com o id correto', async function () {
    sinon.stub(driverModel, 'findById').resolves(driverFromDB);
    const driverId = 1;
    const serviceResponse = await driverService.findById(driverId);

    expect(serviceResponse.status).to.be.equal('SUCCESSFUL');
    expect(serviceResponse.data).to.deep.equal(driverFromModel);
  });

  it('Deve retornar uma mensagem de erro caso não encontre o motorista', async function () {
    sinon.stub(driverModel, 'findById').resolves();
    const driverId = 9999;
    const serviceResponse = await driverService.findById(driverId);

    expect(serviceResponse.status).to.be.equal('NOT_FOUND');
    expect(serviceResponse.data).to.deep.equal({ message: 'Driver not found!' });
  });

  it('Deve cadastrar um novo motorista com sucesso', async function () {
    sinon.stub(driverModel, 'createDriver').resolves(99);
    sinon.stub(driverModel, 'findById').resolves({ id: 99, name: 'Smilinguido' });

    const serviceResponse = await driverService.createDriver({ name: 'Smilinguido' });

    expect(serviceResponse.status).to.be.equal('SUCCESSFUL');
    expect(serviceResponse.data).to.deep.equal({ id: 99, name: 'Smilinguido' });
  });

  it('Não deve cadastrar um motorista com "name" menor que 3 caracteres', async function () {
    sinon.stub(driverModel, 'createDriver').resolves(98);
    sinon.stub(driverModel, 'findById').resolves({ id: 98, name: 'It' });

    const serviceResponse = await driverService.createDriver({ name: 'It' });
    const errorMessage = '"name" length must be at least 3 characters long';
    expect(serviceResponse.status).to.be.equal('INVALID_VALUE');
    expect(serviceResponse.data).to.deep.equal({ message: errorMessage });
  });

  afterEach(function () { sinon.restore(); });
});