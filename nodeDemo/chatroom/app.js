/**
 * Created by badou on 2017/11/1.
 */
var express = require('express');

var app = express();
// 公式
var http = require('http').Server(app);
var io = require('socket.io')(http);

// session公式
var session = require('express-session');
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}));

// 设置模板引擎
app.set('view engine','ejs');
//静态服务
app.use(express.static("./public"));

var alluser = [];
// 中间件
app.get('/',(req,res,next)=>{
  res.render('index');
});

app.get('/check',(req,res,next)=>{
  var username = req.query.username;
  if(!username){
    res.send('必须填写用户名！');
    return ;
  }
  if(alluser.indexOf(username) != -1){
    res.send('用户名已经存在！');
    return ;
  }
  alluser.push(username);
  req.session.username = username;
  res.redirect('/chat');
});

app.get('/chat',(req,res,next)=>{
  if(!req.session.username){
    res.redirect('/');
    return;
  }
  res.render('chat',{
    'username':req.session.username
  });
});

io.on('connection',(socket)=>{
  console.log('一个客户端连接了');
  console.log(socket.handshake.headers.host);
  socket.on('lt',(msg)=>{
    console.log(msg);
    io.emit('lt',msg)
  })
});

// 监听
http.listen(3000,()=>{
  console.log('port on 3000');
});