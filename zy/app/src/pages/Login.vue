<template>
    <div class="login">
        <router-link tag="a" :to="{path:'/'}" class="login-toHome">首页</router-link>
        <img src="./../assets/img/login/login-logo.png" alt="" class="login-logo">
        <div class="login-form">
            <div class="login-form-list">
                <span class="login-fl login-fl-tel"></span>
                <input v-model="user.tel" type="text" class="login-fr" placeholder="请输入手机号">
            </div>
            <div class="login-form-list">
                <span class="login-fl login-fl-pwd"></span>
                <input v-model="user.pwd" type="text" class="login-fr" placeholder="请输入账户密码">
            </div>
            <div class="login-form-pwdFg clear">
                <router-link tag="a" :to="{path:'/findpwd'}" href="javascript:" class="login-form-link-pwdFg">忘记密码</router-link>
            </div>
        </div>
        <a @click="login" class="login-btn-submit" href="javascript:">登录</a>
        <a @click="toRegs" href="javascript:" class="login-btn-toRegs">注册</a>
        <div class="login-xy-outer">
            登录代表你已同意
            <a href="javascript:" class="login-xy-link">《中业在线用户协议》</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Login',
        data () {
            return {
                user:{
                    tel: '18611160545',
                    pwd: 'qq123456'
                }
            }
        },
        methods:{
            toRegs(){
                this.$router.push({path:'register'})
            },
            login(){
                let that = this
//                console.log(window.location)
//                console.log(this.getUrlParams('backUrl'))
                this.$http.post(this.$api.actlogin,{
                    sUserName: that.user.tel,
                    sPassWord: that.user.pwd
                }).
                then(function (res){
                    console.log(res)
                    var data = res.data.data
                    if(res.status==200 && res.data.code==1001){
                        that.setLocationData('user',{
                            token:data.token,
                            uid:data.uid,
                            user_name:data.user_name,
                            user_phone:data.user_phone,
                            id_status:data.id_status,
                            bank_status:data.bank_status,
                            user_head:data.user_head,
                            is_evaluating:data.is_evaluating,
                            pin_pass_status:data.pin_pass_status
                        },30)
//                        console.log(that.getLocationData('user'))
                        that.toTargetUrl()
                    }else{
                        that.$alert('vs-model',{
                            show: true,
                            msg: res.data.msg
                        })
                    }
                    console.log(`code:${res.data.code}\t msg:${res.data.msg}`)
                }).catch(function (err) {
                    console.log(err)
                })
            }
        }
    }
</script>
<style scoped>
    .login-form-list:first-child{
        margin-bottom: 15px;
    }
</style>
