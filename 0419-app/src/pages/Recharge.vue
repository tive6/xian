<template>
    <div class="recharge">
        <div class="recharge-hint">
            为了您充值顺利完成，请确认新所持有的银行卡已经开通快捷支付或网上银行服务。
        </div>
        <div class="recharge-li">
            账户余额(元)
            <span class="recharge-lir">0.00</span>
        </div>
        <div class="form-li clear">
            <span class="form-lil">充值金额</span>
            <input type="text" class="form-lir" placeholder="100元起投">
        </div>
        <div class="bindCard-li bindCard-li3">
            <span class="bindCard-li3l">短信验证码</span>
            <input type="text" class="bindCard-li3m" placeholder="请输入手机验证码">
            <a href="javascript:" class="bindCard-li3r">获取动态码</a>
        </div>
        <a href="javascript:" class="recharge-btn">确认充值</a>

    </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        data () {
            return {
                msg: 'Welcome'
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="">

</style>
