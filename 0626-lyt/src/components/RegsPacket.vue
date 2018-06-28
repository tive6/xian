<template>
    <div class="regs-packet" v-if="isShow">
        <div class="regsp-content">
            <img src="./../assets/img/home/home-bg-rk.png" alt="" class="regsp-bg">
            <img src="./../assets/img/home/home-icon-close.png" alt="" class="regsp-close" @click="hideModel">
            <a href="javascript:" class="regsp-btn" @click="hideModel"></a>
            <div class="mask-bg" @click="hideModel"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'regs-packet',
        data () {
            return {
                msg: 'Welcome',
                isShow: false
            }
        },
        methods:{
            hideModel(){
                this.isShow = !this.isShow
            }
        }
    }
</script>