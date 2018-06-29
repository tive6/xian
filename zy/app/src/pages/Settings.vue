<template>
    <div class="settings">
        <div class="set-head">
            <img class="set-head-log" src="./../assets/img/common/logo.png" alt="">
            <h3 class="set-head-version">V1.0.0</h3>
        </div>
        <div class="set-body">
            <div class="set-b1">
                <router-link :to="{path:status.pwd?'/loginpwd':'/setloginpwd'}" tag="a" href="javascript:" class="set-body-list clear">
                    <span class="set-body-list-name">登录密码</span>
                    <span class="set-body-list-key">{{status.pwd?'已设置':'未设置'}}</span>
                </router-link>
                <router-link :to="{path:status.pay?'/paypwd':'/setpaypwd'}" tag="a"  href="javascript:" class="set-body-list clear">
                    <span class="set-body-list-name">支付密码</span>
                    <span class="set-body-list-key">{{status.pay?'已设置':'未设置'}}</span>
                </router-link>
            </div>
            <a @click="popShow" href="javascript:" class="set-b2-btn">退出登录</a>
        </div>

        <!-- 退出提示 -->
        <div class="set-pop" v-if="show">
            <div class="set-pop-content">
                <div class="set-pop-top">
                    <div class="set-pop-text">尊敬的会员，感谢您一直以来对我们的支持！</div>
                    <a @click="logout" href="javascript:" class="set-pop-exit">退出账号</a>
                </div>
                <a @click="popClose" href="javascript:" class="set-pop-goon">继续赚钱</a>
            </div>
            <div @click="popClose" class="mask-bg"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Settings',
        data () {
            return {
                show: false,
                status: {
                    pwd: 0,
                    pay: 0
                }
            }
        },
        created(){
            this.status.pwd = this.getLocationData('other','login_pass_status')
            this.status.pay = this.getLocationData('other','pin_pass_status')
            console.log(this.status)
        },
        mounted(){
        },
        watch:{
            $route(to, from, next){
                if(to.path=='/settings'){
                    console.log(1234)
                    this.show = false
                }
            }
        },
        methods:{
            popShow(){
                this.show = true
            },
            popClose(){
                this.show = false
            },
            logout(){
                this.delCookie()
                this.delCookie('other')
                this.$router.push({path:'/'})
            }
        }
    }
</script>

