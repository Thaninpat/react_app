const http = require('http');
const app = require('./App');
require('dotenv').config();
//const config = require('./config/default');
//const port = process.env.PORT || config.port;

const port = process.env.PORT || config.port;
const server = http.createServer(app);

server.listen(port);

console.log('Server running on port: http://localhost:' + port);