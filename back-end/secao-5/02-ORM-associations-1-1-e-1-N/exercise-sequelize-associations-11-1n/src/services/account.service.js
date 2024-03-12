const { Account, Profile } = require('../models');

const getById = async (id) => {
  const account = await Account.findOne({
    where: { id },
    include: [
      { model: Profile, as: 'profile' },
    ],
    attributes: { exclude: ['password'] },
  });

  return account;
};

const getAccountByEmail = async (email) => {
  const account = await Account.findOne({ where: { email } });

  return account;
};

const getAccountById = async (id) => {
  const account = await Account.findOne({
    where: { id },
    attributes: { exclude: ['password'] },
  });

  return account;
};

const createAccount = async ({ email, password }) => {
  const newAccount = await Account.create({ email, password });

  return newAccount.id;
};

module.exports = {
  getById,
  getAccountById,
  createAccount,
  getAccountByEmail,
};
