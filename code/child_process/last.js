var exec = require('child_process').exec;
var last = exec('last | wc -l');

last.stdout.on('data', function(data) {
    console.log('stdout :' + data);
});


last.stderr.on('data', function(data) {
    console.log('stderr :' + data);
});


last.on('exit', function(code) {
    console.log('exit :' + code);
});