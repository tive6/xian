<template>

    <vue-qr class="qr" :text="qr.text" :logoSrc="qr.logoSrc" :colorDark="qr.colorDark" :size="qr.size" :margin="qr.margin"></vue-qr>

</template>

<script>
    import VueQr from 'vue-qr'
    export default {
        data () {
            return {
                qr: {
                    text: 'http://192.168.0.114:8080/#/act/xinshouact?code=18600001111',
                    logoSrc: require('./../assets/img/common/logo.png'),
                    colorDark: '#000',
                    size: 200,
                    margin: 0
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