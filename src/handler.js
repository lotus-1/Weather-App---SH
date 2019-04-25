const fs = require('fs');
const path = require('path');
const url = require('url');
const querystring = require('querystring');
const request = require('request');

const handlerHome = (request, response) => {
  const filePath = path.join(__dirname, '..', 'public', 'index.html');
  fs.readFile(filePath, (error, file) => {
    if (error) {
      response.writeHead(500, { 'Content-Type': 'text/hmtl' });
      response.end('<h1> Sorry, there is Error</h1>');
    } else {
      response.writeHead(200, { 'Content-Type': 'text/html' });
      response.end(file);
    }
  });
};

const handlerPublic = (request, response) => {
  const url = request.url;
  console.log("inside handlerPublic");
  const extension = url.split('.')[1];
  const extensionTypes = {
    html: 'text/html',
    js: 'application/javascript',
    css: 'text/css',
    jpg: 'image/jpeg',
    png: 'images/bg.png'
  };
  const filePath = path.join(__dirname, '..', url);
  console.log(filePath);
  fs.readFile(filePath, (error, file) => {
    if (error) {
      response.writeHead(404, { 'Content-Type': 'text/html' });
      response.end("<h1> So sorry, I can't find this file...</h1>");
    } else {
      response.writeHead(200, { 'Content-Type': extensionTypes[extension] });
      response.end(file);
    }
  });
};

const handlerSearch = (reqt, res) => {
  const searchUrl = url.parse(reqt.url);
  const searchParse = searchUrl.query;
  const searchValue = querystring.parse(searchParse);
  const myUrlApi = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue.city}&appid=a49f14d796546be21979a6946c7b5826`;
  request(myUrlApi, (err, response, body) => {
    const parsedBody = JSON.parse(body);
    if (err) {
      response.writeHead(404, { 'Content-Type': 'text/html' });
      response.end("Sorry, it's error");
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(`${parsedBody.coord.lon}`);
    }
  });
};

module.exports = {
  handlerHome,
  handlerPublic,
  handlerSearch
};
