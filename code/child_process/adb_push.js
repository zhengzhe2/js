var exec = require('child_process').exec;
var adb_push = exec('adb push /home/zhengzhe2/tst2/log /tmp/');

adb_push.stdout.on('data', function(data) {
    console.log('stdout:' + data);
});

adb_push.stderr.on('data', function(data) {
    console.log('stderr:' + data);
});

adb_push.on('exit', function(code) {
    console.log('exit :' + code);
});

adb_push.on('close', function(code) {
    console.log('close:' + code);
});
