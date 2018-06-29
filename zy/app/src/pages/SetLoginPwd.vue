<template>
    <div class="slp">
        <div class="slp-li">请设置登录密码，用于账户密码登录</div>
        <div class="slp-form">
            <div class="form-li clear">
                <span class="form-lil">设置登录密码</span>
                <input type="text" class="form-lir" placeholder="请输入登录密码">
            </div>
            <div class="form-li clear">
                <span class="form-lil">确认登录密码</span>
                <input type="text" class="form-lir" placeholder="请确认登录密码">
            </div>
        </div>
        <a href="javascript:" class="slp-btn">确认</a>
    </div>
</template>

<script>
    export default {
        name: 'SetLoginPwd',
        data () {
            return {
                msg: 'SetLoginPwd'
            }
        }
    }
</script>