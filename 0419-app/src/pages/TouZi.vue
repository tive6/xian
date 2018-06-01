<template>
    <div class="touzi">
        <router-link tag="a" v-for="(val,i) in list" :key="val.id"
                     :to="{name:'biddetail',params:{id:val.id}}" class="touzi-list">
            <div class="touzi-list-header">
                <img v-if="val.is_xinshou==0" class="touzi-list-type" :src="imgUrl(val.borrow_duration_type)">
                <h2 class="touzi-list-title">{{val.borrow_name}}</h2>
                <span class="touzi-list-tag">{{val.repayment_type}}</span>
            </div>
            <div class="touzi-list-body">
                <div class="touzi-list-b1 clear">
                    <div class="touzi-list-b1-inner">
                        <h3 class="touzi-list-b1-num">
                            {{val.borrow_interest_rate}}<span class="touzi-list-b1-percent">%</span>
                        </h3>
                        <h4 class="touzi-list-b1-desc">预期年化收益</h4>
                    </div>
                    <div class="touzi-list-b1-inner touzi-list-b1-inner2">
                        <h3 class="touzi-list-b1-num">
                            {{val.borrow_duration}}<span class="touzi-list-b1-percent">个月</span>
                        </h3>
                        <h4 class="touzi-list-b1-desc">项目期限</h4>
                    </div>
                    <div class="touzi-list-b1-inner">
                        <a v-if="val.borrow_status==1" class="touzi-list-b1-btn touzi-list-btn-able" href="javascript:">立即投资</a>
                        <a v-if="val.borrow_status==2" class="touzi-list-b1-btn touzi-list-btn-disable" href="javascript:">已满标</a>
                        <a v-if="val.borrow_status==3" class="touzi-list-b1-btn touzi-list-btn-disable" href="javascript:">还款中</a>
                    </div>
                </div>
                <div class="touzi-list-b2">
                    <div class="touzi-list-b2-outer">
                        <div :style="{width:val.progress+'%'}" class="touzi-list-b2-inner"></div>
                    </div>
                    <p class="touzi-list-b2-text">剩余可投<span class="touzi-list-b2-money">{{val.need}}</span>元</p>
                </div>
            </div>
        </router-link>

        <!--<div class="touzi-list">
            <div class="touzi-list-header">
                <img class="touzi-list-type" src="./../assets/img/touzi/touzi-icon-01.png">
                <h2 class="touzi-list-title">新手专享-001</h2>
                <span class="touzi-list-tag">新用户专享</span>
            </div>
            <div class="touzi-list-body">
                <div class="touzi-list-b1 clear">
                    <div class="touzi-list-b1-inner">
                        <h3 class="touzi-list-b1-num">
                            12.66<span class="touzi-list-b1-percent">%</span>
                        </h3>
                        <h4 class="touzi-list-b1-desc">预期年化收益</h4>
                    </div>
                    <div class="touzi-list-b1-inner touzi-list-b1-inner2">
                        <h3 class="touzi-list-b1-num">
                            12<span class="touzi-list-b1-percent">个月</span>
                        </h3>
                        <h4 class="touzi-list-b1-desc">项目期限</h4>
                    </div>
                    <div class="touzi-list-b1-inner">
                        &lt;!&ndash;<a class="touzi-list-b1-btn touzi-list-btn-able" href="javascript:">立即投资</a>&ndash;&gt;
                        <a class="touzi-list-b1-btn touzi-list-btn-disable" href="javascript:">还款中</a>
                    </div>
                </div>
                <div class="touzi-list-b2">
                    <div class="touzi-list-b2-outer">
                        <div class="touzi-list-b2-inner"></div>
                    </div>
                    <p class="touzi-list-b2-text">剩余可投<span class="touzi-list-b2-money">123456</span>元</p>
                </div>
            </div>
        </div>-->

    </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        data () {
            return {
                list: [],
                page: 1,
                limit: 10,
            }
        },
        computed:{
            /*imgUrl(type){
                return `./../assets/img/touzi/touzi-icon-${type}.png`
            }*/
        },
        mounted(){
            this.initList()
        },
        methods:{
            initList(){
                this.$http.post(this.$api.borrowlist,{
                    page: this.page,
                    limit: this.limit
                }).
                then(function (res) {
                    let data = res.data.data
                    console.log(res)
                    if(res.status==200 && res.data.code==1001){
                        this.list = data
                        data.map((val,i)=>{
                            console.log(val.is_xinshou)
                        })
                        console.log(this.list)
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
            }
        }
    }
</script>