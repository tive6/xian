<template>
    <div class="model" v-if="mObj.show">

        <div class="model-content">
            <div class="model-text">{{mObj.msg}}</div>
            <div class="model-btn-outer clear">
                <a @click="modelClose" href="javascript:" class="model-btn model-btn-cancel">取消</a>
                <a @click="nextFn" href="javascript:" class="model-btn model-btn-next">{{mObj.nextText}}</a>
            </div>
        </div>

        <transition
                name="custom-classes-transition"
                enter-active-class="animated zoomIn"
                leave-active-class="animated zoomOut"
        >
        <div class="mask-bg" @click="modelClose"></div>
            </transition>
    </div>
</template>

<script>
    import {Bus} from  './../../common/bus'
    export default {
        name: 'Model',
        data () {
            return {
                mObj: {
                    show: false,
                    msg: '标题',
                    nextText: '确认',
                    fn: null
                }
            }
        },
        mounted(){
            var _this = this
            this.$nextTick(function () {
                Bus.$on('vs-model',function(m){
                    console.log(m)
                    _this.mObj.show = m.show
                    _this.mObj.msg = m.msg
                    _this.mObj.nextText = m.nextText?m.nextText:'确认'
                    _this.mObj.fn = typeof m.fn == 'function' ? m.fn : null
                })
            })
        },
        update(){

        },
        methods:{
            modelClose(){
                this.mObj.show = false
            },
            nextFn(){
                this.modelClose()
                this.mObj.fn && this.mObj.fn()
            }
        }
    }
</script>
