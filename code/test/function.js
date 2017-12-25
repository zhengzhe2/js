//Node.js 函数
//在JavaScript中，一个函数可以作为另一个函数的参数。
//我们可以先定义一个函数，然后传递，也可以在传递参数的地方直接定义函数。

function say(word) {
    console.log(word);
};

function execute(someFunction, value) {
    someFunction(value);
}

execute(say, 'Hello');

//匿名函数
//我们可以把一个函数作为变量传递。但是我们不一定要绕这个"先定义，再传递"的圈子，
//我们可以直接在另一个函数的括号中定义和传递这个函数

function execute_1(someFunction, value) {
    someFunction(value);
};

execute_1(function(word){
    console.log(word);
}, 'Hello');




//--------------------------------------------------------------------------
var http = require('http');
http.createServer(function(request, response) {
    response.writeHead(200, {'Content-Type':'text/plain'});
    response.write('Hello World');
    response.end();
}).listen(8888);



//--------------------------------------------------------------------------
var http = require("http");

function onRequest(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
}

http.createServer(onRequest).listen(8888);