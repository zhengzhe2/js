const spawn = require('child_process').spawn;
const ps = spawn('ps', ['ax']);
const grep = spawn('grep', ['ssh']);

ps.stdout.on('data', function(data) {
  grep.stdin.write(data);
    // console.log('stdout:' + data);
});

ps.stderr.on('data', function(data) {
  console.log('ps stderr:' + data);
});

ps.on('close', function(code) {
  if (code !== 0) {
    console.log('ps 进程退出码：' + code);
  }
  grep.stdin.end();
});

grep.stdout.on('data', function(data) {
  console.log(data.toString());
});

grep.stderr.on('data', function(data) {
  console.log('grep stderr:' + data);
});

grep.on('close', function(code) {
  if (code !== 0) {
    console.log('grep 进程退出码:' + code);
  }
});