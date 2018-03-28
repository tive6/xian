/**
 * Created by zm on 2018/3/17.
 */
const express = require('express')
var bodyParser = require('body-parser');
const fs = require('fs')

const app = express()
app.use(express.static('./public'))

// see https://github.com/expressjs/body-parser
// 添加 body-parser 中间件就可以了
app.use(bodyParser.json({limit:'10mb'}));
app.use(bodyParser.urlencoded({limit:'10mb',extended:true}));
app.use(bodyParser.json())

app.post('/upload', function (req, res) {
    //接收前台POST过来的base64
    var path = 'public/'+ Date.now() +'.png';//从app.js级开始找--在我的项目工程里是这样的
    var base64Data = req.body.base64.replace(/\s/g,"+");
    var base64 = base64Data.replace(/^data:image\/\w+;base64,/, "");//去掉图片base64码前面部分data:image/png;base64
    var dataBuffer = new Buffer(base64, 'base64'); //把base64码转成buffer对象，
    fs.writeFile(path,dataBuffer,function(err){//用fs写入文件
        if(err){
            console.log(err);
        }else{
            res.send('写入成功！');
        }
    })
})

let host = '0.0.0.0'
let port = 3001
app.listen(port,host,()=>{
    console.log(`server listen on ${host}:${port}`)
})