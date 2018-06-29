<template>
    <div class="clp">
        <div class="clp-form">
            <div class="form-li">
                <span class="form-lil">原支付密码</span>
                <input v-model="pwd.old" type="text" class="form-lir" placeholder="请输入原登录密码">
            </div>
            <div class="form-li">
                <span class="form-lil">新支付密码</span>
                <input v-model="pwd.now" type="password" class="form-lir" placeholder="请输入新登录密码">
            </div>
            <div class="form-li">
                <span class="form-lil">确认支付密码</span>
                <input v-model="pwd.again" type="password" class="form-lir" placeholder="请重新输入登录密码">
            </div>
        </div>
        <a @click="editPwd" href="javascript:" class="form-btn">确认</a>
    </div>
</template>

<script>
    export default {
        name: 'ChangeLoginPwd',
        data () {
            return {
                msg: 'ChangeLoginPwd',
                pwd: {
                    old: '',
                    now: '',
                    again: ''
                }
            }
        },
        mounted(){
            Object.assign(this.$data, this.$options.data())
        },
        methods:{
            editPwd(){
                let that = this
                if(this.pwd.now!=this.pwd.again){
                    that.$alert('vs-model',{
                        show: true,
                        msg: '两次输入不一致，请重新输入！'
                    })
                    this.pwd.now = ''
                    this.pwd.again = ''
                }
                this.$http.post(this.$api.setLoginpwdbyold,{
                    token: that.getLocationData(),
                    oldpwd: this.pwd.old,
                    newpwd: this.pwd.now
                }).
                then(function (res) {
                    let data = res.data.data
                    console.log(res)
                    if(res.status==200 && res.data.code==1002){
                        that.$alert('vs-model',{
                            show: true,
                            msg: res.data.msg,
                            fn: function(){
                                that.$router.push({path:'/my'})
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

<style scoped lang="">

</style>
