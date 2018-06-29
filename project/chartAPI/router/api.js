/**
 * Created by badou on 2018/3/6.
 */
const express = require('express');
//const bodyParser = require('body-parser')

const router = express.Router();

//router.use(bodyParser.urlencoded({extended:false}))
//router.use(bodyParser.json())

// 该路由使用的中间件
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});
// 1.获取物理机健康状况
router.get('/hostStatus', function(req, res) {
    res.json({
        ISOK:true,
        data:{
            'good': 23,
            'bad': 23,
            'bad_monthly': 323,
            'bad_until_now': 3423
        }
    });
});
// 2.获取集群资源总量
router.get('/:ct/resource', function(req, res){
    var n = parseInt(req.params.ct);
    var json = {
        ISOK:true,
        data:{
            'cluster': n,
            'nodes': 40,
            'cores': 345,
            'memory': 107374182400,
            'disk': 107374182400
        }
    }
    switch(n)
    {
        case 0:
            console.log(n)
            res.json(json)
            break;
        case 1:
            console.log(n)
            res.json(json)
            break;
        case 2:
            console.log(n)
            res.json(json)
            break;
        default:
            console.log('参数错误')
            res.json({
                ISOK:false,
                msg:'请求错误',
                data:null
            })
    }
});
// 3.获取集群资源使用情况
router.get('/:ct/resource/usage', function(req, res){
    let n = parseInt(req.params.ct)
    let num = parseInt(req.query.range) || 30
    console.log(num)
    let data = []
    for(let i=0;i<num;i++){
        let obj = {
            'timestamp': 123445678754,
            'cpu_percent': toNum2(Math.random(),2),
            'mem_used': Math.floor(Math.random()*107374182400),
            'disk_used': Math.floor(Math.random()*107374182400),
            'disk_input': toNum2(Math.random()*1000,1),
            'disk_output': toNum2(Math.random()*1000,1),
            'net_input': toNum2(Math.random()*1000,1),
            'net_output': toNum2(Math.random()*1000,1),
            'health': 0
        }
        data.push(obj)
    }
    let json = {
        ISOK:true,
        data:{
            'cluster': n,
            'length': num,
            'data': data
        }
    }
    switch(n)
    {
        case 0:
            console.log(n)
            res.json(json)
            break;
        case 1:
            console.log(n)
            res.json(json)
            break;
        case 2:
            console.log(n)
            res.json(json)
            break;
        default:
            console.log('参数错误')
            res.json({
                ISOK:false,
                msg:'请求错误',
                data:null
            })
    }
});
// 4.获取集群服务当前运行状态
router.get('/:ct/serviceStatus', function(req, res){
    let n = parseInt(req.params.ct);
    let json = {
        ISOK:true,
        data:{
            'cluster': n,
            'length': 3,
            'data': [
                {
                    'name': 'sqoop',
                    'status': 0
                },
                {
                    'name': 'sqoop',
                    'status': 1
                },
                {
                    'name': 'sqoop',
                    'status': 0
                }
            ]
        }
    }
    switch(n)
    {
        case 0:
            console.log(n)
            res.json(json)
            break;
        case 1:
            console.log(n)
            res.json(json)
            break;
        case 2:
            console.log(n)
            res.json(json)
            break;
        default:
            console.log('参数错误')
            res.json({
                ISOK:false,
                msg:'请求错误',
                data:null
            })
    }
});
// 5.获取集群服务运行状态历史
router.get('/:ct/serviceStatus/history', function(req, res){
    let n = parseInt(req.params.ct)
    let num = parseInt(req.query.range) || 30
    console.log(num)
    let data = []
    for(let i=0;i<num;i++){
        let obj = {
            'timestamp': new Date().getTime(),
            'service_name': 'flume'+Math.floor(Math.random()*10),
            'health': Math.random()>0.5?0:1
        }
        data.push(obj)
    }
    let json = {
        ISOK:true,
        data:{
            'cluster': n,
            'length': num,
            'data': data
        }
    }
    switch(n)
    {
        case 0:
            console.log(n)
            res.json(json)
            break;
        case 1:
            console.log(n)
            res.json(json)
            break;
        case 2:
            console.log(n)
            res.json(json)
            break;
        default:
            console.log('参数错误')
            res.json({
                ISOK:false,
                msg:'请求错误',
                data:null
            })
    }
});

// 6.获取集群数据状态
router.get('/:ct/dataStatus', function(req, res){
    let n = parseInt(req.params.ct)
    let num = 0
    let data = []
    if(n===0){
        num = parseInt(req.query.range)|| 24
        for(let i=0;i<num;i++){
            let obj = {
                'timestamp': new Date().getTime(),
                'volume': (Math.random()*1000).toFixed(2)
            }
            data.push(obj)
        }
    }else if(n===1){
        num = parseInt(req.query.range)|| 24
        for(let i=0;i<num;i++){
            let obj1 = {
                'timestamp': new Date().getTime(),
                'volume': (Math.random()*1000).toFixed(2)
            }
            data.push(obj1)
        }
    }else{
        num = parseInt(req.query.range)|| 1
        for(let i=0;i<num;i++){
            let obj2 = {
                'timestamp': new Date().getTime(),
                'volume_in': (Math.random()*1000).toFixed(2),
                'volume_out': (Math.random()*1000).toFixed(2)
            }
            data.push(obj2)
        }
    }

    let json = {
        ISOK:true,
        data:{
            'cluster': n,
            'length': num,
            'data': data
        }
    }
    switch(n)
    {
        case 0:
            console.log(n)
            res.json(json)
            break;
        case 1:
            console.log(n)
            res.json(json)
            break;
        case 2:
            console.log(n)
            res.json(json)
            break;
        default:
            console.log('参数错误')
            res.json({
                ISOK:false,
                msg:'请求错误',
                data:null
            })
    }
});

// 7.获取计算存储集群虚拟资源总量
router.get('/virtualResource', function(req, res) {
    res.json({
        ISOK:true,
        data:{
            'vcores': 1000,
            'vmems': 4920390,
            'hdfs_capacity': 2934802983
        }
    });
});

// 8.获取计算存储集群资源使用情况
router.get('/virtualResource/usage', function(req, res){
    let num = parseInt(req.query.range) || 30
    console.log(num)
    let data = []
    for(let i=0;i<num;i++){
        let obj = {
            'timestamp': 1293801928309,
            'vcore_used': toNum2(Math.random()*650),
            'vmem_used': toNum2(Math.random()*4020390),
            'hdfs_used': toNum2(Math.random()*1934802983)
        }
        data.push(obj)
    }
    let json = {
        ISOK:true,
        data:{
            'length': num,
            'data': data
        }
    }
    res.json(json)
});

// 9.获取用户使用资源情况
router.get('/users/statistic', function(req, res) {
    let num = parseInt(req.query.range) || 13
    console.log(num)
    let data = []
    for(let i=0;i<num;i++){
        let obj = {
            'user': 'anjian'+Math.floor(Math.random()*20),
            'vcore_seconds': Math.floor(Math.random()*1000),
            'mem_used': Math.floor(Math.random()*10000),
            'during_time': Math.floor(Math.random()*100000),
            'jobs': Math.floor(Math.random()*1000)
        }
        data.push(obj)
    }
    let json = {
        ISOK:true,
        data:{
            'timestamp': 12894810982309,
            'length': num,
            'data': data
        }
    }
    res.json(json)
});

function toNum2(val,n){
    return parseFloat((val).toFixed(n))
}


module.exports = router;