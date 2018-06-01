<template>
    <div class="bidSuc">
        <img src="./../assets/img/touzi/touzi-img-success.png" alt="" class="bidSuc-img">
        <p class="bidSuc-text">投资成功</p>
        <div class="bidSuc-btn-outer">
            <a @click="toHome" href="javascript:" class="bidSuc-btn bidSuc-btn-toHome">首页</a>
            <a @click="toTouzi" href="javascript:" class="bidSuc-btn bidSuc-btn-toTz">继续投资</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'BidSuccess',
        data () {
            return {
                msg: 'Welcome'
            }
        },
        methods:{
            toHome(){
                this.$router.push({ path: 'home'})
            },
            toTouzi(){
                this.$router.push({ path: 'biddetaillogined'})
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="">

</style>
