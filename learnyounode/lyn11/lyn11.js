'use strict';

var http = require('http');
var fs = require('fs');

var port = process.argv[2];
var fileLocation = process.argv[3];

var server = http.createServer(function (req, res) {
  // request handling logic.
  if (req) {
    fs.createReadStream(fileLocation).pipe(res);
  }
});

server.listen(port);


/*
  Answer


   var http = require('http')
   var fs = require('fs')

   var server = http.createServer(function (req, res) {
     res.writeHead(200, { 'content-type': 'text/plain' })

     fs.createReadStream(process.argv[3]).pipe(res)
   })

   server.listen(Number(process.argv[2]))
*/
