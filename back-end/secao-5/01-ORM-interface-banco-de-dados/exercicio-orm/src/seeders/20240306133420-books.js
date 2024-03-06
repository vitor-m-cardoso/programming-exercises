'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.bulkInsert('Books', [
      {
        title: 'O Código Da Vinci',
        author: 'Dan Brown',
        pageQuantity: 1000,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        title: 'Anjos e Demônios',
        author: 'Dan Brown',
        pageQuantity: 763,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    queryInterface.bulkDelete('Books', null, {});
  }
};
