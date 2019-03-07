const dbConnection = require('../../config/dbConnection.js');
module.exports = app => {
  const connection = dbConnection();
  app.get('/', (req,res) => {
    connection.query('SELECT * FROM punto_venta', (err, result) => {
        console.log(result);
        res.render('punto_venta/punto_venta', {
          punto_venta: result
        });
    });
  });

  app.post('/punto_venta', (req,res) => {
    // ejemplo
    const {id_producto, fecha} = req.body;
    connection.query('INSERT INTO apartado SET?', {
      id_producto,
      fecha
    }, (err, result) => {
      res.redirect('/');
    });
  });
}
