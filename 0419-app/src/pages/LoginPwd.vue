<template>
    <div class="loginPwd">
        <router-link tag="a"
                     :to="{path:'/changeloginpwd'}" href="javascript:" class="pwd-li">
            修改登录密码
            <span class="loginPwd-icon"></span>
        </router-link>
        <router-link tag="a"
                     :to="{path:'/findpwd'}" href="javascript:" class="pwd-li">
            忘记登录密码
            <span class="loginPwd-icon"></span>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: 'LoginPwd',
        data () {
            return {
                msg: 'LoginPwd'
            }
        }
    }
</script>
