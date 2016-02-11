var strftime = require('strftime');
var net = require('net');

function serverCallback(socket) {
  const date = new Date();
/*
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
*/

  var time = strftime("%F %H:%M", date);

  socket.write(time + '\n');
  socket.end();
}

var server = net.createServer(serverCallback);
server.listen(process.argv[2]);



/*
  ** Answer **

   var net = require('net')

   function zeroFill(i) {
     return (i < 10 ? '0' : '') + i
   }

   function now () {
     var d = new Date()
     return d.getFullYear() + '-'
       + zeroFill(d.getMonth() + 1) + '-'
       + zeroFill(d.getDate()) + ' '
       + zeroFill(d.getHours()) + ':'
       + zeroFill(d.getMinutes())
   }

   var server = net.createServer(function (socket) {
     socket.end(now() + '\n')
   })

   server.listen(Number(process.argv[2]))
*/
