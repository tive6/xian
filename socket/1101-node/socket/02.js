/**
 * Created by badou on 2017/11/1.
 */
var http = require('http');
var fs = require('fs');

var server = http.createServer((req,res)=>{
  if(req.url == '/'){
    fs.readFile('./index2.html',(err,data)=>{
      res.end(data);
    })
  }
});

/*
 * 创建一个io对象
 * 访问
 * http://127.0.0.1:3001/socket.io/socket.io.js
 * /socket.io/socket.io.js 只有此路由被拦截
 * 会出现 socket.io.js 源码
 * require('socket.io') 只能放在 创建 server 之后，才会出现源码
 * */
var io = require('socket.io')(server);

var n = 0;

/* 监听连接事件 */
io.on('connection',(socket)=>{
  console.log(`第${n++}个客户端连接了！`);
  // 画画
  socket.on('hua',(msg)=>{
    io.emit('hua',msg)
  })
});

server.listen(3000,'192.168.1.187',()=>{
  console.log('Port on 3000');
});
