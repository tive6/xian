/**
 * Created by badou on 2018/3/6.
 */
const express = require('express')


const router = require('./router/api.js')

const app = express()

app.use(express.static('./public'))

app.use('/api/v1', router);


let json = {
    ISOK:200,
    data:[
        {title:111,name:'a'},
        {title:222,name:'b'},
        {title:333,name:'c'},
        {title:444,name:'d'}
    ]
}

app.get('/api/:a', function (req, res) {
    res.send(`参数：${req.params.a}`)
    //res.json(json)
})


let host = '192.168.43.20'
let port = 3000
app.listen(port,host,()=>{
    console.log(`server listen on ${host}:${port}`)
})