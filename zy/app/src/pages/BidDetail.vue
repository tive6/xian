<template>
    <div class="bidDtl padding-60">
        <login-pop v-if="loginPopShow"></login-pop>
        <div class="bidDtl-head" ref="header">
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
        <div class="bidDtl-body" ref="body">
            <div class="bidDtl-b1">
                <div class="bidDtl-b1-list clear">
                    <span class="bidDtl-b1-ll">借款金额</span>
                    <span class="bidDtl-b1-lr">{{detail.borrow_money}}</span>
                </div>
                <div class="bidDtl-b1-list clear">
                    <span class="bidDtl-b1-ll">还款方式</span>
                    <span class="bidDtl-b1-lr">{{detail.repayment_type}}</span>
                </div>
                <div class="bidDtl-b1-list clear">
                    <span class="bidDtl-b1-ll">计息方式</span>
                    <span class="bidDtl-b1-lr">{{detail.jixi}}</span>
                </div>
                <div class="bidDtl-b1-list clear">
                    <span class="bidDtl-b1-ll">保障方式</span>
                    <span class="bidDtl-b1-lr">{{detail.baozhang}}</span>
                </div>

            </div>
            <a @click="lookMore" href="javascript:" class="bidDtl-b2">查看更多</a>
        </div>
        <a @click="toInvest" href="javascript:" class="bidDtl-btn-next">立即投资</a>
    </div>
</template>

<script>
    import LoginPop from './../components/LoginPop'
    export default {
        name: 'BidDetail',
        components:{
            LoginPop
        },
        data () {
            return {
                msg: 'BidDetail',
                bid: 0,
                detail: {},
                pop: false,
                token: ''
            }
        },
        computed:{
            loginPopShow(){
                return this.pop && !this.$store.getters.getLoginStatus
            }
        },
        mounted(){
            this.pop = false
//            this.popShow()
            this.getDetail()
            console.log(this.$refs)
        },
        methods:{
            getDetail(){
                let token = this.getLocationData()
                let opts = {}
                if(token){
                    opts = {
                        bid: this.$route.params.id,
                        token: token
                    }
                }else{
                    opts = {
                        bid: this.$route.params.id
                    }
                }
                this.$http.post(this.$api.borrowdetail,opts).
                then(function (res) {
                    let data = res.data.data
                    console.log(res)
                    if(res.status==200 && res.data.code==1001){
                        this.detail = data
                        /*data.map((val,i)=>{
                            console.log(val.borrow_status)
                    })*/
                        for(let val in data){
                            console.log(`${val}:${data[val]}`)
                        }
                        console.log(this.detail)
                    }else{
                        this.$alert('vs-model',{
                            show: true,
                            msg: res.data.msg
                        })
                    }
                    console.log(`code:${res.data.code}\t msg:${res.data.msg}`)
                }.bind(this)).catch(function (err){
                    console.log(err)
                })
            },
            imgUrl(type){
                return require(`./../assets/img/touzi/touzi-icon-0${type}.png`)
            },
            lookMore(){
                if(!this.$store.getters.getLoginStatus){
                    this.pop = true
                }else{
                    this.$router.push({name:'tzdetail',params:{id:this.$route.params.id}})
                }
            },
            toInvest(){
                if(!this.$store.getters.getLoginStatus){
                    this.toLoginAddBackUrl()
                }else{
                    let IDStatus = this.getLocationData('user','id_status')
                    if(IDStatus!=1){
                        console.log('认证状态',IDStatus)
                    }else{
                        let type = this.getLocationData('user','evaluation')
                        if(type=='0'){
                            this.$alert('vs-model',{
                                show: true,
                                msg: '您尚未完成测评，请前往完成测评',
                                nextText: '去测评',
                                fn(){
                                    this.$router.push({path:'/riskceping',query:{eva:type}})
                                }
                            })
                            console.log(type)
                        }else{
                            this.$router.push({name:'biddetaillogined',params:{id:this.$route.params.id}})
                        }
                    }
                }
            }
        }
    }
</script>