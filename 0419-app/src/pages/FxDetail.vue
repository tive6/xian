<template>
    <div class="fxDtl">
        <h2 class="fxDtl-title">{{detail.title}}</h2>
        <p class="fxDtl-time">{{detail.addtime}}</p>
        <div class="fxDtl-desc">
            <img v-show="detail.art_img" :src="`${$http.baseURL+detail.art_img}`"
                 @error="imgLoadFailed($event)">
            {{detail.content}}
        </div>
        <div v-if="0" class="fxDtl-like clear">
            <a href="javascript:" class="fxDtl-like-btn"></a> 300
        </div>
    </div>
</template>

<script>
    export default {
        name: 'FxDetail',
        data () {
            return {
                id: 0,
                detail: {}
            }
        },
        created(){
            this.init()
        },
        watch:{
            $route(to,from){
                if(to.path!=from.path&&to.path.indexOf('fxdetail')!=-1){
                    this.init()
                }
            }
        },
        methods:{
            init(){
                this.$http.post(this.$api.articledetail,{
                    aid: this.$route.params.id
                }).
                then(function(res){
                    let data = res.data
                    if(res.status==200 && res.data.code==1001){
                        this.detail = data.data
                        console.log(this.detail)
                    }else{
                        this.$alert('vs-model',{
                            show: true,
                            msg: res.data.msg
                        })
                    }
                    console.log(`code:${res.data.code}\t msg:${res.data.msg}`)
                }.bind(this)).catch(function (err) {
                    console.log(err)
                })
            }
        }
    }
</script>