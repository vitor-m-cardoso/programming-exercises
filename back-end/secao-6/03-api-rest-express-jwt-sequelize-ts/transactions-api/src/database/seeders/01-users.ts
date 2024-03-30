import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('users', [
      {
        email: 'first_user@banco.com',
        password: 'p4ss-user1',
        name: 'First User',
      },
      {
        email: 'second_user@banco.com',
        password: 'p4ss-user2',
        name: 'Second User',
      },
    ], {});
  },
  
  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('users', {});
  }
};
