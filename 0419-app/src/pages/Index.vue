<template>
    <div class="index padding-60">
        <regs-packet></regs-packet>
        <ce-ping-model></ce-ping-model>
        <div class="index-banner">
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <!--<img src="http://placehold.it/400x200" alt="" class="swiper-slide">-->
                    <!--<div v-for="(val,i) in banner2" class="swiper-slide swiper-slide-1" :style="{backgroundImage:`url(${val.url})`}"></div>-->
                    <!--<a :href="`http://${val.link}`" class="swiper-slide" v-for="(val,i) in banner" :style="[val.bannerCss]"></a>-->
                    <router-link href="javascript:" class="swiper-slide"
                                 v-for="(val,i) in banner" :key="i"
                                 tag="a" :to="{path:'/act/xinshouact'}"
                                 :style="[val.bannerCss]"></router-link>
                </div>
                <!-- 如果需要分页器 -->
                <div class="swiper-pagination"></div>
                <!-- 如果需要导航按钮 -->
                <!--<div class="swiper-button-prev"></div>-->
                <!--<div class="swiper-button-next"></div>-->
                <!-- 如果需要滚动条 -->
                <div class="swiper-scrollbar"></div>
            </div>
            <!-- 通知 -->
            <!--<a href="javascript:" class="index-banner-msg"><span class="rt-msg-n">2</span></a>-->
        </div>
        <div class="index-f index-f1 clear">
            <a href="javascript:" class="index-f1-list">
                <img class="index-f1-img" src="./../assets/img/home/home-icon-01.png" alt="">
                <h3 class="index-f1-text">平台专享</h3>
            </a>
            <a href="javascript:" class="index-f1-list">
                <img class="index-f1-img" src="./../assets/img/home/home-icon-02.png" alt="">
                <h3 class="index-f1-text">新手引导</h3>
            </a>
            <a href="javascript:" class="index-f1-list">
                <img class="index-f1-img" src="./../assets/img/home/home-icon-03.png" alt="">
                <h3 class="index-f1-text">安全保障</h3>
            </a>
        </div>
        <div class="index-f index-f2">
            <h1 class="index-f2-title">{{invest.borrow_name}}</h1>
            <h2 class="index-f2-num">
                {{invest.borrow_interest}}
                <span class="index-f2-percent">%</span>
            </h2>
            <p class="index-f2-desc">预期年化收益</p>
            <div class="index-f2-spec">
                <div class="index-f2-spec-list">
                    <img src="./../assets/img/home/home-icon-04.png" alt="" class="index-f2-spec-icon">
                    <span class="index-f2-spec-inner">{{invest.borrow_duration}}天期限</span>
                </div>
                <div class="index-f2-spec-list index-f2-spec-list2">
                    <img src="./../assets/img/home/home-icon-05.png" alt="" class="index-f2-spec-icon">
                    <span class="index-f2-spec-inner">{{invest.per_transfer}}元起投</span>
                </div>
                <div class="index-f2-spec-list">
                    <img src="./../assets/img/home/home-icon-06.png" alt="" class="index-f2-spec-icon">
                    <span class="index-f2-spec-inner">最高可投{{invest.max_transfer}}元</span>
                </div>
            </div>
            <router-link tag="a" href="javascript:" class="index-f2-btn"
                         :to="{name:'biddetail',params:{id:invest.id||0}}">立即投资</router-link>
        </div>
        <div class="index-f3">市场有风险，投资需谨慎</div>
    </div>
</template>

<script>
    import NavBar from './../components/NavBar.vue'
    import RegsPacket from './../components/RegsPacket.vue'
    import CePingModel from './../components/CePingModel.vue'
    export default {
        name: 'index',
        data () {
            return {
                banner: [],
                invest: {},
                baseUrl: this.$http.baseURL
            }
        },
        components:{
            NavBar,
            RegsPacket,
            CePingModel
        },
        created(){
            this.initData()
            /*this.$nextTick(function (){
            })*/
        },
        mounted(){
        },
        updated(){
            this.bannerSilder()
        },
        methods:{
            bannerSilder(){
                var mySwiper = new Swiper('.swiper-container', {
//            direction: 'vertical',
                    loop: true,
                    autoplay: true,//可选选项，自动滑动
                    // 如果需要分页器
                    pagination: {
                        el: '.swiper-pagination',
                    },
                    // 如果需要前进后退按钮
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                    // 如果需要滚动条
                    /*scrollbar: {
                        el: '.swiper-scrollbar',
                    },*/
                    observer: true,//修改swiper自己或子元素时，自动初始化swiper
                    observeParents: true//修改swiper的父元素时，自动初始化swiper
                })
            },
            initData(){
                let that = this
                console.log(that.$http.baseURL)
                this.$http.post(this.$api.indexDataInfo).
                then(function (res) {
                    let data = res.data.data
                    console.log(data)
                    if(res.status==200 && res.data.code==1001){
//                        that.banner = data.banner
                        that.invest = data.invest
                        data.banner.forEach(function(val,i){
                            that.banner.push({
                                imgUrl:`${that.baseUrl+val.bannerimg}`,
                                link:val.bannerurl,
                                info:val.info,
                                bannerCss: {
                                    backgroundImage: 'url('+`${that.baseUrl+val.bannerimg}`+')',
                                    backgroundColor: '#ccc'
                                }
                            })
                        })
                        console.log(that.banner)
                    }else{
                        that.$alert('vs-model',{
                            show: true,
                            msg: res.data.msg
                        })
                    }
                    console.log(`code:${res.data.code}\t msg:${res.data.msg}`)
                }).catch(function (err) {
                    console.log(err)
                })
            },
            toTargetSite(url){
                window.location.href = url
            }
        }
    }
</script>