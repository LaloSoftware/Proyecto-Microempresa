const app = require('./config/server');

require('./app/routes/news')(app);

// initializing server
app.listen(app.get('port'), () => {
  console.log('server on port', app.get('port'));
});
