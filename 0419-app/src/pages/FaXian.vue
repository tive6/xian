<template>
    <div class="fx padding-70">
        <!--<div v-if="noticeShow" class="fx-inform clear">-->
        <div v-if="0" class="fx-inform clear">
            <span class="fx-inform-icon"></span>
            <span class="fx-inform-text">{{notice.title | charsLengthLimit(20)}}</span>
            <a @click="noticeShow=false" href="javascript:" class="fx-inform-close"></a>
        </div>
        <div class="fx-head clear">
            <a @click="tabShow(1)" href="javascript:" class="fx-head-tab" :class="{'fx-head-active':tabEq==1}">资讯</a>
            <a @click="tabShow(2)" href="javascript:" class="fx-head-tab" :class="{'fx-head-active':tabEq==2}">活动</a>
        </div>
        <div class="fx-body">
            <div v-show="tabEq==1" class="fx-b fx-b1">
                <router-link v-for="(val,i) in listZx" :key="val.id" tag="div"
                             :to="{ name: 'fxdetail',params:{ id: val.id } }"
                             class="fx-b1-li clear"
                             :class="[val.art_img==''?'fx-b1-li2':'fx-b1-li1']">
                    <div v-if="val.art_img!=''" class="fx-b1-list clear">
                        <div class="fx-b1-li1l">
                            <div class="fx-b1-li1l-text">{{val.title}}</div>
                            <h4 class="fx-b1-li1l-times">{{val.addtime}}</h4>
                        </div>
                        <div class="fx-b1-li1r">
                            <img class="fx-b1-li1r-img" @error="imgLoadFailed($event)" :src="`${$http.baseURL+val.art_img}`">
                        </div>
                    </div>
                    <div v-else class="fx-b1-list">
                        <h3 class="fx-b1-li2-title">{{val.title | charsLengthLimit(14)}}</h3>
                        <p class="fx-b1-li2-text">{{val.art_info | charsLengthLimit(30)}}</p>
                        <h4 class="fx-b1-li2-times">{{val.addtime}}</h4>
                    </div>
                </router-link>
                <!--<div class="fx-b1-li fx-b1-li2" v-if="0">
                    <h3 class="fx-b1-li2-title">标题</h3>
                    <p class="fx-b1-li2-text">Lorem ipsum tur enim  mnis reprehenderit temporibus.</p>
                    <h4 class="fx-b1-li2-times">2018-05-05</h4>
                </div>-->
            </div>
            <div v-show="tabEq==2" class="fx-b fx-b2">
                <router-link v-for="(val,i) in listAct" :key="val.id"
                             class="fx-b2-li" tag="div"
                             :class="{'fx-b2-li-end':val.status==2}" :to="{}">
                    <div v-if="val.status!=2" class="fx-b2-li-over">活动结束</div>
                    <img class="fx-b2-li-img" :src="`${$http.baseURL+val.art_img}`"
                         @error="imgLoadFailed($event)">
                    <a href="javascript:" class="fx-b2-li-outer">
                        <span class="fx-b2-li-title">{{val.title}}</span>
                        <span class="fx-b2-li-time">{{val.addtime}}</span>
                    </a>
                </router-link>
                <!--<div class="fx-b2-li">
                    <div class="fx-b2-li-over">活动结束</div>
                    <img class="fx-b2-li-img" src="./../assets/img/faxian/fx-img-01.png" alt="">
                    <a href="javascript:" class="fx-b2-li-outer">
                        <span class="fx-b2-li-title">送红包</span>
                        <span class="fx-b2-li-time">2018-06-06 12:45</span>
                    </a>
                </div>-->
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'faxian',
        data () {
            return {
                show: true,
                tabEq: 1,
                listZx: [],
                listAct: [],
                zx: {
                    page: 1,
                    limit: 10
                },
                act: {
                    page: 1,
                    limit: 5
                },
                noticeShow: true,
                notice: {},
                imgErr: './../assets/img/other/img-error.png'
            }
        },
        computed:{

        },
        mounted(){
            this.getNewNotice()
            this.initListZx()
            this.initListAct()
        },
        methods:{
            tabShow(i){
                this.tabEq = i
            },
            initListZx(){
                let that = this
                this.$http.post(this.$api.articlelist,{
                    page: this.zx.page,
                    limit: this.zx.limit
                }).
                then(function (res) {
                    let data = res.data.data
                    console.log(res)
                    if(res.status==200 && res.data.code==1001){
                        that.listZx = data
                        console.log(that.listZx)
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
            initListAct(){
                let that = this
                this.$http.post(this.$api.activitylist,{
                    page: this.act.page,
                    limit: this.act.limit
                }).
                then(function(res){
                    let data = res.data.data
                    console.log(res)
                    if(res.status==200 && res.data.code==1001){
                        that.listAct = data
                        console.log(that.listAct)
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
            getNewNotice(){
                let that = this
                this.$http.post(this.$api.newnotice).
                then(function(res){
                    let data = res.data.data
                    console.log(res)
                    if(res.status==200 && res.data.code==1001){
                        that.notice = data
                        console.log(that.notice)
                    }else{
                        that.$alert('vs-model',{
                            show: true,
                            msg: res.data.msg
                        })
                    }
                    console.log(`code:${res.data.code}\t msg:${res.data.msg}`)
                }).catch(function (err){
                    console.log(err)
                })
            }
        }
    }
</script>