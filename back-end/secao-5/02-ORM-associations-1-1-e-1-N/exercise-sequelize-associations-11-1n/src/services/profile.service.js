const { Profile } = require('../models');

const saveProfile = async ({ firstName, lastName, phone, accountId }) => {
  const savedProfile = await Profile.create({ firstName, lastName, phone, accountId });

  return savedProfile;
};

module.exports = {
  saveProfile,
};
