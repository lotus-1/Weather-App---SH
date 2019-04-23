var fs = require("fs");
var path = require("path");

var handlerHome = (request, response) => {
  var filePath = path.join(__dirname, "..", "public", "index.html");
  fs.readFile(filePath, (error, file) => {
    if (error) {
      console.log(error);
      response.writeHead(500, { "Content-Type": "text/hmtl" });
      response.end("<h1> Sorry, there is Error</h1>");
    } else {
      response.writeHead(200, { "Content-Type": "text/html" });
      response.end(file);
    }
  });
};
const handlerPublic = (request, response, url) => {
  const extension = url.split(".")[1];
  const extensionTypes = {
    html: "text/html",
    js: "application/javascript",
    css: "text/css"
  };
  const filePath = path.join(__dirname, "..", url);
  fs.readFile(filePath, (error, file) => {
    if (error) {
      console.log(error);
      response.writeHead(404, { "Content-Type": "text/html" });
      response.end("<h1> So sorry, I can't find this file...</h1>");
    } else {
      response.writeHead(200, { "Content-Type": extensionTypes[extension] });
      response.end(file);
    }
  });
};

// const handlerSearch = (request, response) => {
//   const urlApi = 'https://api.openweathermap.org/data/2.5/weather?q=' + searchValue + '&appid=a49f14d796546be21979a6946c7b5826';
// }

module.exports = {
  handlerHome,
  handlerPublic
};
