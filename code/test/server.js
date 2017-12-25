//server.js

//1.使用 require 指令来载入 http 模块，并将实例化的 HTTP 赋值给变量 http
// var http = require("http");

//2.创建服务器

// http.createServer(function (request, response) {
    // 发送 HTTP 头部 
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    // response.writeHead(200, {'Content-Type':'text/plain'});
    // 发送响应数据 "Hello World"
    // response.end('Hello World\n');
// }).listen(8888);

// console.log('Server running at http://127.0.0.1:8888/');




// TCP/IP

var net = require('net');

var server = net.createServer(function(connection) {
    console.log('client connected');
    connection.on('end', function() {
        console.log('client close connected');    
    });
    connection.write('Hello World!\r\n');
    connection.pipe(connection);
});

server.listen(8080, function() {
    console.log('server is listening');    
});