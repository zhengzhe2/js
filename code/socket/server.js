var net = require('net');

var options = {
    host:'127.0.0.1',
    port:6969,
};

//function
function setHost(host) {
    options.host = host;
}

function setPort(port) {
    options.port = port;
}

setPort(6666);

// 创建一个TCP服务器实例，调用listen函数开始监听指定端口
// 传入net.createServer()的回调函数将作为”connection“事件的处理函数
// 在每一个“connection”事件中，该回调函数接收到的socket对象是唯一的

var server = net.createServer(function(sock) {

    // 我们获得一个连接 - 该连接自动关联一个socket对象
    console.log('CONNECTED: ' + sock.remoteAddress + ':' + sock.remotePort);
    console.log(server.address());
    sock.setEncoding('utf8');

    server.getConnections(function(err, count) {
        console.log('The current number of connections: %d', count);
        if (count > 10) {
            server.close();
        }
    });

    //最大连接数为10
    server.maxConnections = 10;

    // 为这个socket实例添加一个"data"事件处理函数
    sock.on('data', function(data) {
        console.log('DATA ' + sock.remoteAddress + ': ' + data);
        // 回发该数据，客户端将收到来自服务端的数据
        sock.write(data);
    });

    // // 为这个socket实例添加一个"close"事件处理函数
    sock.on('close', function(data) {
        console.log('CLOSED: ' + sock.remoteAddress + ' ' + sock.remotePort);
    });

});

//监听
server.listen(options.port, options.host, function() {
    var address = server.address();
    console.log('Server listening on ' + address + ':' + options.port);
});  




