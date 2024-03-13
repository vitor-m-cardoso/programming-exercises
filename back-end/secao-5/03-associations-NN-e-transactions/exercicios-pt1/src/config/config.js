require('dotenv').config();

const development = {
  username: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || 'password',
  database: process.env.MYSQL_DATABASE_DEV || 'db',
  host: process.env.MYSQL_HOST || 'localhost',
  dialect: 'mysql',
};
const test = {
  username: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || 'password',
  database: process.env.MYSQL_DATABASE_TEST || 'db',
  host: process.env.MYSQL_HOST || 'localhost',
  dialect: 'mysql',
};
const production = {
  username: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || 'password',
  database: process.env.MYSQL_DATABASE_PROD || 'db',
  host: process.env.MYSQL_HOST || 'localhost',
  dialect: 'mysql',
}

module.exports = {
  development,
  test,
  production,
};
