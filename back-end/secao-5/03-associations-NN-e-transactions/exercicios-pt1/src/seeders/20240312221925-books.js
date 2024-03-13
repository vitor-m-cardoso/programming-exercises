'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('books', [
      { name: 'O que o sol faz com as flores', release_year: 2017, total_pages: 159 },
      { name: 'Ensinando a transgredir: A educação como prática da liberdade', release_year: 2017, total_pages: 288 },
      { name: 'Cem Anos de Solidão', release_year: 1967, total_pages: 419 },
      { name: 'Primeiros Pesadelos', release_year: 2022, total_pages: 300 },
    ], {});
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('books', null, {});
  }
};
