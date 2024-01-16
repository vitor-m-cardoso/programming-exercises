const app = require('./app');
// const connection = require('./db/connection');

const PORT = process.env.PORT || '3001';

app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
  // o código abaixo é para testarmos a comunicação com o MySQL
  // const [result] = await connection.execute('SELECT 1');
  // if (result) {
  //   console.log('MySQL connection is OK!');
  // } else {
  //   console.log('Problem with MySQL connection, try again later!');
  // }
});