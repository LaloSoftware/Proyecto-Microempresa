const dbConnection = require('../../config/dbConnection.js');
module.exports = app => {
  const connection = dbConnection();
  app.get('/', (req,res) => {
    connection.query('SELECT * FROM ')
  })
}
