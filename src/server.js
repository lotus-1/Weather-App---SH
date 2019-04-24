const http = require('http');

const port = 3000;
const router = require('./router');

const server = http.createServer(router);
server.listen(port);

console.log(`Server is working in your ${port}`);
