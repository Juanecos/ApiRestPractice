// var http = require('http');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.end('Hello World!');
// }).listen(8080);

var http = require('http'); //usar ek modulo incluido http para crear un servidor
var dt = require('./myfirstmodule'); // modulo exportado desde otro js

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'}); //header
    // res.write(req.url)
    // res.end(); //terminar la comunicacion
}).listen(8080);