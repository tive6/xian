<template>
    <div class="login">
        <router-link tag="a" :to="{path:'/'}" class="login-toHome">首页</router-link>
        <a @click="toLogin" href="javascript:" class="login-toLogin">登录</a>
        <div class="login-first" v-if="firstShow">
            <img src="./../assets/img/login/login-logo.png" alt="" class="login-logo">
            <div class="login-form">
                <div class="login-form-list">
                    <span class="login-fl login-fl-tel"></span>
                    <input v-model="user.tel" value="user.tel" type="text" class="login-fr" placeholder="请输入手机号">
                </div>
                <div class="login-form-list">
                    <span class="login-fl login-fl-pwd"></span>
                    <input v-model="user.pwd" value="user.pwd" type="text" class="login-fr" placeholder="请输入8位以上字母和数字组合密码">
                </div>
                <div class="login-form-referrer">
                    <div @click="tjrShow=!tjrShow" class="login-form-text" :class="{'login-ft-active':tjrShow}">填写推荐人</div>
                </div>
                <div class="login-form-list" v-if="tjrShow">
                    <span class="login-fl login-fl-tjr"></span>
                    <input v-model="user.tjr" type="text" class="login-fr" placeholder="填写推荐人手机号">
                </div>
            </div>
            <a @click="loginNext" class="login-btn-submit" href="javascript:">下一步</a>
        </div>
        <div class="login-second" v-if="!firstShow">
            <img @click="firstShow=!firstShow" class="login-sed-back" src="./../assets/img/login/login-icon-back.png" alt="">
            <div class="login-sed-top">
                <p class="login-sed-text">验证码已发送到手机</p>
                <h4 class="login-sed-tel">{{user.tel}}</h4>
            </div>
            <div class="login-form">
                <div class="login-form-list login-form-list-code">
                    <span class="login-fl login-fl-code"></span>
                    <input v-model="user.code" value="user.code" type="text" class="login-fr" placeholder="请输入手机号">
                    <a @click="getCode" href="javascript:" class="login-fl-code-btn">获取验证码</a>
                </div>
                <div class="login-form-ck">
                    <input type="checkbox" id="login-form-ck" class="login-form-ck-input">
                    <label class="login-form-ck-label" for="login-form-ck">同意</label>
                    <a href="" class="login-form-ck-link">《中业在线注册协议》</a>
                </div>
            </div>
            <a @click="regsSubmit" class="login-btn-submit login-btn-submit-ok" href="javascript:">完成</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Register',
        data () {
            return {
                tjrShow: false,
                firstShow: true,
                user: {
                    tel: '18611160545',
                    pwd: 'qq123456',
                    code: '1234',
                    tjr: '18611110000',
                    token: '$token123456789TOKEN$'
                },
                cookie: {
                    token: '$@token123456789TOKEN$@'
                }
            }
        },
        methods:{
            toLogin(){
                this.$router.push({path:'login'})
            },
            loginNext(){
                var that = this
                if(!this.regPhone(this.user.tel)){
                    that.$alert('vs-model',{
                        show: true,
                        msg: '手机号不合法，请重启输入！'
                    })
                }
                this.$http.post(this.$api.sendphone,{
                    phone: this.user.tel
                }).
                then(function (res) {
                    console.log(res)
                    if(res.status==200 && res.data.code!=1002){
                        that.$alert('vs-model',{
                            show: true,
                            msg: res.data.msg,
                        })
                    }else{
                        that.firstShow = false
                    }
                    console.log(`code:${res.data.code}\t msg:${res.data.msg}`)
                }).catch(function (err) {
                    console.log(err)
                })
            },
            regsSubmit(){
                let that = this
                /*setTimeout(function(){
                    that.setCookie('user',that.encodeUrl(JSON.stringify({token:'1561asd5wer1qwr1q61we16asfqwe56qwe',tel:123,name:'hello'})),1)
                    console.log(that.getCookie('user'))
                },1000)*/
                this.$http.post(this.$api.regaction,{
                    sUserName: that.user.tel,
                    scode: that.user.code,
                    sPassWord: that.user.pwd
                }).
                then(function (res) {
                    console.log(res)
                    if(res.status==200 && res.data.code==1001){
                        that.$router.push({path:'/login'})
                    }else{
                        that.$alert('vs-model',{
                            show: true,
                            msg: res.data.msg,
                        })
                    }
                }).catch(function (err) {
                    console.log(err)
                })
            },
            getCode(){
//                console.log(this.getLocationData('user','token'))
            }
        }
    }
</script>