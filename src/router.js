const handler = require('./handler');


const router = (request, response) => {
  if (request.url === '/') {
    handler.handlerHome(request, response);
  } else if (request.url.indexOf('/public') !== -1) {
    handler.handlerPublic(request, response, request.url);
  } else if (request.url.indexOf('/search') !== -1) {
    handler.handlerSearch(request, response);
  } else {
    response.writeHead(404, { 'Content-Type': 'text/html' });
    response.end('<h1>404 NOT FOUND </h1>');
  }
};


module.exports = router;
