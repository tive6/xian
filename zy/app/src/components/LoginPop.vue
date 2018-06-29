<template>
    <div class="loginPop">
        <div class="loginPop-outer">
            <a @click="toLogin" href="javascript:" class="loginPop-btn loginPop-btn-login">登录</a>
            <a @click="toRegs" href="javascript:" class="loginPop-btn loginPop-btn-regs">注册送666元红包</a>
        </div>
        <div class="mask-bg"></div>
    </div>
</template>

<script>
    export default {
        name: 'LoginPop',
        data () {
            return {
                pop: {

                }
            }
        },
        methods:{
            toLogin(){
                this.toLoginAddBackUrl()
            },
            toRegs(){
                this.$router.push({path:'/register'})
            }
        }
    }
</script>