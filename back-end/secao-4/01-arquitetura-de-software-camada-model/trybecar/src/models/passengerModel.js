const camelize = require('camelize');
const conn = require('./connection');

const findAll = async () => {
  const [passengers] = await conn.execute('SELECT * FROM passengers');
  return camelize(passengers);
};

const findById = async (passengerId) => {
  const [[passenger]] = await conn.execute('SELECT * FROM passengers WHERE id = ?', [passengerId]);
  return camelize(passenger);
};

const deletePassenger = async (passengerId) => {
  const [result] = await conn
  .execute('DELETE FROM passengers WHERE id = ?', [passengerId]);
  return result;
};

module.exports = {
  findAll,
  findById,
  deletePassenger,
};
