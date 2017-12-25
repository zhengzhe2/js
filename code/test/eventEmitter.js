//events 模块只提供了一个对象： events.EventEmitter。EventEmitter 的核心就是事件触发与事件监听器功能的封装。
//运行这段代码，1 秒后控制台输出了 'some_event 事件触发'。
//其原理是 event 对象注册了事件 some_event 的一个监听器，
//然后我们通过 setTimeout 在 1000 毫秒以后向 event 对象
//发送事件 some_event，此时会调用some_event 的监听器
var EventEmitter = require('events').EventEmitter;
var event = new EventEmitter();
event.on('some_event', function() {
    console.log('some_event 事件触发');
});

setTimeout(function() {
    event.emit('some_event');
}, 1000);

// EventEmitter 的每个事件由一个事件名和若干个参数组成，事件名是一个字符串，
// 通常表达一定的语义。对于每个事件，EventEmitter 支持 若干个事件监听器。
// 当事件触发时，注册到这个事件的事件监听器被依次调用，事件参数作为回调函数参数传递。

var events = require('events');
var emitter = new events.EventEmitter();
emitter.on('someEvent', function(arg1, arg2, arg3) {
    console.log('listener2', arg1, arg2, arg3);
});
emitter.on('someEvent', function(arg1, arg2) {
    console.log('listener1', arg1, arg2);
});

emitter.emit('someEvent',  'arg1 参数', 'arg2 参数', 'arg3 参数');

//实例
var events = require('events');
var eventEmitter = new events.EventEmitter();

var listener1 = function listener1() {
    console.log('监听器 listener1 执行。');
}

var listener2 = function listener2() {
    console.log('监听器 listener2 执行。');
}

eventEmitter.addListener('connection', listener1);

eventEmitter.on('connection', listener2);

var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventListeners + "个监听器监听连接事件。");

eventEmitter.emit('connection');

eventEmitter.removeListener('connection', listener1);
console.log("listener1  不再受监听。");

eventEmitter.emit('connection');

eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, "connection");
console.log(eventListeners + " 个监听器监听连接事件。");

console.log("程序执行完毕。");



//error
/*
    EventEmitter 定义了一个特殊的事件 error，它包含了错误的语义，我们在遇到 异常的时候通常会触发 error 事件。
当 error 被触发时，EventEmitter 规定如果没有响 应的监听器，Node.js 会把它当作异常，退出程序并输出错误信息。
我们一般要为会触发 error 事件的对象设置监听器，避免遇到错误后整个程序崩溃
*/

// emitter.emit('error');





