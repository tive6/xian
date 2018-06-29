<template>
    <div id="app">
        <transition
                name="custom-classes-transition"
                enter-active-class="animated bounceInDown"
                leave-active-class="animated bounceInUp"
                :duration="{ enter: 0, leave: 200 }"
                >
                <!--:duration="{ enter: 200, leave: 400 }">-->
            <loading v-if="loadingShow"></loading>
        </transition>
        <transition
                name="custom-classes-transition"
                enter-active-class="animated bounceInDown"
                leave-active-class="animated bounceInUp"
                mode="out-in">
                <!--:duration="{ enter: 200, leave: 400 }">-->
            <model></model>
        </transition>
        <!--<model></model>-->
        <transition
                name="custom-classes-transition"
                enter-active-class="animated bounceInLeft"
                leave-active-class="animated bounceOutRight"
                mode="out-in"
                :duration="{ enter: 50, leave: 400 }">
            <keep-alive>
                <router-view/>
            </keep-alive>
        </transition>
        <!--<keep-alive>
            <router-view/>
        </keep-alive>-->
        <!-- footer navbar -->
        <nav-bar v-if="navShow"></nav-bar>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
//    import './assets/css/animate.css'
//    import './assets/css/style.styl'
    import NavBar from './components/NavBar.vue'
    export default {
        name: 'App',
        computed:mapGetters([
                'navShow',
                'loadingShow',
                'getLoginStatus'
        ]),
        components:{
            NavBar,
        },
        watch:{
            $route(to, from, next){
                // 对路由变化作出响应...
                console.log(to)
                var token = this.getLocationData()
                console.log(token)
                if(token){
                    this.$store.dispatch('isLogin')
                }else{
                    this.$store.dispatch('notLogin')
                }
                document.title = to.meta.title
                document.scrollTop = 0
                if(to.meta.requireAuth && ! token){
//                    console.log(333)
                    /*next({
                        path: '/'
                    });*/
                    var targetUrl = encodeURIComponent(window.location.href)
                    console.log(targetUrl)
                    this.$router.push({path:'/login?backUrl='+targetUrl})
                }
                this.navChange(to.path.substring(1))
//                console.log(this.$store)
                console.log(this.getLoginStatus)
//                console.log(this.$store.getters.getLoginStatus)
            }
        },
        methods:{
            navChange(path){
                if(path=='' || path=='touzi' || path=='faxian' || path=='my'){
                    this.$store.dispatch('showNav')
                }else{
                    this.$store.dispatch('hideNav')
                }
            },
            eg(){
                let that = this
                this.$http.post(this.$api.indexDataInfo,{}).
                then(function (res) {
                    let data = res.data.data
                    console.log(res)
                    if(res.status==200 && res.data.code==1001){

                    }else{
                        that.$alert('vs-model',{
                            show: true,
                            msg: res.data.msg
                        })
                    }
                    console.log(`code:${res.data.code}\t msg:${res.data.msg}`)
                }).catch(function(err){
                    console.log(err)
                })
            }
        }
    }
</script>