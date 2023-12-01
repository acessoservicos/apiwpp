'use strict'

const http = require('http');
const app = require ('../src/app');

const server = http.createServer(app);
const port = 3007;
app.set('port', port);

server.listen(port);
console.log(`Servidor ativo na porta ${port}`);