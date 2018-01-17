var spawnSync = require('child_process').spawnSync;

var cmd = 'adb';
var arg1 = 'pull';
var arg2 = '/tmp/screenshot';
var arg3 = '/home/zhengzhe2/tst/';

var adb_pull = spawnSync(cmd, [arg1, arg2, arg3]);
console.log(adb_pull.toString());