const connection = require('./connection');
const {
  getFormattedColumnNames,
  getFormattedPlaceholders,
} = require('../utils/generateFormattedQuery');

const findAll = async () => {
  const [drivers] = await connection.execute('SELECT * FROM drivers');
  return drivers;
};

const findById = async (driverId) => {
  const query = 'SELECT * FROM drivers WHERE id = ?';
  const [[driver]] = await connection.execute(query, [driverId]);
  return driver;
};

const createDriver = async (data) => {
  const { ...driverData } = data;
  const columns = getFormattedColumnNames(driverData);
  const placeholders = getFormattedPlaceholders(driverData);
  const query = `INSERT INTO drivers (${columns}) VALUE (${placeholders});`;
  const [{ insertId }] = await connection.execute(query, [...Object.values(driverData)]);

  return insertId;
};

module.exports = {
  findAll,
  findById,
  createDriver,
};
