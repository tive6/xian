<template>
    <div class="xinshouact">
        <img src="./../assets/img/act/xsact/xs-img-head.png" alt="" class="xsact-head-img">
        <div class="xsact-form">
            <div class="xsact-fm">
                <span class="xsact-fm-l xsact-fm-l1"></span>
                <input v-model="tel" type="number" pattern="[0-9]{11}" class="xsact-fm-input" placeholder="请输入手机号码" required="required">
            </div>
            <div class="xsact-fm xsact-fm-code clear">
                <div class="xsact-fm-code-l">
                    <span class="xsact-fm-l xsact-fm-l2"></span>
                    <input v-model="auth" type="number" pattern="[0-9]{4}"  class="xsact-fm-input" placeholder="请输入验证码" required="required">
                </div>
                <div class="xsact-fm-code-r">
                    <a @click="sendCode" href="javascript:" class="xsact-fm-code-btn">获取验证码</a>
                </div>
            </div>
            <div class="xsact-fm">
                <span class="xsact-fm-l xsact-fm-l3"></span>
                <input v-model="pwd" type="text" class="xsact-fm-input" placeholder="请设置8-20位密码" required="required">
            </div>
            <a @click="regsSubmit" href="javascript:" class="xsact-fm-btn">
                <img class="xsact-fm-btn-img" src="./../assets/img/act/xsact/xs-bg-btn.png" alt="">
            </a>
        </div>
        <div class="xsact-adv">
            <h3 class="xsact-title">我的优势</h3>
            <div class="xsact-adv-cont clear">
                <div class="xsact-adv-list">
                    <img src="./../assets/img/act/xsact/xs-img-01.png" alt="" class="xsact-adv-list-img">
                    <p class="xsact-adv-text">5大安全保障</p>
                </div>
                <div class="xsact-adv-list">
                    <img src="./../assets/img/act/xsact/xs-img-02.png" alt="" class="xsact-adv-list-img">
                    <p class="xsact-adv-text">6维风控体系</p>
                </div>
                <div class="xsact-adv-list">
                    <img src="./../assets/img/act/xsact/xs-img-03.png" alt="" class="xsact-adv-list-img">
                    <p class="xsact-adv-text">70项信息披露</p>
                </div>
            </div>
        </div>
        <div class="xsact-ruler">
            <h3 class="xsact-title">活动规则</h3>
            <div class="xsact-ruler-list">
                <span class="xsact-ruler-num">1</span>
                <div class="xsact-ruler-text">活动时间：2018年6月1日起，本活动针对期间注册的新用户。</div>
            </div>
            <div class="xsact-ruler-list">
                <span class="xsact-ruler-num">2</span>
                <div class="xsact-ruler-text">红包，加息卷等优惠卷不可同时使用。</div>
            </div>
            <div class="xsact-ruler-list">
                <span class="xsact-ruler-num">3</span>
                <div class="xsact-ruler-text">请在“我的账户”&gt;“优惠卷”查看红包使用情况。</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'XinShouAct',
        data () {
            return {
                tel: '',
                auth: '',
                pwd: '',
                code: ''
            }
        },
        created(){
            this.code = this.$route.query.code
        },
        mounted(){
            console.log(this.code)
        },
        methods:{
            sendCode(){
                var that = this
                if(!this.regPhone(this.tel)){
                    that.$alert('vs-model',{
                        show: true,
                        msg: '手机号不合法，请重新输入！'
                    })
                    return
                }
                this.$http.post(this.$api.sendphone,{
                    phone: this.tel
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
                let opts = {
                    sUserName: that.tel,
                    scode: that.auth,
                    sPassWord: that.pwd
                }
                if(that.code){
                    Object.assign(opts,{sReuser:that.code})
                    console.log(opts)
                }
                if(!this.regPhone(this.tel) && !that.pwd && !that.auth){
                    that.$alert('vs-model',{
                        show: true,
                        msg: '输入不合法，请重新输入！'
                    })
                    return
                }
                this.$http.post(this.$api.regaction,opts).
                then(function (res){
                    console.log(res)
                    if(res.status==200 && res.data.code==1001){
                        that.$router.push({path:'/login'})
                    }else{
                        that.$alert('vs-model',{
                            show: true,
                            msg: res.data.msg
                        })
                    }
                }).catch(function (err) {
                    console.log(err)
                })
            },
        }
    }
</script>