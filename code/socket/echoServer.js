var net = require('net');
// var server = net.createServer(function(sock) {
//     console.log('client connected, address - ', sock.remoteAddress, ' port - ', sock.remotePort);
//     sock.setEncoding('utf-8');
//     sock.on('data', function(data) {
//         console.log('got data from client - ', data);
//         sock.write(data);
//     });
// });

var server = net.createServer();

server.on('connection', function(sock) {
  console.log('client connected, address -  ', sock.remoteAddress, ' port - ', sock.remotePort);
  sock.setEncoding('utf8');
  sock.on('data', function(data){
    console.log('got data from client - ', data);
    sock.write(data);
  });
  sock.on('end', function() {
    console.log('client disconnected');    
  });
    
  sock.on('error', function() {
    console.log('socket error - ', err);    
  });
});


server.maxConnections = 10;
server.listen(7, function() {
    console.log('echo server bound at port - 7');
});
