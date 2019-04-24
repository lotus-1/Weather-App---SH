const handler = require('./handler');


const router = (request, response) => {
  console.log("request.url is ", request.url);
  console.log(request.url.indexOf("/search"));
  if (request.url === '/') {
    handler.handlerHome(request, response);
  } else if (request.url.indexOf('/public') !== -1) {
    console.log("inside public");
    handler.handlerPublic(request, response, request.url);
  } else if (request.url.indexOf('/search') !== -1) {
    console.log('inside search 22');
    handler.handlerSearch(request, response);
  } else {
    console.log("error");
    response.writeHead(404, { 'Content-Type': 'text/html' });
    response.end('<h1>404 NOT FOUND </h1>');
  }
};


module.exports = router;
