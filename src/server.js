const http = require('http');

const port = 3000;
const router = require('./router');
const hostname = 'localhost';



const server = http.createServer(handler);
server.listen(port, function() {
  console.log(`Server running on http://${hostname}:${port}`);
});
