const travelFromDB = {
  id: 42,
  driver_id: null,
  starting_address: 'starting street',
  ending_address: 'end street',
  request_date: '2023-05-29T19:56:25.000Z',
  travel_status_id: 1,
  status: 'Aguardando Motorista',
  address: null,
  stop_order: null,
};

const travelFromModel = {
  id: 42,
  driverId: null,
  startingAddress: 'starting street',
  endingAddress: 'end street',
  requestDate: '2023-05-29T19:56:25.000Z',
  travelStatusId: 1,
  status: 'Aguardando Motorista',
  waypoints: [],
};

const travelWithWaypointsFromDB = [
  {
    id: 1,
    driver_id: null,
    starting_address: 'Rua dos caramelos',
    ending_address: 'Rua Mariana Alvarez Dutra',
    request_date: '2023-05-29T19:56:52.000Z',
    travel_status_id: 1,
    status: 'Aguardando Motorista',
    address: 'Rua Quatro de Março',
    stop_order: 1,
  },
  {
    id: 1,
    driver_id: null,
    starting_address: 'Rua dos caramelos',
    ending_address: 'Rua Mariana Alvarez Dutra',
    request_date: '2023-05-29T19:56:52.000Z',
    travel_status_id: 1,
    status: 'Aguardando Motorista',
    address: 'Rua Sete de Setembro',
    stop_order: 2,
  },
];

const travelWithWaypointsFromModel = {
  id: 1,
  driverId: null,
  startingAddress: 'Rua dos caramelos',
  endingAddress: 'Rua Mariana Alvarez Dutra',
  requestDate: '2023-05-29T19:56:52.000Z',
  travelStatusId: 1,
  status: 'Aguardando Motorista',
  waypoints: [
    { address: 'Rua Quatro de Março', stopOrder: 1 },
    { address: 'Rua Sete de Setembro', stopOrder: 2 },
  ],
};

module.exports = {
  travelFromDB,
  travelFromModel,
  travelWithWaypointsFromDB,
  travelWithWaypointsFromModel,
};
