'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.createTable('Addresses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      city: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      street: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      number: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      employeeId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        // Configuram o que deve acontecer ao atualizar ou excluir um usuário
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        field: 'employee_id',
        references: {
          model: 'Employees',
          key: 'id',
        }
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Addresses');
  }
};
