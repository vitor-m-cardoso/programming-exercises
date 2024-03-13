'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('books', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      releaseYear: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'release_year' // definimos explicitamente os campos com nomes compostos, por causa da semelhança entre camelCase e snake_case
      },
      totalPages: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'total_pages',
      }
    });
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable('books');
  }
};
