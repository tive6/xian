<template>
    <div class="slp">
        <div class="slp-li">涉及资金安全，请勿设置过于简单的支付密码</div>
        <div class="slp-form">
            <div class="form-li clear">
                <span class="form-lil">设置支付密码</span>
                <input type="number" class="form-lir" placeholder="请输入支付密码(6位数字)">
            </div>
            <div class="form-li clear">
                <span class="form-lil">确认支付密码</span>
                <input type="password" class="form-lir" placeholder="请确认支付密码">
            </div>
        </div>
        <a href="javascript:" class="slp-btn">确认</a>
    </div>
</template>

<script>
    export default {
        name: 'SetPayPwd',
        data () {
            return {
                msg: 'SetPayPwd'
            }
        }
    }
</script>