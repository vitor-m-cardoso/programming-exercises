const connection = require('./connection');

const findById = async (driverId) => {
  const [[driver]] = await connection.execute('SELECT * FROM drivers WHERE id = ?', [driverId]);
  return driver;
};

const findAll = async () => {
  const query = 'SELECT * FROM drivers';
  const [drivers] = await connection.execute(query);
  return drivers;
};

const createDriver = async (name) => {
  const query = 'INSERT INTO drivers (name) VALUE (?)';
  const [{ insertId }] = await connection.execute(query, [name]);
  return insertId;
};

module.exports = {
  findById,
  findAll,
  createDriver,
};