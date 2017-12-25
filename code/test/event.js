// 引入 events 模块
var events = require('events');
// 创建 eventEmitter 对象
var eventEmitter = new events.EventEmitter();
// 创建事件处理程序
var connectHandler = function connected() {
    console.log('连接成功。');
    // 触发 data_received 事件 
    eventEmitter.emit('data_received');
}
// 绑定 connection 事件处理程序
eventEmitter.on('connection', connectHandler);
// 使用匿名函数绑定 data_received 事件
eventEmitter.on('data_received', function() {
    console.log('数据接收成功。');
});
// 触发 connection 事件 
eventEmitter.emit('connection');

var fs = require("fs");
//fs.readFile() 是异步函数用于读取文件
// 如果在读取文件过程中发生错误，错误 err 对象就会输出错误信息。
//如果没发生错误，readFile 跳过 err 对象的输出，文件内容就通过回调函数输出。
fs.readFile('input.txt', function(err, data) {
    if (err) {
        console.log(err.stack);
        return;
    }
    console.log(data.toString());
});

console.log("程序执行完毕。");
