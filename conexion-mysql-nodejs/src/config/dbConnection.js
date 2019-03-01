const mysql = require('mysql');

modulo.exports = () => {
  return mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'toor',
    database: 'microempresa'
  });
}
