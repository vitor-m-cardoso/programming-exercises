'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Addresses', [
      {
        city: 'Belo Horizonte',
        street: 'Rua Flórida',
        number: 1080,
        employee_id: 1,
      },
      {
        city: 'São Paulo',
        street: 'Avenida Paulista',
        number: 1980,
        employee_id: 2,
      },
      {
        city: 'Fortaleza',
        street: 'Rua das Enseadas',
        number: 95,
        employee_id: 3,
      },
      {
        city: 'Belo Horizonte',
        street: 'Rua Andaluzita',
        number: 131,
        employee_id: 4,
      },
      {
        city: 'Belo Horizonte',
        street: 'Rua Vicente Alvarenga',
        number: 80,
        employee_id: 1,
      },
      {
        city: 'Curitiba',
        street: 'Rua Fria',
        number: 101,
        employee_id: 4,
      },
    ],
    {});
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('Addresses', null, {});
  }
};
