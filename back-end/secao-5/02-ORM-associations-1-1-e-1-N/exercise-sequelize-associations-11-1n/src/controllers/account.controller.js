const accountService = require('../services/account.service');
const profileService = require('../services/profile.service');

const getById = async (req, res) => {
  const { id } = req.params;
  try {
    const account = await accountService.getById(id);

    if (!account) {
      return res.status(404).json({ message: 'Account not found' });
    }
    return res.status(200).json(account);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

const getAccountById = async (req, res) => {
  const { id } = req.params;
  try {
    const account = await accountService.getAccountById(id);

    if (!account) {
      return res.status(404).json({ message: 'Account not found' });
    }
    return res.status(200).json(account);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

const createAccount = async (req, res) => {
  const accountData = req.body;
  try {
    const accountId = await accountService.createAccount(accountData);
    await profileService.saveProfile({ accountId, ...accountData });

    return res.status(201).json({ message: 'Account created successfully!' });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  getById,
  getAccountById,
  createAccount,
};
