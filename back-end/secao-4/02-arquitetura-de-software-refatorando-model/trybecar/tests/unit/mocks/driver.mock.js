const travelByStatusFromDB = [
  {
    id: 1,
    driver_id: null,
    starting_address: 'Rua dos caramelos',
    ending_address: 'Rua Mariana Alvarez Dutra',
    request_date: '2023-05-29T19:56:52.000Z',
    amount_stop: 2,
  },
  {
    id: 42,
    driver_id: null,
    starting_address: 'starting street',
    ending_address: 'end street',
    request_date: '2023-05-29T19:56:25.000Z',
    amount_stop: 0,
  },
];
const travelByStatusFromModel = [
  {
    id: 1,
    driverId: null,
    startingAddress: 'Rua dos caramelos',
    endingAddress: 'Rua Mariana Alvarez Dutra',
    requestDate: '2023-05-29T19:56:52.000Z',
    amountStop: 2,
  },
  {
    id: 42,
    driverId: null,
    startingAddress: 'starting street',
    endingAddress: 'end street',
    requestDate: '2023-05-29T19:56:25.000Z',
    amountStop: 0,
  },
];

const driversFromDB = [
  { id: 1, name: 'Liana Cisneiros' },
  { id: 2, name: 'Fábio Frazão' },
  { id: 3, name: 'Anastácia Bicalho' },
  { id: 4, name: 'Samara Granjeiro' },
  { id: 5, name: 'Levi Teixeira' },
];
const driversFromModel = [
  { id: 1, name: 'Liana Cisneiros' },
  { id: 2, name: 'Fábio Frazão' },
  { id: 3, name: 'Anastácia Bicalho' },
  { id: 4, name: 'Samara Granjeiro' },
  { id: 5, name: 'Levi Teixeira' },
];

const driverFromDB = {
  id: 4,
  name: 'Samara Granjeiro',
};
const driverFromModel = {
  id: 4,
  name: 'Samara Granjeiro',
};

const driverIdFromDB = { insertId: 6 };
const driverIdFromModel = 6;

module.exports = {
  travelByStatusFromDB,
  travelByStatusFromModel,
  driversFromDB,
  driversFromModel,
  driverFromDB,
  driverFromModel,
  driverIdFromDB,
  driverIdFromModel,
};
