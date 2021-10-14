require('dotenv').config();
const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'vitor-cardoso',
  password: process.env.MYSQL_PASSWORD,
  database: 'model_example',
  port: 3306
});

module.exports = connection;
