<template>
    <div class="cepm" v-if="isShow">
        <div class="cepm-content">
            <div class="cepm-title">您尚未完成测评，请前往完成测评</div>
            <div class="cepm-footer">
                <a href="javascript:" class="cepm-btn cepm-btn-back" @click="hideModel">取消</a>
                <a href="javascript:" class="cepm-btn cepm-btn-next">立即测评</a>
            </div>
        </div>
        <div class="mask-bg" @click="hideModel"></div>
    </div>
</template>

<script>
    export default {
        name: 'CePingModel',
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