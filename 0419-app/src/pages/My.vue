<template>
    <div class="my padding-60">
        <login-pop v-if="!$store.getters.getLoginStatus"></login-pop>
        <div class="my-header">
            <router-link tag="a" :to="{path:'/myinfo'}" href="javascript:" class="my-header-pic">
                <img class="my-header-img" src="./../assets/img/my/my-pic.png" alt="">
            </router-link>
            <!--<a href="javascript:" class="my-header-msg"><span class="rt-msg-n">2</span></a>-->
            <a href="javascript:" class="my-head-total">
                <h3 class="my-head-total-num">{{user.all_money||0}}</h3>
                <h4 class="my-head-total-desc">总资产(元)
                    <img class="my-head-total-icon" src="./../assets/img/my/my-icon-show.png" alt="">
                </h4>
            </a>
            <div class="my-head-link clear">
                <a href="javascript:" class="my-head-link-list my-head-link-l">
                    <h3 class="my-head-total-num">{{user.interest||0}}</h3>
                    <h4 class="my-head-total-desc">已收收益(元)</h4>
                </a>
                <a href="javascript:" class="my-head-link-list my-head-link-r">
                    <h3 class="my-head-total-num">{{user.interest_collection||0}}</h3>
                    <h4 class="my-head-total-desc">待收收益(元)</h4>
                </a>
            </div>
        </div>
        <div class="my-body">
            <div class="my-b my-b1 clear">
                <a href="javascript:" class="my-b1-l">
                    <h3 class="my-b1-num">{{user.can_use_money||0}}</h3>
                    <h4 class="my-b1-desc">可用余额(元)</h4>
                </a>
                <div class="my-b1-r">
                    <a href="javascript:" class="my-b1-btn my-b1-btn-r">提现</a>
                    <a @click="toRecharge" href="javascript:" class="my-b1-btn my-b1-btn-l">充值</a>
                </div>
            </div>
            <div class="my-b my-b2 clear">
                <!--<a href="javascript:" class="my-b2-list">
                    <img src="./../assets/img/my/my-menu-01.png" alt="" class="my-b2-list-icon">
                    <h5 class="my-b2-list-text">投资记录</h5>
                </a>
                <a href="javascript:" class="my-b2-list">
                    <img src="./../assets/img/my/my-menu-02.png" alt="" class="my-b2-list-icon">
                    <h5 class="my-b2-list-text">资金记录</h5>
                </a>-->
                <!--<router-link class="my-b2-list" tag="a" :to="'/settings'">
                    <img src="./../assets/img/my/my-menu-03.png" alt="" class="my-b2-list-icon">
                    <h5 class="my-b2-list-text">回款日历</h5>
                </router-link>-->
                <a href="javascript:" class="my-b2-list">
                    <img src="./../assets/img/my/my-menu-03.png" alt="" class="my-b2-list-icon">
                    <h5 class="my-b2-list-text">回款日历</h5>
                </a>
                <!--<router-link class="my-b2-list" tag="a" :to="'/settings'">
                    <img src="./../assets/img/my/my-menu-04.png" alt="" class="my-b2-list-icon">
                    <h5 class="my-b2-list-text">我的卡卷</h5>
                </router-link>-->
                <a href="javascript:" class="my-b2-list">
                    <img src="./../assets/img/my/my-menu-04.png" alt="" class="my-b2-list-icon">
                    <h5 class="my-b2-list-text">我的卡卷</h5>
                </a>
                <router-link class="my-b2-list" tag="a" :to="'/settings'">
                    <img src="./../assets/img/my/my-menu-05.png" alt="" class="my-b2-list-icon">
                    <h5 class="my-b2-list-text">系统设置</h5>
                </router-link>
                <!--<a href="javascript:" class="my-b2-list">
                    <img src="./../assets/img/my/my-menu-05.png" alt="" class="my-b2-list-icon">
                    <h5 class="my-b2-list-text">系统设置</h5>
                </a>-->
                <a href="javascript:" class="my-b2-list">
                    <img src="./../assets/img/my/my-menu-06.png" alt="" class="my-b2-list-icon">
                    <h5 class="my-b2-list-text">帮助中心</h5>
                </a>
            </div>
            <a href="phone:400-000-0000" class="my-b my-b3">客服电话 {{user.kfphone}}</a>
        </div>

    </div>
</template>

<script>
    import LoginPop from './../components/LoginPop'
    export default {
        name: 'my',
        components:{
            LoginPop
        },
        data () {
            return {
                pop: false,
                token: '',
                user: {}
            }
        },
        created(){
            this.popShow()
        },
        mounted(){
            this.token = this.getLocationData()
            this.popShow()
//            this.initData()
        },
        update(){
//            this.initData()
        },
        watch:{
            $route(to, from, next){
                if(to.path=='/my'){
                    console.log(22)
                    this.token = this.getLocationData()
                    this.$store.getters.getLoginStatus && this.initData()
                }
            }
        },
        methods:{
            popShow(){
                if(!this.token){
                    this.pop = true
                }else{
                    this.token = this.getLocationData()
                    this.initData()
                }
            },
            initData(){
                let that = this
                this.$http.post(this.$api.userinfo,{
                    token: this.token
                }).
                then(function (res) {
                    let data = res.data.data
                    console.log(res)
                    if(res.status==200 && res.data.code==1001){
                        that.user = data
                        console.log(data)
                        that.setLocationData('other',data,30)
                    }else{
                        if(res.data.code == 1000){
                            that.delCookie()
                        }
                        that.$alert('vs-model',{
                            show: true,
                            msg: res.data.msg,
                            nextText: '去登录',
                            fn: function(){
                                that.toLoginAddBackUrl()
                            }
                        })
                    }
                    console.log(`code:${res.data.code}\t msg:${res.data.msg}`)
                }).catch(function(err){
                    console.log(err)
                })
            },
            authHint(){
                if(!this.user.id_status) {
                    this.$alert('vs-model', {
                        show: true,
                        msg: '账户未认证，请认证后操作！',
                        nextText: '去认证',
                        fn: function () {
                            this.toLoginAddBackUrl()
                        }
                    })
                    return false
                }
            },
            toRecharge(){
                this.authHint()
            }
        }
    }
</script>