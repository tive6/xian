var fs = require('fs');

var data = '铭——http://zmnaer.com';

var writerStream = fs.createWriteStream('output.txt');

writerStream.write(data,'UTF8');

writerStream.end();

writerStream.on('finish',()=>{
  console.log('SUCCESS');
})

writerStream.on('error',(err)=>{
  console.log(err.stack);
})

console.log('END');
