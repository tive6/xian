<template>
    <div class="recommend">
        <div class="recommend-head">
            <img src="./../assets/img/my/my-bg-04.png" alt="" class="recommend-head-img">
        </div>
        <div class="recommend-body">
            <vue-qr class="recommend-qr" :text="qr.text" :logoSrc="qr.logoSrc" :colorDark="qr.colorDark" :size="qr.size" :margin="qr.margin"></vue-qr>
            <a href="javascript:" class="recommend-btn recommend-btn-toRec">长按二维码，即可分享推荐</a>
            <router-link tag="a" :to="{path:'/recommendrecord'}" href="javascript:" class="recommend-btn recommend-btn-record">推荐记录</router-link>
        </div>
    </div>
</template>

<script>
    import VueQr from 'vue-qr'
    export default {
        data () {
            return {
                qr: {
                    text: 'http://m.zyzaixian.com/#/act/xinshouact?code=18600001111',
//                    logoSrc: require('./../assets/img/common/logo.png'),
                    colorDark: '#000',
                    size: 150,
                    margin: 15
                }
            }
        },
        components:{
            VueQr
        },
        mounted(){

        }
    }
</script>