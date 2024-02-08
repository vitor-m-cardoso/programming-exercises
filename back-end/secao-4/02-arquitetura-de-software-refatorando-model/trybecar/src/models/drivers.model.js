const camelize = require('camelize');
const connection = require('./connection');
const { getFormattedColumnNames, getFormattedPlaceholders } = require('../utils/generateFormattedQuery');

const findAll = async () => {
  const [drivers] = await connection.execute('SELECT * FROM drivers');
  return drivers;
};

const findById = async (id) => {
  const [[driver]] = await connection.execute('SELECT * FROM drivers WHERE id = ?', [id]);
  return driver;
};

const findByStatus = async (travelStatusId) => {
  const [travels] = await connection.execute(`SELECT
    TR.id,
    TR.driver_id,
    TR.starting_address,
    TR.ending_address,
    TR.request_date,
    COUNT(WP.stop_order) AS amount_stop
  FROM travels AS TR LEFT JOIN waypoints AS WP 
    ON WP.travel_id = TR.id
  WHERE TR.travel_status_id = ?
  GROUP BY TR.id;`, [travelStatusId]);

  return camelize(travels);
};

const insert = async (driver) => {
  const columns = getFormattedColumnNames(driver);
  const placeholders = getFormattedPlaceholders(driver);
  const query = `INSERT INTO drivers (${columns}) VALUE (${placeholders})`;

  const [{ insertId }] = await connection.execute(query, [...Object.values(driver)]);
  return insertId;
};

module.exports = {
  findByStatus,
  findAll,
  findById,
  insert,
};
