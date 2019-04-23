var http = require("http");
var port = 3000;
var router = require("./router");

var server = http.createServer(router);
server.listen(port);

console.log(`Server is working in your ${port}`);
