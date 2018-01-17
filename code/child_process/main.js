var cp = require('child_process');

var n = cp.fork('./child_process_test');
n.on('message', function(m) {
    console.log(m);
});

n.send({'message':'hello'});
