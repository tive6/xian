/**
 * Created by zm on 2018/3/11.
 */
//  var path = 'http://192.168.1.175:3000'
Vue.prototype.bytesToGB = function(val) {
    return (parseInt(val) / 1073741824).toFixed(3)
}
Vue.prototype.toNum2 = function(num,n){
    return parseFloat((num).toFixed(n))
}

const oneMinutes = 60000
const oneHours = 3600000
const oneDays = 86400000

var vm = new Vue({
    el: '.ad-container',
    data: {
        timeType:{
            twoS: 2000,
            oneM: 60000,
            oneH: 3600000,
            oneD: 86400000
        },
        uses:[
            {
                mem_useN:0,
                mem_useD:0,
                disk_useN:0,
                disk_useD:0
            },
            {
                mem_useN:0,
                mem_useD:0,
                disk_useN:0,
                disk_useD:0
            },
            {
                mem_useN:0,
                mem_useD:0,
                disk_useN:0,
                disk_useD:0
            }
        ],
        lastData8:{
            vcores: 0,
            vmems: 0,
            hdfs_capacity: 0
        },
        lastData3: [
            {
                cpu_percent: 0,
                diskSum: 0,
                netSum: 0
            }
        ],
        data1: {
            good: 0,
            bad: 0,
            bad_monthly: 0,
            bad_until_now: 0
        },
        data2: [
            {
                cluster: 0,
                nodes: 6,
                cores: 6,
                memory: 6,
                disk: 6
            },
            {
                cluster: 0,
                nodes: 6,
                cores: 6,
                memory: 6,
                disk: 6
            },
            {
                cluster: 0,
                nodes: 6,
                cores: 6,
                memory: 6,
                disk: 6
            }
        ],
        data3: [
            [
                {
                    timestamp: 123445678754,
                    cpu_percent: 0.4,
                    mem_used: 123849,
                    disk_used: 32842812,
                    disk_input: 3829.2,
                    disk_output: 1382.1,
                    net_input: 32901.4,
                    net_output: 4930.8,
                    health: 0
                }
            ],
            [
                {
                    timestamp: 123445678754,
                    cpu_percent: 0.3,
                    mem_used: 123849,
                    disk_used: 32842812,
                    disk_input: 3829.2,
                    disk_output: 1382.1,
                    net_input: 32901.4,
                    net_output: 4930.8,
                    health: 0
                }
            ],
            [
                {
                    timestamp: 123445678754,
                    cpu_percent: 0.3,
                    mem_used: 123849,
                    disk_used: 32842812,
                    disk_input: 3829.2,
                    disk_output: 1382.1,
                    net_input: 32901.4,
                    net_output: 4930.8,
                    health: 0
                }
            ]
        ],
        data4: [],
        data5: [
            [
                {
                    timestamp: 123821312499,
                    service_name: 'flume',
                    health: 0
                }
            ],
            [
                {
                    timestamp: 123821312499,
                    service_name: 'flume',
                    health: 0
                }
            ],
            [
                {
                    timestamp: 123821312499,
                    service_name: 'flume',
                    health: 0
                }
            ]
        ],
        data6: [
            [
                {
                    timestamp: 123908234082,
                    volume: 2384.43
                }
            ],
            [
                {
                    timestamp: 123908234082,
                    volume: 2384.43
                }
            ],
            [
                {
                    timestamp: 123908234082,
                    volume_in: 2384.43,
                    volume_out: 2394.3
                }
            ]
        ],
        data7: {
            vcores: 0,
            vmems: 0,
            hdfs_capacity: 0
        },
        data8: {
            timestamp: Date.now(),
            vcore_used: 10,
            vmem_used: 10005,
            hdfs_used: 3200941
        },
        data9: [
            {
                user: 'anjian',
                vcore_seconds: 232342,
                mem_used: 3293204,
                during_time: 23489123,
                jobs: 12391
            }
        ]
    },
    filters:{
        bytesToGB(val) {
            return (parseInt(val) / 1073741824).toFixed(3)
        },
        dateFormat(ms,opts){
            if(typeof ms == 'number'){
                ms = new Date(ms)
            }
            var lastDate = ''
            opts.indexOf('YY')!=-1 && (lastDate += ms.getFullYear()+'年')
            opts.indexOf('MM')!=-1 && (lastDate += ms.getMonth()+1+'月')
            opts.indexOf('DD')!=-1 && (lastDate += ms.getDate()+'日 ')
            opts.indexOf('HH')!=-1 && (lastDate += ms.getHours()+'时')
            opts.indexOf('mm')!=-1 && (lastDate += ms.getMinutes()+'分')
            opts.indexOf('ss')!=-1 && (lastDate += ms.getSeconds()+'秒')
            return lastDate
        }
    },
    computed: {},
    beforeCreate:function(){
        this.$nextTick(function () {
            var that = this
            this.getJkzk() // 1
            //this.getJqzl(0)
            //this.getJqzl(1)
            //this.getJqzl(2)
            this.getData2()
            var ln = 0
            while(ln<3){
                this.getData3(ln,4)
                ln ++
            }
            this.getData5() // 5
            setInterval(function(){
                that.getData5() // 5
            },oneMinutes)
            console.log(this.getData6(0,6)) // 6
            this.getJqzyzl() // 7

            this.getJqzysy(1)// 8
            setInterval(function(){
                that.getJqzysy(1)// 8
            },oneMinutes)

            //this.getJquse() // 9
            var ind = 0;
            var arr9 = ['vcore_seconds','mem_used','jobs','during_time']
            that.getJquse(function(res){
                that.arrSort(res,arr9[0])
            })
            setInterval(function(){
                that.getJquse(function(res){
                    ind ++
                    if(ind>=arr9.length){
                        ind = 0
                    }
                    //console.log(arr9[ind])
                    that.arrSort(res,arr9[ind])
                })
                //},5000)
            },oneDays)
        })
    },
    created: function () {
        this.$nextTick(function () {
            //this.getJkzk()
        })
    },
    mounted: function () {
        this.$nextTick(function () {
            var that = this
            /*
             * ct：cluster
             0->采集集群
             1->消息队列集群
             2->计算存储集群
             * */
            /*
             * n：返回数据长度
             * */
            /*this.getJkzk()
             this.getJqzl(2)
             this.getJqsy(2,5)
             this.getJqzt(1)
             this.getJqls(1,10)
             this.getJqsjzt(2,5)
             this.getJqzyzl()
             this.getJqzysy(5)
             this.getJquse()*/
//        this.getJqzl(0)
//      this.getData2()
            /*opts={
             ct:0,
             n:0,
             fn:function(){}
             }*/
        })
    },
    methods: {
        arrSort(arr,attr){
            arr.sort(function(a,b){
                return a[attr] - b[attr];
            })
        },
        fn_bytesToGB: function(val) {
            return (parseInt(val) / 1073741824).toFixed(3)
        },
        // 计算内存、磁盘的未使用量
        getUses:function(){
            var len = 0
            while (len < 3){
                this.uses[len].mem_useN = this.fn_bytesToGB(this.data2[len].memory - this.data3[len][0].mem_used)
                this.uses[len].mem_useD = this.fn_bytesToGB(this.data3[len][0].mem_used)
                this.uses[len].disk_useN = this.fn_bytesToGB(this.data2[len].disk - this.data3[len][0].disk_used)
                this.uses[len].disk_useD = this.fn_bytesToGB(this.data3[len][0].disk_used)
                len++
            }
        },
        // 分别获取资源总量
        getData2: function (){
            var len = 0
            while (len < 3){
                this.getJqzl(len)
                len++
            }
            //console.log(this.data2)
        },
        getData3: function (index,n){
            this.getJqsy(index,n)
            //console.log(this.data3)
            return this.data3[index]
        },
        getData5: function (){
            var len = 0
            while (len < 3){
                this.getJqls(len,6)
                len++
            }
            //console.log(this.data5)
        },
        getData6: function (index,n){
            var len = 0
            while (len < 3){
                this.getJqsjzt(len,n)
                len++
            }
            //console.log(this.data6)
            return this.data6[index]
        },
        getData8(){
            this.lastData8.vcores = (this.data8.vcore_used / this.data7.vcores).toFixed(3) * 100
            this.lastData8.vmems = (this.data8.vmem_used / this.data7.vmems).toFixed(3) * 100
            this.lastData8.hdfs_capacity = (this.data8.hdfs_used / this.data7.hdfs_capacity).toFixed(3) * 100
        },
        // this.$http.get('/someUrl', [options]).then(function(response){}
        getJkzk: function () { // 1.健康状况
            var that = this
            this.$http.get('/api/v1/hostStatus').
                then(function (res) {
                    that.data1 = res.body.data
                    //console.log(that.data1)
                }, function (res) {
                    console.log(res.body.msg)
                    // 响应错误回调
                });
        },
        getJqzl: function (ct) { // 2.集群资源总量
            var that = this
            this.$http.get('/api/v1/' + ct + '/resource').
                then(function (res) {
                    //console.log(res.body)
                    that.data2.splice(ct,1,res.body.data)
                }, function (res) {
                    console.log(res.body.msg)
                    // 响应错误回调
                });
        },
        getJqsy: function (ct, n) { // 3.集群资源使用情况
            var that = this
            this.$http.get('/api/v1/' + ct + '/resource/usage?range=' + n).
                then(function (res) {
                    //console.log(res.body)
                    that.data3.splice(ct,1,res.body.data.data)
                    this.getUses()
                }, function (res) {
                    console.log(res.body.msg)
                    // 响应错误回调
                });
        },
        getJqzt: function (ct) { // 4.集群服务当前运行状态
            var that = this
            this.$http.get('/api/v1/' + ct + '/serviceStatus').
                then(function (res) {
                    console.log(res.body)
                }, function (res) {
                    console.log(res.body.msg)
                    // 响应错误回调
                });
        },
        getJqls: function (ct, n) { // 5.获取集群服务运行状态历史
            var that = this
            this.$http.get('/api/v1/' + ct + '/serviceStatus/history?range=' + n).
                then(function (res) {
                    //console.log(res.body)
                    that.data5.splice(ct,1,res.body.data.data)
                }, function (res) {
                    console.log(res.body.msg)
                    // 响应错误回调
                });
        },
        getJqsjzt: function (ct, n) { // 6.获取集群数据状态
            var that = this
            this.$http.get('/api/v1/' + ct + '/dataStatus?range=' + n).
                then(function (res) {
                    //console.log(res.body)
                    that.data6.splice(ct,1,res.body.data.data)
                }, function (res) {
                    console.log(res.body.msg)
                    // 响应错误回调
                });
        },
        getJqzyzl: function () { // 7.获取计算存储集群虚拟资源总量
            var that = this
            this.$http.get('/api/v1/virtualResource').
                then(function (res) {
                    //console.log(res.body)
                    that.data7 = res.body.data
                }, function (res) {
                    console.log(res.body.msg)
                    // 响应错误回调
                });
        },
        getJqzysy: function (n) { // 8.获取计算存储集群资源使用情况
            var that = this
            this.$http.get('/api/v1/virtualResource/usage?range=' + n).
                then(function (res) {
                    //console.log(res.body)
                    that.data8 = res.body.data.data[0]
                    console.log(that.data8)
                    that.getData8()
                }, function (res) {
                    console.log(res.body.msg)
                    // 响应错误回调
                });
        },
        getJquse: function (cb) { // 9.获取用户使用资源情况
            var that = this
            this.$http.get('/api/v1/users/statistic').
                then(function (res) {
                    //console.log(res.body)
                    that.data9 = res.body.data.data
                    //that.arrSort(that.data9,'vcore_seconds')
                    cb(that.data9)
                }, function (res) {
                    console.log(res.body.msg)
                    // 响应错误回调
                });
        }
    }
})

setTimeout(function(){
    var vmData = vm.$data

    var option1 = {
        //color: ['#3FC3EC','#C48743','#FFFF00'],
        grid: {
            x: 30,
            y: 50,
            x2: 40,
            y2: 30
        },
        /*tooltip: {
            trigger: 'axis'
        },*/
        legend: {
            data: ['磁盘IO', '网络IO', 'CPU使用率'],
            y: 10,
            textStyle: {
                color: '#fff'
            }
        },
        xAxis: [
            {
                type: 'category',
                position: 'bottom',
//            splitNumber: 5,
                boundaryGap: false, // 从0开始绘制
                axisLine: {    // 轴线
                    show: true,
                    lineStyle: {
                        color: '#2F95BF',
                        type: 'solid',
                        width: 0
                    }
                },
                axisTick: {    // 轴标记
                    show: true,
                    length: 3,
                    lineStyle: {
                        color: '#2F95BF',
                        type: 'solid',
                        width: 1
                    }
                },
                axisLabel: {
                    show: true,
                    interval: 'auto',    // {number}
                    margin: 10,
                    formatter: '{value}',
                    textStyle: {
                        color: '#2F95BF',
                        fontFamily: 'verdana',
                        fontSize: 10,
                        fontStyle: 'normal'
                    }
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        type: 'none'
                    }
                },
                data: (function (){
                    var now = new Date();
                    var res = [];
                    var len = 4;
                    while (len--) {
                        res.unshift(now.toLocaleTimeString().replace(/^\D*/,'').slice(0,8));
                        now = new Date(now - oneMinutes);
                    }
                    return res;
                })()
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '%',
                splitNumber: 5,
                position: 'left',
                max: 100,
                axisLine: {    // 轴线
                    show: true,
                    lineStyle: {
                        color: '#2F95BF',
                        width: 0
                    }
                },
                axisTick: {    // 轴标记
                    show: true,
                    length: 3,
                    lineStyle: {
                        color: '#2F95BF',
                        type: 'solid',
                        width: 1
                    }
                },
                axisLabel: {
                    show: true,
                    interval: 'auto',    // {number}
                    margin: 5,
                    formatter: '{value}',    // Template formatter!
                    textStyle: {
                        color: '#2F95BF',
                        fontFamily: 'verdana',
                        fontSize: 10,
                        fontStyle: 'normal'
                    }
                }
            },
            {
                type: 'value',
                name: 'Byte/s',
                splitNumber: 5,
                axisLabel: {
                    formatter: function (value) {
                        // Function formatter
//                return value + ' °C'
                        return value
                    },
                    margin: 5,
                    textStyle: {
                        color: '#2F95BF',
                        fontFamily: 'verdana',
                        fontSize: 10,
                        fontStyle: 'normal'
                    }
                },
                axisLine: {    // 轴线
                    show: true,
                    lineStyle: {
                        color: '#2F95BF',
                        width: 0
                    }
                },
                axisTick: {    // 轴标记
                    show: true,
                    length: 3,
                    lineStyle: {
                        color: '#2F95BF',
                        type: 'solid',
                        width: 1
                    }
                },
                splitLine: {
                    show: true
                }
            }
        ],
        series: [
            {
                name: '磁盘IO',
                type: 'line',
                smooth: true,
                yAxisIndex: 1,
                data: (function(){
                    var res = []
                    var arr = vm.getData3(0,4)
                    arr.forEach(function(val,i){
                        res.push((val.disk_input+val.disk_output))
                    })
                    return res
                })()
            },
            {
                name: '网络IO',
                type: 'line',
                smooth: true,
                yAxisIndex: 1,
                data: (function(){
                    var res = []
                    var arr = vm.getData3(0,4)
                    arr.forEach(function(val,i){
                        res.push((val.net_input+val.net_output))
                    })
                    console.log(res)
                    return res
                })()
            },
            {
                name: 'CPU使用率',
                type: 'line',
                smooth: true,
//            xAxisIndex: 1,
//            yAxisIndex: 1,
                data: (function(){
                    var res = []
                    var arr = vm.getData3(0,4)
                    arr.forEach(function(val,i){
                        console.log(val.cpu_percent)
                        res.push(val.cpu_percent*100)
                    })
                    return res
                })()
            }
        ]
    };

    var axisData1;
    clearInterval(timeTicket1);
    var timeTicket1 = setInterval(function (){
        axisData1 = (new Date()).toLocaleTimeString().replace(/^\D*/,'').slice(0,8);
        // 动态数据接口 addData
        myChart1.addData([
            [
                0,        // 系列索引
                vm.getData3(0,1)[0]['disk_input']+vm.getData3(0,1)[0]['disk_output'], // 新增数据
                false,    // 新增数据是否从队列头部插入
                false,    // 是否增加队列长度，false则自定删除原有数据，队头插入删队尾，队尾插入删队头
                axisData1  // 坐标轴标签
            ],
            [
                1,        // 系列索引
                vm.getData3(0,1)[0]['disk_input']+vm.getData3(0,1)[0]['net_output'], // 新增数据
                false,    // 新增数据是否从队列头部插入
                false,    // 是否增加队列长度，false则自定删除原有数据，队头插入删队尾，队尾插入删队头
                axisData1  // 坐标轴标签
            ],
            [
                2,        // 系列索引
                vm.getData3(0,1)[0]['cpu_percent']*100, // 新增数据
                false,    // 新增数据是否从队列头部插入
                false,    // 是否增加队列长度，false则自定删除原有数据，队头插入删队尾，队尾插入删队头
                axisData1  // 坐标轴标签
            ]
        ]);
    }, oneMinutes);

    var option2 = {
        color: ['#FBC31A', '#258BFF'],
        title: {
            text: '内存占用',
            x: 'center',
            y: 'bottom',
            textStyle: {
                color: '#5797D6',
                fontSize: 12,
                fontStyle: 'normal'
            }
        },
        /*tooltip: {
         trigger: 'item',
         formatter: "{a} <br/>{b}: {c} ({d}%)"
         },*/
        legend: {
            orient: 'horizontal',
            x: 'center',
            y: 10,
            data: ['已用', '空闲'],
            textStyle: {
                color: '#fff'
            }
        },
        series: [
            {
                name: '使用率',
                type: 'pie',
                radius: ['30%', '50%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: false,
                        textStyle: {
                            color: '#fff',
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                itemStyle: {
                    normal: {
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    }
                },
                data: (function(){
                    var res = []
                    res.push(
                        {value: vmData.uses[0].mem_useD, name: '已用'},
                        {value: vmData.uses[0].mem_useN, name: '空闲'}
                    )
                    return res
                })()
            }
        ]
    };

    var lastIndex2 = 3;
    clearInterval(timeTicket2);
    var timeTicket2 = setInterval(function (){
        // 动态数据接口 addData
        myChart2.addData([
            [
                0,        // 系列索引
                {value: vmData.uses[0].mem_useD, name: lastIndex2%2==0?'空闲':'已用'},
                false,     // 新增数据是否从队列头部插入
                false,     // 是否增加队列长度，false则自定删除原有数据，队头插入删队尾，队尾插入删队头
                //lastIndex%2==0?'空闲':'已用'
                //['已用','空闲']
            ]
        ]);
        lastIndex2 ++
    }, oneMinutes);


    var option3 = {
        color: ['#FBC31A', '#258BFF'],
        title: {
            text: '内存占用',
            x: 'center',
            y: 'bottom',
            textStyle: {
                color: '#5797D6',
                fontSize: 12,
                fontStyle: 'normal'
            }
        },
        /*tooltip: {
         trigger: 'item',
         formatter: "{a} <br/>{b}: {c} ({d}%)"
         },*/
        legend: {
            orient: 'horizontal',
            x: 'center',
            y: 10,
            data: ['已用', '空闲'],
            textStyle: {
                color: '#fff'
            }
        },
        series: [
            {
                name: '使用率',
                type: 'pie',
                radius: ['30%', '50%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: false,
                        textStyle: {
                            color: '#fff',
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                itemStyle: {
                    normal: {
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    }
                },
                data: (function(){
                    var res = []
                    res.push(
                        {value: vmData.uses[0].disk_useD, name: '已用'},
                        {value: vmData.uses[0].disk_useN, name: '空闲'}
                    )
                    return res
                })()
            }
        ]
    };

    var lastIndex3 = 3;
    clearInterval(timeTicket3);
    var timeTicket3 = setInterval(function (){
        // 动态数据接口 addData
        myChart3.addData([
            [
                0,        // 系列索引
                {value: vmData.uses[0].disk_useD, name: lastIndex3%2==0?'空闲':'已用'},
                false,     // 新增数据是否从队列头部插入
                false,     // 是否增加队列长度，false则自定删除原有数据，队头插入删队尾，队尾插入删队头
                //lastIndex%2==0?'空闲':'已用'
                //['已用','空闲']
            ]
        ]);
        lastIndex3 ++
    }, oneMinutes);

    var option4 = {
        color: ['#3FC3EC'],
        grid: {
            x: 50,
            y: 30,
            x2: 50,
            y2: 30
        },
        /*tooltip: {
            trigger: 'axis'
        },*/
        calculable: true,
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                axisLabel: {
                    formatter: function (value) {
                        // Function formatter
//                return value + ' °C'
                        return value
                    },
                    margin: 10,
                    textStyle: {
                        color: '#fff',
                        fontFamily: 'verdana',
                        fontSize: 10,
                        fontStyle: 'normal'
                    }
                },
                axisTick: {    // 轴标记
                    show: true,
                    length: 3,
                    lineStyle: {
                        color: '#2F95BF',
                        type: 'solid',
                        width: 1
                    }
                },
                data : (function (){
                    var now = new Date();
                    var res = [];
                    var len = 6;
                    while (len--) {
                        res.unshift(now.toLocaleTimeString().replace(/^\D*/,'').slice(0,8));
                        now = new Date(now - oneMinutes);
                    }
                    return res;
                })()
            },
        ],
        yAxis: [
            {
                type: 'value',
                name: 'Byte',
                position: 'left',
                //min: 0,
                //max: 300,
                //splitNumber: 5,
                boundaryGap: [0, 0.1],
                axisLine: {    // 轴线
                    show: true,
                    lineStyle: {
                        color: '#2F95BF',
                        width: 1
                    }
                },
                axisLabel: {
                    formatter: function (value) {
                        // Function formatter
//                return value + ' °C'
                        return value
                    },
                    margin: 10,
                    textStyle: {
                        color: '#fff',
                        fontFamily: 'verdana',
                        fontSize: 10,
                        fontStyle: 'normal'
                    }
                },
                axisTick: {    // 轴标记
                    show: true,
                    length: 3,
                    lineStyle: {
                        color: '#2F95BF',
                        type: 'solid',
                        width: 1
                    }
                }
            }
        ],
        series: [
            {
                name: 'Byte',
                type: 'line',
                smooth: true,
                itemStyle: {normal: {areaStyle: {type: 'default'}}},
                data: (function(){
                    var res = []
                    var arr = vm.getData6(0,6)
                    arr.forEach(function(val,i){
                        res.unshift(val.volume)
                    })
                    return res
                })()
            }
        ]
    };

    var lastData4 = 7;
    var axisData4;
    clearInterval(timeTicket4);
    var timeTicket4 = setInterval(function (){
        //lastData4 += Math.random() * ((Math.round(Math.random() * 10) % 2) == 0 ? 1 : -1);
        //lastData4 = lastData4.toFixed(1) - 0;
        lastData4 = vm.getData6(0,1)[0]['volume']
        axisData4 = (new Date()).toLocaleTimeString().replace(/^\D*/,'').slice(0,8);

        // 动态数据接口 addData
        myChart4.addData([
            [
                0,        // 系列索引
                lastData4, // 新增数据
                false,    // 新增数据是否从队列头部插入
                false,    // 是否增加队列长度，false则自定删除原有数据，队头插入删队尾，队尾插入删队头
                axisData4  // 坐标轴标签
            ]
        ]);
    }, oneMinutes);

    var option5 = {
        //color: ['#3FC3EC','#C48743','#FFFF00'],
        grid: {
            x: 30,
            y: 50,
            x2: 40,
            y2: 30
        },
        /*tooltip: {
            trigger: 'axis'
        },*/
        legend: {
            data: ['磁盘IO', '网络IO', 'CPU使用率'],
            y: 10,
            textStyle: {
                color: '#fff'
            }
        },
        xAxis: [
            {
                type: 'category',
                position: 'bottom',
//            splitNumber: 5,
                boundaryGap: false, // 从0开始绘制
                axisLine: {    // 轴线
                    show: true,
                    lineStyle: {
                        color: '#2F95BF',
                        type: 'solid',
                        width: 0
                    }
                },
                axisTick: {    // 轴标记
                    show: true,
                    length: 3,
                    lineStyle: {
                        color: '#2F95BF',
                        type: 'solid',
                        width: 1
                    }
                },
                axisLabel: {
                    show: true,
                    interval: 'auto',    // {number}
                    margin: 10,
                    formatter: '{value}',
                    textStyle: {
                        color: '#2F95BF',
                        fontFamily: 'verdana',
                        fontSize: 10,
                        fontStyle: 'normal'
                    }
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        type: 'none'
                    }
                },
                data: (function (){
                    var now = new Date();
                    var res = [];
                    var len = 4;
                    while (len--) {
                        res.unshift(now.toLocaleTimeString().replace(/^\D*/,'').slice(0,8));
                        now = new Date(now - oneMinutes);
                    }
                    return res;
                })()
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '%',
                splitNumber: 5,
                position: 'left',
                max: 100,
                axisLine: {    // 轴线
                    show: true,
                    lineStyle: {
                        color: '#2F95BF',
                        width: 0
                    }
                },
                axisTick: {    // 轴标记
                    show: true,
                    length: 3,
                    lineStyle: {
                        color: '#2F95BF',
                        type: 'solid',
                        width: 1
                    }
                },
                axisLabel: {
                    show: true,
                    interval: 'auto',    // {number}
                    margin: 5,
                    formatter: '{value}',    // Template formatter!
                    textStyle: {
                        color: '#2F95BF',
                        fontFamily: 'verdana',
                        fontSize: 10,
                        fontStyle: 'normal'
                    }
                }
            },
            {
                type: 'value',
                name: 'Byte/s',
                splitNumber: 5,
                axisLabel: {
                    formatter: function (value) {
                        // Function formatter
//                return value + ' °C'
                        return value
                    },
                    margin: 5,
                    textStyle: {
                        color: '#2F95BF',
                        fontFamily: 'verdana',
                        fontSize: 10,
                        fontStyle: 'normal'
                    }
                },
                axisLine: {    // 轴线
                    show: true,
                    lineStyle: {
                        color: '#2F95BF',
                        width: 0
                    }
                },
                axisTick: {    // 轴标记
                    show: true,
                    length: 3,
                    lineStyle: {
                        color: '#2F95BF',
                        type: 'solid',
                        width: 1
                    }
                },
                splitLine: {
                    show: true
                }
            }
        ],
        series: [
            {
                name: '磁盘IO',
                type: 'line',
                smooth: true,
                yAxisIndex: 1,
                data: (function(){
                    var res = []
                    var arr = vm.getData3(1,4)
                    arr.forEach(function(val,i){
                        res.push((val.disk_input+val.disk_output))
                    })
                    return res
                })()
            },
            {
                name: '网络IO',
                type: 'line',
                smooth: true,
                yAxisIndex: 1,
                data: (function(){
                    var res = []
                    var arr = vm.getData3(1,4)
                    arr.forEach(function(val,i){
                        res.push((val.net_input+val.net_output))
                    })
                    console.log(res)
                    return res
                })()
            },
            {
                name: 'CPU使用率',
                type: 'line',
                smooth: true,
//            xAxisIndex: 1,
//            yAxisIndex: 1,
                data: (function(){
                    var res = []
                    var arr = vm.getData3(1,4)
                    arr.forEach(function(val,i){
                        console.log(val.cpu_percent)
                        res.push(val.cpu_percent*100)
                    })
                    return res
                })()
            }
        ]
    };

    var lastData5 = 5;
    var axisData5;
    clearInterval(timeTicket5);
    var timeTicket5 = setInterval(function (){
        axisData5 = (new Date()).toLocaleTimeString().replace(/^\D*/,'').slice(0,8);

        // 动态数据接口 addData
        myChart5.addData([
            [
                0,        // 系列索引
                vm.getData3(1,1)[0]['disk_input']+vm.getData3(0,1)[0]['disk_output'], // 新增数据
                false,    // 新增数据是否从队列头部插入
                false,    // 是否增加队列长度，false则自定删除原有数据，队头插入删队尾，队尾插入删队头
                axisData5  // 坐标轴标签
            ],
            [
                1,        // 系列索引
                vm.getData3(1,1)[0]['disk_input']+vm.getData3(0,1)[0]['net_output'], // 新增数据
                false,    // 新增数据是否从队列头部插入
                false,    // 是否增加队列长度，false则自定删除原有数据，队头插入删队尾，队尾插入删队头
                axisData5  // 坐标轴标签
            ],
            [
                2,        // 系列索引
                vm.getData3(1,1)[0]['cpu_percent']*100, // 新增数据
                false,    // 新增数据是否从队列头部插入
                false,    // 是否增加队列长度，false则自定删除原有数据，队头插入删队尾，队尾插入删队头
                axisData5  // 坐标轴标签
            ]
        ]);
    }, oneMinutes);


    var option6 = {
        color: ['#FBC31A', '#258BFF'],
        title: {
            text: '内存占用',
            x: 'center',
            y: 'bottom',
            textStyle: {
                color: '#5797D6',
                fontSize: 12,
                fontStyle: 'normal'
            }
        },
        /*tooltip: {
         trigger: 'item',
         formatter: "{a} <br/>{b}: {c} ({d}%)"
         },*/
        legend: {
            orient: 'horizontal',
            x: 'center',
            y: 10,
            data: ['已用', '空闲'],
            textStyle: {
                color: '#fff'
            }
        },
        series: [
            {
                name: '使用率',
                type: 'pie',
                radius: ['30%', '50%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: false,
                        textStyle: {
                            color: '#fff',
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                itemStyle: {
                    normal: {
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    }
                },
                data: (function(){
                    var res = []
                    res.push(
                        {value: vmData.uses[1].mem_useD, name: '已用'},
                        {value: vmData.uses[1].mem_useN, name: '空闲'}
                    )
                    return res
                })()
            }
        ]
    };

    var lastIndex6 = 3;
    clearInterval(timeTicket6);
    var timeTicket6 = setInterval(function (){
        // 动态数据接口 addData
        myChart6.addData([
            [
                0,        // 系列索引
                {value: vmData.uses[1].mem_useD, name: lastIndex6%2==0?'空闲':'已用'},
                false,     // 新增数据是否从队列头部插入
                false,     // 是否增加队列长度，false则自定删除原有数据，队头插入删队尾，队尾插入删队头
                //lastIndex%2==0?'空闲':'已用'
                //['已用','空闲']
            ]
        ]);
        lastIndex6 ++
    }, oneMinutes);


    var option7 = {
        color: ['#FBC31A', '#258BFF'],
        title: {
            text: '内存占用',
            x: 'center',
            y: 'bottom',
            textStyle: {
                color: '#5797D6',
                fontSize: 12,
                fontStyle: 'normal'
            }
        },
        /*tooltip: {
         trigger: 'item',
         formatter: "{a} <br/>{b}: {c} ({d}%)"
         },*/
        legend: {
            orient: 'horizontal',
            x: 'center',
            y: 10,
            data: ['已用', '空闲'],
            textStyle: {
                color: '#fff'
            }
        },
        series: [
            {
                name: '使用率',
                type: 'pie',
                radius: ['30%', '50%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: false,
                        textStyle: {
                            color: '#fff',
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                itemStyle: {
                    normal: {
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    }
                },
                data: (function(){
                    var res = []
                    res.push(
                        {value: vmData.uses[1].disk_useD, name: '已用'},
                        {value: vmData.uses[1].disk_useN, name: '空闲'}
                    )
                    return res
                })()
            }
        ]
    };

    var lastIndex7 = 3;
    clearInterval(timeTicket7);
    var timeTicket7 = setInterval(function (){
        // 动态数据接口 addData
        myChart7.addData([
            [
                0,        // 系列索引
                {value: vmData.uses[1].disk_useD, name: lastIndex7%2==0?'空闲':'已用'},
                false,     // 新增数据是否从队列头部插入
                false,     // 是否增加队列长度，false则自定删除原有数据，队头插入删队尾，队尾插入删队头
                //lastIndex%2==0?'空闲':'已用'
                //['已用','空闲']
            ]
        ]);
        lastIndex7 ++
    }, oneMinutes);

    var option8 = {
        color: ['#3FC3EC'],
        grid: {
            x: 50,
            y: 30,
            x2: 50,
            y2: 30
        },
        /*tooltip: {
            trigger: 'axis'
        },*/
        calculable: true,
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                axisLabel: {
                    formatter: function (value) {
                        // Function formatter
//                return value + ' °C'
                        return value
                    },
                    margin: 10,
                    textStyle: {
                        color: '#fff',
                        fontFamily: 'verdana',
                        fontSize: 10,
                        fontStyle: 'normal'
//                fontWeight: 'bold'
                    }
                },
                axisTick: {    // 轴标记
                    show: true,
                    length: 3,
                    lineStyle: {
                        color: '#2F95BF',
                        type: 'solid',
                        width: 1
                    }
                },
                data : (function (){
                    var now = new Date();
                    var res = [];
                    var len = 6;
                    while (len--) {
                        res.unshift(now.toLocaleTimeString().replace(/^\D*/,'').slice(0,8));
                        now = new Date(now - oneMinutes);
                    }
                    return res;
                })()
            },
        ],
        yAxis: [
            {
                type: 'value',
                name: 'Byte',
                position: 'left',
                //max: 300,
                //splitNumber: 5,
                boundaryGap: [0, 0.1],
                axisLine: {    // 轴线
                    show: true,
                    lineStyle: {
                        color: '#2F95BF',
                        width: 1
                    }
                },
                axisLabel: {
                    formatter: function (value) {
                        // Function formatter
//                return value + ' °C'
                        return value
                    },
                    margin: 10,
                    textStyle: {
                        color: '#fff',
                        fontFamily: 'verdana',
                        fontSize: 10,
                        fontStyle: 'normal'
                    }
                },
                axisTick: {    // 轴标记
                    show: true,
                    length: 3,
                    lineStyle: {
                        color: '#2F95BF',
                        type: 'solid',
                        width: 1
                    }
                }
            }
        ],
        series: [
            {
                name: 'Byte',
                type: 'line',
                smooth: true,
                itemStyle: {normal: {areaStyle: {type: 'default'}}},
                data: (function(){
                    var res = []
                    var arr = vm.getData6(1,6)
                    arr.forEach(function(val,i){
                        res.unshift(val.volume)
                    })
                    return res
                })()
            }
        ]
    };

    var lastData8 = 7;
    var axisData8;
    clearInterval(timeTicket8);
    var timeTicket8 = setInterval(function (){
        //lastData8 += Math.random() * ((Math.round(Math.random() * 10) % 2) == 0 ? 1 : -1);
        //lastData8 = lastData4.toFixed(1) - 0;
        lastData8 = vm.getData6(1,1)[0]['volume']
        axisData8 = (new Date()).toLocaleTimeString().replace(/^\D*/,'').slice(0,8);

        // 动态数据接口 addData
        myChart8.addData([
            [
                0,        // 系列索引
                lastData8, // 新增数据
                false,    // 新增数据是否从队列头部插入
                false,    // 是否增加队列长度，false则自定删除原有数据，队头插入删队尾，队尾插入删队头
                axisData8  // 坐标轴标签
            ]
        ]);
    }, oneMinutes);

    var option9 = {
        //color: ['#3FC3EC','#C48743','#FFFF00'],
        grid: {
            x: 30,
            y: 50,
            x2: 40,
            y2: 30
        },
        /*tooltip: {
            trigger: 'axis'
        },*/
        legend: {
            data: ['磁盘IO', '网络IO', 'CPU使用率'],
            y: 10,
            textStyle: {
                color: '#fff'
            }
        },
        xAxis: [
            {
                type: 'category',
                position: 'bottom',
//            splitNumber: 5,
                boundaryGap: false, // 从0开始绘制
                axisLine: {    // 轴线
                    show: true,
                    lineStyle: {
                        color: '#2F95BF',
                        type: 'solid',
                        width: 0
                    }
                },
                axisTick: {    // 轴标记
                    show: true,
                    length: 3,
                    lineStyle: {
                        color: '#2F95BF',
                        type: 'solid',
                        width: 1
                    }
                },
                axisLabel: {
                    show: true,
                    interval: 'auto',    // {number}
                    margin: 10,
                    formatter: '{value}',
                    textStyle: {
                        color: '#2F95BF',
                        fontFamily: 'verdana',
                        fontSize: 10,
                        fontStyle: 'normal'
                    }
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        type: 'none'
                    }
                },
                data: (function (){
                    var now = new Date();
                    var res = [];
                    var len = 4;
                    while (len--) {
                        res.unshift(now.toLocaleTimeString().replace(/^\D*/,'').slice(0,8));
                        now = new Date(now - oneMinutes);
                    }
                    return res;
                })()
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '%',
                splitNumber: 5,
                position: 'left',
                max: 100,
                axisLine: {    // 轴线
                    show: true,
                    lineStyle: {
                        color: '#2F95BF',
                        width: 0
                    }
                },
                axisTick: {    // 轴标记
                    show: true,
                    length: 3,
                    lineStyle: {
                        color: '#2F95BF',
                        type: 'solid',
                        width: 1
                    }
                },
                axisLabel: {
                    show: true,
                    interval: 'auto',    // {number}
                    margin: 5,
                    formatter: '{value}',    // Template formatter!
                    textStyle: {
                        color: '#2F95BF',
                        fontFamily: 'verdana',
                        fontSize: 10,
                        fontStyle: 'normal'
                    }
                }
            },
            {
                type: 'value',
                name: 'Byte/s',
                splitNumber: 5,
                axisLabel: {
                    formatter: function (value) {
                        // Function formatter
//                return value + ' °C'
                        return value
                    },
                    margin: 5,
                    textStyle: {
                        color: '#2F95BF',
                        fontFamily: 'verdana',
                        fontSize: 10,
                        fontStyle: 'normal'
                    }
                },
                axisLine: {    // 轴线
                    show: true,
                    lineStyle: {
                        color: '#2F95BF',
                        width: 0
                    }
                },
                axisTick: {    // 轴标记
                    show: true,
                    length: 3,
                    lineStyle: {
                        color: '#2F95BF',
                        type: 'solid',
                        width: 1
                    }
                },
                splitLine: {
                    show: true
                }
            }
        ],
        series: [
            {
                name: '磁盘IO',
                type: 'line',
                smooth: true,
                yAxisIndex: 1,
                data: (function(){
                    var res = []
                    var arr = vm.getData3(2,4)
                    arr.forEach(function(val,i){
                        res.push((val.disk_input+val.disk_output))
                    })
                    return res
                })()
            },
            {
                name: '网络IO',
                type: 'line',
                smooth: true,
                yAxisIndex: 1,
                data: (function(){
                    var res = []
                    var arr = vm.getData3(2,4)
                    arr.forEach(function(val,i){
                        res.push((val.net_input+val.net_output))
                    })
                    console.log(res)
                    return res
                })()
            },
            {
                name: 'CPU使用率',
                type: 'line',
                smooth: true,
//            xAxisIndex: 1,
//            yAxisIndex: 1,
                data: (function(){
                    var res = []
                    var arr = vm.getData3(2,4)
                    arr.forEach(function(val,i){
                        console.log(val.cpu_percent)
                        res.push(val.cpu_percent*100)
                    })
                    return res
                })()
            }
        ]
    };

    var lastData9 = 5;
    var axisData9;
    clearInterval(timeTicket9);
    var timeTicket9 = setInterval(function (){
        axisData9 = (new Date()).toLocaleTimeString().replace(/^\D*/,'').slice(0,8);

        // 动态数据接口 addData
        myChart9.addData([
            [
                0,        // 系列索引
                vm.getData3(2,1)[0]['disk_input']+vm.getData3(0,1)[0]['disk_output'], // 新增数据
                false,    // 新增数据是否从队列头部插入
                false,    // 是否增加队列长度，false则自定删除原有数据，队头插入删队尾，队尾插入删队头
                axisData9  // 坐标轴标签
            ],
            [
                1,        // 系列索引
                vm.getData3(2,1)[0]['disk_input']+vm.getData3(0,1)[0]['net_output'], // 新增数据
                false,    // 新增数据是否从队列头部插入
                false,    // 是否增加队列长度，false则自定删除原有数据，队头插入删队尾，队尾插入删队头
                axisData9  // 坐标轴标签
            ],
            [
                2,        // 系列索引
                vm.getData3(2,1)[0]['cpu_percent']*100, // 新增数据
                false,    // 新增数据是否从队列头部插入
                false,    // 是否增加队列长度，false则自定删除原有数据，队头插入删队尾，队尾插入删队头
                axisData9  // 坐标轴标签
            ]
        ]);
    }, oneMinutes);

    var option10 = {
        color: ['#FBC31A', '#258BFF'],
        title: {
            text: '内存占用',
            x: 'center',
            y: 'bottom',
            textStyle: {
                color: '#5797D6',
                fontSize: 12,
                fontStyle: 'normal'
            }
        },
        /*tooltip: {
         trigger: 'item',
         formatter: "{a} <br/>{b}: {c} ({d}%)"
         },*/
        legend: {
            orient: 'horizontal',
            x: 'center',
            y: 10,
            data: ['已用', '空闲'],
            textStyle: {
                color: '#fff'
            }
        },
        series: [
            {
                name: '使用率',
                type: 'pie',
                radius: ['30%', '50%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: false,
                        textStyle: {
                            color: '#fff',
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                itemStyle: {
                    normal: {
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    }
                },
                data: (function(){
                    var res = []
                    res.push(
                        {value: vmData.uses[2].mem_useD, name: '已用'},
                        {value: vmData.uses[2].mem_useN, name: '空闲'}
                    )
                    return res
                })()
            }
        ]
    };

    var lastIndex10 = 3;
    clearInterval(timeTicket10);
    var timeTicket10 = setInterval(function (){
        // 动态数据接口 addData
        myChart10.addData([
            [
                0,        // 系列索引
                {value: vmData.uses[2].mem_useD, name: lastIndex10%2==0?'空闲':'已用'},
                false,     // 新增数据是否从队列头部插入
                false,     // 是否增加队列长度，false则自定删除原有数据，队头插入删队尾，队尾插入删队头
                //lastIndex%2==0?'空闲':'已用'
                //['已用','空闲']
            ]
        ]);
        lastIndex10 ++
    }, oneMinutes);


    var option11 = {
        color: ['#FBC31A', '#258BFF'],
        title: {
            text: '内存占用',
            x: 'center',
            y: 'bottom',
            textStyle: {
                color: '#5797D6',
                fontSize: 12,
                fontStyle: 'normal'
            }
        },
        /*tooltip: {
         trigger: 'item',
         formatter: "{a} <br/>{b}: {c} ({d}%)"
         },*/
        legend: {
            orient: 'horizontal',
            x: 'center',
            y: 10,
            data: ['已用', '空闲'],
            textStyle: {
                color: '#fff'
            }
        },
        series: [
            {
                name: '使用率',
                type: 'pie',
                radius: ['30%', '50%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: false,
                        textStyle: {
                            color: '#fff',
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                itemStyle: {
                    normal: {
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    }
                },
                data: (function(){
                    var res = []
                    res.push(
                        {value: vmData.uses[2].disk_useD, name: '已用'},
                        {value: vmData.uses[2].disk_useN, name: '空闲'}
                    )
                    return res
                })()
            }
        ]
    };

    var lastIndex11 = 3;
    clearInterval(timeTicket11);
    var timeTicket11 = setInterval(function (){
        // 动态数据接口 addData
        myChart11.addData([
            [
                0,        // 系列索引
                {value: vmData.uses[2].disk_useD, name: lastIndex11%2==0?'空闲':'已用'},
                false,     // 新增数据是否从队列头部插入
                false,     // 是否增加队列长度，false则自定删除原有数据，队头插入删队尾，队尾插入删队头
                //lastIndex%2==0?'空闲':'已用'
                //['已用','空闲']
            ]
        ]);
        lastIndex11 ++
    }, oneMinutes);

    var option12 = {
        color: ['#3FC3EC','#C48743'],
        grid: {
            x: 50,
            y: 30,
            x2: 50,
            y2: 30
        },
        legend: {
            data:['流入流量','流出流量'],
            textStyle:{
                color: '#fff'
            }
        },
        /*tooltip: {
            trigger: 'axis'
        },*/
        calculable: true,
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                axisLabel: {
                    formatter: function (value) {
                        // Function formatter
//                return value + ' °C'
                        return value
                    },
                    margin: 10,
                    textStyle: {
                        color: '#fff',
                        fontFamily: 'verdana',
                        fontSize: 10,
                        fontStyle: 'normal'
//                fontWeight: 'bold'
                    }
                },
                axisTick: {    // 轴标记
                    show: true,
                    length: 3,
                    lineStyle: {
                        color: '#2F95BF',
                        type: 'solid',
                        width: 1
                    }
                },
                data : (function (){
                    var now = new Date();
                    var res = [];
                    var len = 6;
                    while (len--) {
                        res.unshift(now.toLocaleTimeString().replace(/^\D*/,'').slice(0,8));
                        now = new Date(now - oneMinutes);
                    }
                    return res;
                })()
            },
        ],
        yAxis: [
            {
                type: 'value',
                name: 'Byte',
                position: 'left',
                boundaryGap: [0, 0.1],
                axisLine: {    // 轴线
                    show: true,
                    lineStyle: {
                        color: '#2F95BF',
                        width: 1
                    }
                },
                axisLabel: {
                    formatter: function (value) {
                        return value
                    },
                    margin: 10,
                    textStyle: {
                        color: '#fff',
                        fontFamily: 'verdana',
                        fontSize: 10,
                        fontStyle: 'normal'
                    }
                },
                axisTick: {    // 轴标记
                    show: true,
                    length: 3,
                    lineStyle: {
                        color: '#2F95BF',
                        type: 'solid',
                        width: 1
                    }
                }
            }
        ],
        series: [
            {
                name: '流入流量',
                type: 'line',
                smooth: true,
                itemStyle: {normal: {areaStyle: {type: 'default'}}},
                data: (function(){
                    var res = []
                    var arr = vm.getData6(2,6)
                    arr.forEach(function(val,i){
                        res.unshift(val.volume_in)
                    })
                    return res
                })()
            },
            {
                name: '流出流量',
                type: 'line',
                smooth: true,
                itemStyle: {normal: {areaStyle: {type: 'default'}}},
                data: (function(){
                    var res = []
                    var arr = vm.getData6(2,6)
                    arr.forEach(function(val,i){
                        res.unshift(val.volume_out)
                    })
                    return res
                })()
            },
        ]
    };

    var lastData12 = 7;
    var axisData12;
    clearInterval(timeTicket12);
    var timeTicket12 = setInterval(function (){
        //lastData12 += Math.random() * ((Math.round(Math.random() * 10) % 2) == 0 ? 1 : -1);
        //lastData12 = lastData4.toFixed(1) - 0;
        lastData12 = vm.getData6(2,1)[0]['volume_in']
        axisData12 = (new Date()).toLocaleTimeString().replace(/^\D*/,'').slice(0,8);

        // 动态数据接口 addData
        myChart12.addData([
            [
                0,        // 系列索引
                lastData12, // 新增数据
                false,    // 新增数据是否从队列头部插入
                false,    // 是否增加队列长度，false则自定删除原有数据，队头插入删队尾，队尾插入删队头
                axisData12  // 坐标轴标签
            ],
            [
                1,        // 系列索引
                vm.getData6(2,1)[0]['volume_out'], // 新增数据
                false,    // 新增数据是否从队列头部插入
                false,    // 是否增加队列长度，false则自定删除原有数据，队头插入删队尾，队尾插入删队头
                axisData12  // 坐标轴标签
            ]
        ]);
    }, oneMinutes);

// 基于准备好的dom，初始化echarts图表
    var myChart1 = echarts.init(document.getElementById('myChart1'));
    var myChart2 = echarts.init(document.getElementById('myChart2'));
    var myChart3 = echarts.init(document.getElementById('myChart3'));
    var myChart4 = echarts.init(document.getElementById('myChart4'));
    var myChart5 = echarts.init(document.getElementById('myChart5'));
    var myChart6 = echarts.init(document.getElementById('myChart6'));
    var myChart7 = echarts.init(document.getElementById('myChart7'));
    var myChart8 = echarts.init(document.getElementById('myChart8'));
    var myChart9 = echarts.init(document.getElementById('myChart9'));
    var myChart10 = echarts.init(document.getElementById('myChart10'));
    var myChart11 = echarts.init(document.getElementById('myChart11'));
    var myChart12 = echarts.init(document.getElementById('myChart12'));

// 为echarts对象加载数据
    myChart1.setOption(option1);
    myChart2.setOption(option2);
    myChart3.setOption(option3);
    myChart4.setOption(option4);
    myChart5.setOption(option5);
    myChart6.setOption(option6);
    myChart7.setOption(option7);
    myChart8.setOption(option8);
    myChart9.setOption(option9);
    myChart10.setOption(option10);
    myChart11.setOption(option11);
    myChart12.setOption(option12);

},500)
