'use strict';

var http = require('http');
var map = require('through2-map');

var server = http.createServer(function (res, req) {
  var mapToUpper = function (chunk) {
    return chunk.toString().toUpperCase();
  };

  res.pipe(map(mapToUpper)).pipe(req);
});

var port = process.argv[2];

server.listen(port);



/*
  Answer

   var http = require('http')
   var map = require('through2-map')

   var server = http.createServer(function (req, res) {
     if (req.method != 'POST')
       return res.end('send me a POST\n')

     req.pipe(map(function (chunk) {
       return chunk.toString().toUpperCase()
     })).pipe(res)
   })

   server.listen(Number(process.argv[2]))
*/
