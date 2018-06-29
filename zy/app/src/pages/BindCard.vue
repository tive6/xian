<template>
    <div class="bindCard">
        <div class="bindCard-form">
            <div class="bindCard-li bindCard-li1">
                <span class="bindCard-li1l">银行卡号</span>
                <input type="text" class="bindCard-li1m" placeholder="请输入银行卡号">
                <span class="bindCard-li1r"></span>
            </div>
            <div class="bindCard-li bindCard-li2">
                请选择开户银行
                <span class="bindCard-li2r"></span>
            </div>
            <div class="bindCard-li bindCard-li2">
                开户省份
                <span class="bindCard-li2r"></span>
            </div>
            <div class="bindCard-li bindCard-li2">
                开户城市
                <span class="bindCard-li2r"></span>
            </div>
            <div class="bindCard-li bindCard-li1">
                <span class="bindCard-li1l">开户支行</span>
                <input type="text" class="bindCard-li1m" placeholder="请以支行结尾，如：xx支行">
                <span class="bindCard-li1r"></span>
            </div>
            <div class="bindCard-li bindCard-li1">
                <span class="bindCard-li1l">预留手机号</span>
                <input type="text" class="bindCard-li1m" placeholder="请输入银行预留手机号">
                <span class="bindCard-li1r"></span>
            </div>
            <div class="bindCard-li bindCard-li3">
                <span class="bindCard-li3l">验证码</span>
                <input type="text" class="bindCard-li3m" placeholder="请输入验证码">
                <a href="javascript:" class="bindCard-li3r">获取动态码</a>
            </div>
        </div>
        <a href="javascript:" class="bindCard-btn">绑定</a>
    </div>
</template>

<script>
    export default {
        name: 'BindCard',
        data () {
            return {
                msg: 'Welcome'
            }
        }
    }
</script>