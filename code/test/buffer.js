//Node.js Buffer(缓冲区)

/*
JavaScript 语言自身只有字符串数据类型，没有二进制数据类型。
但在处理像TCP流或文件流时，必须使用到二进制数据。因此在 Node.js中，
定义了一个 Buffer 类，该类用来创建一个专门存放二进制数据的缓存区。
在 Node.js 中，Buffer 类是随 Node 内核一起发布的核心库。Buffer 库为
Node.js 带来了一种存储原始数据的方法，可以让 Node.js 处理二进制数据，
每当需要在 Node.js 中处理I/O操作中移动的数据时，就有可能使用 Buffer 库。
原始数据存储在 Buffer 类的实例中。一个 Buffer 类似于一个整数数组，但它对应于 V8 堆内存之外的一块原始内存。
在v6.0之前创建Buffer对象直接使用new Buffer()构造函数来创建对象实例，
但是Buffer对内存的权限操作相比很大，可以直接捕获一些敏感信息，所以在v6.0以后，
官方文档里面建议使用 Buffer.from() 接口去创建Buffer对象。
 */

//Buffer 与字符编码
var buf = Buffer.from('runoob', 'ascii');

console.log(buf.toString('hex'));
console.log(buf.toString('base64'));
console.log(buf.toString('utf-8'));

//创建 Buffer 类
var buf1 = Buffer.alloc(10);
var buf2 = Buffer.alloc(10, 1);
var buf3 = Buffer.allocUnsafe(10); //可能包含旧数据,需要使用 fill() 或 write() 重写。
var buf4 = Buffer.from([1, 2, 3]);
var buf5 = Buffer.from('test');
var buf6 = Buffer.from('test', 'latin1');

console.log(buf1.length);

//写入缓冲区
/**
 * buf.write(string[, offset[, length]][, encoding])
 * 根据 encoding 的字符编码写入 string 到 buf 中的 offset 
 * 位置。 length 参数是写入的字节数。 如果 buf 没有足够的空间
 * 保存整个字符串，则只会写入 string 的一部分。 只部分解码的字符不会被写入。
 * 返回实际写入的大小。如果 buffer 空间不足， 则只会写入部分字符串。
 */

buf = Buffer.alloc(256);
var len = buf.write('www.runoob.com');

console.log('writed byte count:' + len);

//从缓冲区读取数据
/**
 * buf.toString([encoding[, start[, end]]])
 * 解码缓冲区数据并使用指定的编码返回字符串。
 */

buf = Buffer.alloc(26);
for (var i = 0; i < 26; ++i) {
    buf[i] = i + 97;
}

console.log(buf.toString('ascii'));
console.log(buf.toString('utf8', 0, 5));

//将 Buffer 转换为 JSON 对象

buf = Buffer.from('www.runoob.com');
var json = buf.toJSON(buf.toString('utf8'));
console.log(json);

//缓冲区合并

var buffer1 = Buffer.from(('菜鸟教程'));
var buffer2 = Buffer.from(('www.runoob.com'));
var buffer3 = Buffer.concat([buffer1, buffer2]);
console.log("buffer3 内容: " + buffer3.toString());
var buffer4 = Buffer.concat([buffer2, buffer1]);
console.log("buffer4 内容: " + buffer4.toString());

//缓冲区比较

var buffer5 = Buffer.from('ABC');
var buffer6 = Buffer.from('ABCD');
var result = buffer5.compare(buffer2);

if (result < 0) {
    console.log(buffer5 + " 在 " + buffer6 + "之前" + 'result = ' + result);
}
else if (result == 0) {
    console.log(buffer5 + " 与 " + buffer6 + "相同" + 'result = ' + result);
}
else {
    console.log(buffer5 + " 在 " + buffer6 + "之后" + 'result = ' + result);
}

//拷贝缓冲区
var buffer7 = Buffer.from('abcdefghijkl');
var buffer8 = Buffer.from('RUNOOB');

buffer8.copy(buffer7, 2);
console.log(buffer7.toString());

//缓冲区裁剪
var buffer9 = Buffer.from('runoob');
var buffer10 = buffer9.slice(0, 2);
console.log('buffer content:' + buffer10.toString());

//缓冲区长度
var buffer11 = Buffer.from('www.runoob.com');
console.log('buffer length:' + buffer11.length);


