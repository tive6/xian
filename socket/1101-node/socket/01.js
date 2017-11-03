/**
 * Created by badou on 2017/11/1.
 */
var http = require('http');
var fs = require('fs');

var server = http.createServer((req,res)=>{
  if(req.url == '/'){
    fs.readFile('./index.html',(err,data)=>{
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

/* 监听连接事件 */
io.on('connection',(socket)=>{
  console.log('1个客户端连接了');
  socket.on('Tom',(msg)=>{
    console.log(`服务器得到一个提问：${msg}`);
    /* 只给向服务器发送消息的客户端发送消息 */
    //socket.emit('Zmer','I am ok !');
    /*
     * 广播
     * 会给每个连接服务的客户端发送消息
     * */
    io.emit('Zmer',msg);
  })
});

server.listen(3001,'127.0.0.1',()=>{
  console.log('Port on 3001');
});
