import { QueryInterface } from 'sequelize';

import bcrypt from 'bcryptjs';

const SALT_ROUNDS = process.env.BCRYPT_SALT_ROUNDS || 10;

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('users', [
      {
        email: 'user1@banco.com',
        password: bcrypt.hashSync('us3r1p4ssw0rd', SALT_ROUNDS),
        name: 'User 1',
      },
      {
        email: 'user2@banco.com',
        password: bcrypt.hashSync('us3r2p4ssw0rd', SALT_ROUNDS),
        name: 'User 2',
      },
    ], {});
  },
  
  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('users', {});
  }
};