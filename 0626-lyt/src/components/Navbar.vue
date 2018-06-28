<template>
    <div class="nav clear">
        <router-link tag="a"
                     :to="{path:'/'}" href="javascript:" class="nav-list">
            <div class="nav-list-icon nav-list-icon1"></div>
            <h4 class="nav-list-text">首页</h4>
        </router-link>
        <a href="javascript:" class="nav-list">
            <div class="nav-list-icon nav-list-icon2"></div>
            <h4 class="nav-list-text">商城</h4>
        </a>
        <a href="javascript:" class="nav-list nav-list3">
            <div class="nav-list-icon nav-list-icon3">
                <div class="nav-list-icon3-inner"></div>
            </div>
            <h4 class="nav-list-text nav-list-text3">问诊</h4>
        </a>
        <router-link tag="a"
                     :to="{path:'/faxian'}" href="javascript:" class="nav-list">
            <div class="nav-list-icon nav-list-icon4"></div>
            <h4 class="nav-list-text">发现</h4>
        </router-link>
        <router-link tag="a"
                     :to="{path:'/my'}" href="javascript:" class="nav-list">
            <div class="nav-list-icon nav-list-icon5"></div>
            <h4 class="nav-list-text">我的</h4>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: 'Navbar',
        data () {
            return {
                msg: 'Navbar'
            }
        }
    }
</script>
