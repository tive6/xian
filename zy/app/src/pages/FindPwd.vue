<template>
    <div class="findPwd">
        <div class="find-form">
            <div class="login-form-list">
                <span class="login-fl login-fl-tel"></span>
                <input v-model="user.tel" value="user.tel" type="text" class="login-fr" placeholder="请输入手机号">
            </div>
            <div class="login-form-list login-form-list-code">
                <span class="login-fl login-fl-code"></span>
                <input v-model="user.code" value="user.code" type="text" class="login-fr" placeholder="请输入验证">
                <a @click="getCode" href="javascript:" class="login-fl-code-btn">获取验证码</a>
            </div>
            <div class="login-form-list">
                <span class="login-fl login-fl-pwd"></span>
                <input v-model="user.newPwd" value="user.tel" type="text" class="login-fr" placeholder="请输入8位字母数字组合新密码">
            </div>
        </div>
        <a @click="submit" ref="submit" href="javascript:" class="find-form-btn">确认</a>
    </div>
</template>

<script>
    export default {
        name: 'FindPwd',
        data () {
            return {
                user: {
                    tel: '18611160545',
                    code: '',
                    newPwd: ''
                }
            }
        },
        mounted(){
            console.info(this.$refs.submit)
        },
        methods:{
            getCode(){
                let that = this
                if(!this.regPhone(this.user.tel)){
                    that.$alert('vs-model',{
                        show: true,
                        msg: '手机号不合法，请重新输入！'
                    })
                }
                this.$http.post(this.$api.findpwdsendphone,{
                    phone: that.user.tel
                }).
                then(function (res){
                    console.log(res)
                    if(res.status==200 && res.data.code==1002){
                        return
                    }else{
                        that.$alert('vs-model',{
                            show: true,
                            msg: res.data.msg
                        })
                    }
                    console.log(`code:${res.data.code}\t msg:${res.data.msg}`)
                }).catch(function(err){
                    console.log(err)
                })
            },
            submit(){
                let that = this
                if(this.user.tel==''||this.user.code==''||this.user.newPwd==''){
                    return
                }
                this.$http.post(this.$api.dofindpwd,{
                    phone: that.user.tel,
                    code: that.user.code,
                    newpwd: that.user.newPwd
                }).
                then(function (res){
                    console.log(res)
                    if(res.status==200 && res.data.code==1002){
                        that.$alert('vs-model',{
                            show: true,
                            msg: res.data.msg,
                            nextText: '去登录',
                            fn(){
                                that.$router.push({path:'/login'})
                            }
                        })
                    }else{
                        that.$alert('vs-model',{
                            show: true,
                            msg: res.data.msg
                        })
                    }
                    console.log(`code:${res.data.code}\t msg:${res.data.msg}`)
                }).catch(function(err){
                    console.log(err)
                })
            }
        }
    }
</script>