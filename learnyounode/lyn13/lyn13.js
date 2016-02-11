'use strict';

var http = require('http');
var url = require('url');
var port = process.argv[2];

var parsetimePath = '/api/parsetime';
var unixtimePath = '/api/unixtime';

var server = http.createServer(function (req, res) {
  if (req.method === 'GET') {
    var parsed = url.parse(req.url, true);
    var date = new Date(parsed.query.iso);

    res.writeHead(200, { 'Content-Type': 'application/json' });

    if (parsed.pathname === parsetimePath) {
      console.log(date);
      res.write(JSON.stringify({
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds(),
      }));
    }
    else if (parsed.pathname === unixtimePath) {
      console.log(date);
      res.write(JSON.stringify({
        unixtime: Math.round(date.getTime()),
      }));
    }

    res.end();
  }
});

server.listen(port);



/*
  Answer

   var http = require('http')
   var url = require('url')

   function parsetime (time) {
     return {
       hour: time.getHours(),
       minute: time.getMinutes(),
       second: time.getSeconds()
     }
   }

   function unixtime (time) {
     return { unixtime : time.getTime() }
   }

   var server = http.createServer(function (req, res) {
     var parsedUrl = url.parse(req.url, true)
     var time = new Date(parsedUrl.query.iso)
     var result

     if (/^\/api\/parsetime/.test(req.url))
       result = parsetime(time)
     else if (/^\/api\/unixtime/.test(req.url))
       result = unixtime(time)

     if (result) {
       res.writeHead(200, { 'Content-Type': 'application/json' })
       res.end(JSON.stringify(result))
     } else {
       res.writeHead(404)
       res.end()
     }
   })
   server.listen(Number(process.argv[2]))
*/
