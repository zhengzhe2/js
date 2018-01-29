var path = require('path');

// 格式化路径
console.log('normalization : ' + path.normalize('/test/test1//2slashes/1slash/tab/..'));
//path.js
console.log('basename : ' + path.basename('/home/zhengzhe/Project/js/code/path/path.js'));
///home/zhengzhe/Project/js/code/path/
console.log('dirname : ' + path.dirname('/home/zhengzhe/Project/js/code/path/path.js'));
//.js
console.log('extname : ' + path.extname('/home/zhengzhe/Project/js/code/path/path.js'));

console.log(process.env.PATH);
console.log(process.env.PATH.split(path.delimiter));

path.format({
    root: '/ignored',
    dir: '/home/user/dir',
    base: 'file.txt'
  });

if (path.isAbsolute('./path.js')) {
    console.log('true');
}
else {
    console.log('false');
}
//*
var join = path.join('/path.js', 'de', '..','Project');
console.log(join);
//*
var parse = path.parse('/home/zhengzhe/Project/js/code/path/path.js');
console.log('root : ' +  parse.root);   //root : /
console.log('base : ' +  parse.base);   //base : path.js
console.log('ext : ' +  parse.ext);     //ext : .js
console.log('dir : ' +  parse.dir);     //dir : /home/zhengzhe/Project/js/code/path
console.log('name : ' +  parse.name);   //name : path

var relative = path.relative('/data/orandea/test/aaa', '/data/orandea/impl/bbb');
console.log(relative);

//*
var resolve = path.resolve('../../');
console.log(resolve);
