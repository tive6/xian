var fs = require('fs');
var data = fs.readFile('01.txt',(err,data)=>{
  if(err)return console.log(err);
  console.log(data.toString());
});

console.log('程序结束')