require('dotenv').config();

const app = require('../src/app');
const http = require('http');

const port = parseInt(process.env.PORT || '3000');
app.set('port', port);

const server = http.createServer(app);

server.listen(port);

const onError = error => {
  throw error;
};

const onListening = () => {
  console.log('Listening on ' + port);
};

server.on('error', onError);
server.on('listening', onListening);

