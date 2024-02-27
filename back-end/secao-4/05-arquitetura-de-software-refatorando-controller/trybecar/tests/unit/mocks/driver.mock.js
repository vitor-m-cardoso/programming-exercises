const driverFromDB = { id: 4, name: 'Samara Granjeiro' };
const driverFromModel = { id: 4, name: 'Samara Granjeiro' };
const driverFromServiceSuccessful = {
  status: 'SUCCESSFUL',
  data: driverFromDB,
};

const allDriversFromDB = [
  { id: 1, name: "Liana Cisneiros" },
  { id: 2, name: "Fábio Frazão" },
  { id: 3, name: "Anastácia Bicalho" },
  { id: 4, name: "Samara Granjeiro" },
  { id: 5, name: "Levi Teixeira" }
];
const driversFromServiceSuccessful = {
  status: 'SUCCESSFUL',
  data: allDriversFromDB,
}

const allDriversFromModel = [
  { id: 1, name: "Liana Cisneiros" },
  { id: 2, name: "Fábio Frazão" },
  { id: 3, name: "Anastácia Bicalho" },
  { id: 4, name: "Samara Granjeiro" },
  { id: 5, name: "Levi Teixeira" }
];

const createdDriverFromService = {
  status: 'CREATED',
  data: {
    id: 28,
    name: 'MacMaqueen',
  }
}

module.exports = {
  driverFromModel,
  driversFromServiceSuccessful,
  allDriversFromModel,
  driverFromServiceSuccessful,
  createdDriverFromService,
};