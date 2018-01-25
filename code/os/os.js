var os = require("os");

//CPU的字节序
console.log('endianness : ' + os.endianness());    //BE or LE
console.log('tmpdir : ' + os.tmpdir());
console.log('hostname : ' + os.hostname());
console.log('osname : ' + os.type());
console.log('osname : ' + os.platform());
console.log('os arch : ' + os.arch());
console.log('os release : ' + os.release());
console.log('os uptime : ' + os.uptime());
console.log('os loadavg : ' + os.loadavg());
console.log('os totalmem : ' + os.totalmem());
console.log('os freemem : ' + os.freemem());
console.log('os cpus : ' + os.cpus());
console.log('os netwrokInterfaces : ' + os.networkInterfaces());