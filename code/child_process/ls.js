const spawn = require('child_process').spawn;
var cmd = 'ls';
var arg1 = '-lh';
var arg2 = '/usr';

const ls = spawn(cmd, [arg1, arg2]);
ls.stdout.on('data', function(data) {
    console.log('输出:' + data);
    console.log('ls pid:' + ls.pid);
});

ls.stderr.on('data', function(data) {
    console.log('错误:' + data);
});

ls.on('close', function(code) {
    console.log('close 子进程退出码:' + code);
});

ls.on('exit', function(code) {
    console.log('exit 子进程退出码:' + code);
});