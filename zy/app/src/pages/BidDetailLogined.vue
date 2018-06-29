<template>
    <div class="bidDtl bidDtled">
        <div class="bidDtl-head">
            <a @click="toBankQuota" class="bidDtled-to-bankQuota" href="javascript:">限额说明</a>
            <!--<h2 class="bidDtl-ht-title">测试100</h2>-->
            <!--<h2 class="bidDtl-ht-title">{{detail.borrow_name | charsLengthLimit(15)}}</h2>-->
            <div class="bidDtl-ht">
                <h2 class="bidDtl-ht-title">{{detail.borrow_name | charsLengthLimit(15)}}</h2>
                <h2 class="bidDtl-ht-num">
                    {{detail.borrow_interest_rate}}<span class="bidDtl-ht-perc">%</span>
                </h2>
                <p class="bidDtl-ht-text">预期年化收益</p>
            </div>
            <div class="bidDtl-hb clear">
                <div class="bidDtl-hb-list">
                    <p class="bidDtl-hb-text">剩余金额(元)</p>
                    <h4 class="bidDtl-hb-num">{{detail.need}}</h4>
                </div>
                <div class="bidDtl-hb-list">
                    <p class="bidDtl-hb-text">持有期限(天)</p>
                    <h4 class="bidDtl-hb-num">{{detail.borrow_duration}}</h4>
                </div>
                <div class="bidDtl-hb-list">
                    <p class="bidDtl-hb-text">起投金额(元)</p>
                    <h4 class="bidDtl-hb-num">{{detail.per_transfer}}</h4>
                </div>
            </div>
        </div>
        <div class="bidDtled-body">
            <div class="bidDtled-bl bidDtled-bl1">
                <span class="bidDtled-bl-l">可用金额</span>
                <input type="text" :value="detail.account_money" class="bidDtled-bl-m" placeholder="0.00" readonly>
                <a href="javascript:" class="bidDtled-bl-r">充值</a>
            </div>
            <div class="bidDtled-bl bidDtled-bl1">
                <span class="bidDtled-bl-l">投资金额</span>
                <input @change="getEarnings" v-model="inputMoney" type="text" class="bidDtled-bl-m" placeholder="请输入投资金额">
                <a @click="investAll" href="javascript:" class="bidDtled-bl-r">全投</a>
            </div>
            <div class="bidDtled-bl bidDtled-bl2">
                <span class="bidDtled-bl-l">预计收益</span>
                <span class="bidDtled-bl2-text">{{allEarnings}}</span>
            </div>
            <div v-if="0" class="bidDtled-bl bidDtled-bl3">
                <span class="bidDtled-bl-l">可用卡券</span>
                <span class="bidDtled-bl3-r">5个可用奖励</span>
            </div>
            <div class="bidDtled-xy">
                <input class="bidDtled-xy-inc" type="checkbox" id="bidDtled-xy-check">
                <label for="bidDtled-xy-check">已阅读</label>
                <a class="bidDtled-xy-link" href="">《借款协议书》</a>
                <a class="bidDtled-xy-link" href="">《风险提示书》</a>
            </div>
        </div>
        <a @click="toInvest" href="javascript:" class="bidDtl-btn-next">立即投资</a>
    </div>
</template>

<script>
    export default {
        name: 'BidDetailLogined',
        data () {
            return {
                msg: 'BidDetailLogined',
                detail: {},
                token: '',
                allMoney: 0,
                inputMoney: 0,
                allEarnings: 0
            }
        },
        components:{
        },
        mounted(){
            this.getDetail()
            console.log(typeof  this.$route.params.id)
        },
        methods:{
            toBankQuota(){
                this.$router.push({path:'/bankquota'})
            },
            getDetail(){
                let that = this
                that.token = that.getLocationData()
                this.$http.post(this.$api.borrowdetail,{
                    bid: this.$route.params.id,
                    token: this.token
                }).
                then(function (res) {
                    let data = res.data.data
                    console.log(res)
                    if(res.status==200 && res.data.code==1001){
                        that.detail = data
                        that.allMoney = data.account_money
                        /*data.map((val,i)=>{
                         console.log(val.borrow_status)
                         })*/
                        for(let val in data){
                            console.log(`${val}:${data[val]}`)
                        }
                        console.log(that.detail)
                    }else{
                        that.$alert('vs-model',{
                            show: true,
                            msg: res.data.msg
                        })
                    }
                    console.log(`code:${res.data.code}\t msg:${res.data.msg}`)
                }).catch(function (err){
                    console.log(err)
                })
            },
            getEarnings(){
                let that = this
                that.token = that.getLocationData()
                this.$http.post(this.$api.borrowinterest,{
                    bid: this.$route.params.id,
                    token: this.token,
                    money: parseInt(this.inputMoney)
                }).
                then(function (res) {
                    let data = res.data.data
                    console.log(res)
                    if(res.status==200 && res.data.code==1001){
                        that.allEarnings = data.shouyi
                        console.log(that.detail)
                    }else if(res.data.code==1009){
                        that.allEarnings = '0.00'
                    }else{
                        that.$alert('vs-model',{
                            show: true,
                            msg: res.data.msg
                        })
                    }
                    console.log(`code:${res.data.code}\t msg:${res.data.msg}`)
                }).catch(function (err){
                    console.log(err)
                })
            },
            toInvest(){
                let that = this
                that.token = that.getLocationData()
                this.$http.post(this.$api.tinvestmoney,{
                    borrow_id: this.$route.params.id,
                    token: this.token,
                    tnum: parseInt(this.inputMoney)
                }).
                then(function (res) {
                    let data = res.data.data
                    console.log(res)
                    if(res.status==200 && res.data.code==1001){
                        that.allEarnings = data.shouyi
                        console.log(that.detail)
                    }else if(res.status==200 && res.data.code==1000){
                        that.$alert('vs-model',{
                            show: true,
                            msg: res.data.msg,
                            nextText: '去登录',
                            fn(){
                                that.toLoginAddBackUrl()
                            }
                        })
                    }else{
                        that.$alert('vs-model',{
                            show: true,
                            msg: res.data.msg
                        })
                    }
                    console.log(`code:${res.data.code}\t msg:${res.data.msg}`)
                }).catch(function (err){
                    console.log(err)
                })
            },
            investAll(){
                this.inputMoney = this.allMoney
                if(this.allMoney<100)return
                this.getEarnings()
            }
        }
    }
</script>