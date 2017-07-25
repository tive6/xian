var fs = require('fs');
var data = fs.readFileSync('01.txt');

console.log(data.toString());

console.log('程序结束')