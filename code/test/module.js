//一个 Node.js 文件就是一个模块

//创建模块
var hello = require('./hello');
hello = new hello();
hello.setName('BYVoid');
hello.sayHello();
