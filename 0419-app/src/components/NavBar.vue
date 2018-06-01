<template>
    <div class="navbar">
        <router-link class="nav-list" tag="a" :to="'/'">
            <span class="nav-list-icon nav-list-icon1"></span>
            <h4 class="nav-list-text">首页</h4>
        </router-link>
        <router-link class="nav-list" tag="a" :to="'/touzi'">
            <span class="nav-list-icon nav-list-icon2"></span>
            <h4 class="nav-list-text">投资</h4>
        </router-link>
        <router-link class="nav-list" tag="a" :to="'/faxian'">
            <span class="nav-list-icon nav-list-icon3"></span>
            <h4 class="nav-list-text">发现</h4>
        </router-link>
        <router-link class="nav-list" tag="a" :to="'/my'">
            <span class="nav-list-icon nav-list-icon4"></span>
            <h4 class="nav-list-text">我的</h4>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: 'NavBar',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
