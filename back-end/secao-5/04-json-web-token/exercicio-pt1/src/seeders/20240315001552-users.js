'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        email: 'teste@teste.com',
        fullName: 'Test account',
        password: 'testpass',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        email: 'admin@admin.com',
        fullName: 'Admin account',
        password: 'admin',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    ]);
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
