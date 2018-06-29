<template>
    <div class="tzdtl padding-60">
        <div class="tzdtl-head clear">
            <div @click="tzdtlTabsShow(1)" class="tzdtl-link-outer" :class="[{'tzdtl-link-active':eq==1}]">
                <a href="javascript:" class="tzdtl-link">项目详情</a>
            </div>
            <div @click="tzdtlTabsShow(2)" class="tzdtl-link-outer" :class="[{'tzdtl-link-active':eq==2}]">
                <a href="javascript:" class="tzdtl-link">借款资料</a>
            </div>
            <div @click="tzdtlTabsShow(3)" class="tzdtl-link-outer tzdtl-link-outer3" :class="[{'tzdtl-link-active':eq==3}]">
                <a href="javascript:" class="tzdtl-link">投资记录</a>
                <span class="tzdtl-link3-num">{{detail.investnum}}</span>
            </div>
        </div>
        <div class="tzdtl-body">
            <div v-if="eq==1" class="tzdtl-b tzdtl-b1">
                <div class="tzdtl-b1-list">
                    <h3 class="tzdtl-b1-title">借款人信息</h3>
                    <h4 class="tzdtl-b1-list-type">个人：</h4>
                    <div class="tzdtl-b1-content tzdtl-b1-l1 clear">
                        <span class="tzdtl-b1-l1-l">{{detail.real_name||'XX'}}</span>
                        <span class="tzdtl-b1-l1-r">{{detail.idcard||'1234'}}</span>
                    </div>
                    <div class="tzdtl-b1-content tzdtl-b1-l1 clear">
                        <span class="tzdtl-b1-l1-l">{{detail.zhiwu||'CEO'}}</span>
                        <!--<span class="tzdtl-b1-l1-r">{{detail.real_name||'XX'}}</span>-->
                    </div>
                </div>
                <div class="tzdtl-b1-list">
                    <h3 class="tzdtl-b1-title">借款用途</h3>
                    <div class="tzdtl-b1-content">
                        {{detail.borrow_use||'无'}}
                    </div>
                </div>
                <div class="tzdtl-b1-list">
                    <h3 class="tzdtl-b1-title">还款来源</h3>
                    <div class="tzdtl-b1-content">
                        {{detail.borrow_capital||'无'}}
                    </div>
                </div>
                <div class="tzdtl-b1-list">
                    <h3 class="tzdtl-b1-title">借款描述</h3>
                    <div class="tzdtl-b1-content">
                        {{detail.borrow_breif||'无无无无无无无无无无无无无无无无无无无无无无无无无无无无无无无无'}}
                    </div>
                </div>
                <a href="javascript:" class="tzdtl-b-btn">还款中</a>
            </div>
            <div v-if="eq==2" class="tzdtl-b tzdtl-b2">
                <div v-for="(val,i) in imgList" class="tzdtl-b2-list">
                    <h4 class="tzdtl-b2-list-title">{{val.info}}</h4>
                    <img :src="imgPath(val.img)" @error="imgLoadFailed($event)" class="tzdtl-b2-list-img">
                </div>
                <div class="tzdtl-b2-list">
                    <h4 class="tzdtl-b2-list-title">营业执照</h4>
                    <img src="http://placehold.it/200x100" alt="" class="tzdtl-b2-list-img">
                </div>
                <a href="javascript:" class="tzdtl-b-btn">满标中</a>
            </div>
            <div v-if="eq==3" class="tzdtl-b tzdtl-b3">
                <table class="tzdtl-b3-tabs">
                    <tr v-for="(val,i) in recordList" :key="val.id">
                        <td>
                           <h4 class="tzdtl-b3-tabs-tel">{{val.user_phone}}</h4>
                            <p class="tzdtl-b3-tabs-date">{{val.addtime}}</p>
                        </td>
                        <td>{{val.investor_capital+'元'}}</td>
                    </tr>
                </table>
                <a href="javascript:" class="tzdtl-b-btn">还款中</a>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'TzDetail',
        data () {
            return {
                msg: 'Welcome',
                eq: 1,
                bid: 0,
                detail: {},
                imgList: [],
                record: {
                    page: 1,
                    limit: 5,
                },
                recordList: []
            }
        },
        mounted(){
            this.bid = this.$route.params.id
            this.getDetail()
            this.getRecord()
        },
        methods:{
            getDetail(){
                this.$http.post(this.$api.borrowdetail,{
                    bid: this.$route.params.id
                }).
                then(function (res) {
                    let data = res.data.data
                    console.log(res)
                    if(res.status==200 && res.data.code==1001){
                        this.detail = data
                        this.imgList = data.borrow_img
                        /*data.map((val,i)=>{
                         console.log(val.borrow_status)
                         })*/
                        console.log(this.detail)
                        console.log(this.imgList)
                    }else{
                        this.$alert('vs-model',{
                            show: true,
                            msg: res.data.msg
                        })
                    }
                    console.log(`code:${res.data.code}\t msg:${res.data.msg}`)
                }.bind(this)).catch(function (err){
                    console.log(err)
                })
            },
            getRecord(){
                let that = this
                this.$http.post(this.$api.investlist,{
                    bid: this.$route.params.id,
                    limit: this.record.limit,
                    page: this.record.page,
                    token: this.getLocationData()
                }).
                then(function (res) {
                    let data = res.data.data
                    console.log(res)
                    if(res.status==200 && res.data.code==1001){
                        this.recordList = data
                        /*data.map((val,i)=>{
                         console.log(val.borrow_status)
                         })*/
                        console.log(this.recordList)
                    }else if(res.status==200 && res.data.code==1000){
                        this.$alert('vs-model',{
                            show: true,
                            msg: res.data.msg,
                            nextText: '去登录',
                            fn: function(){
                                that.toLoginAddBackUrl()
                            }
                        })
                        this.delCookie()
                    }else{
                        this.$alert('vs-model',{
                            show: true,
                            msg: res.data.msg
                        })
                    }
                    console.log(`code:${res.data.code}\t msg:${res.data.msg}`)
                }.bind(this)).catch(function (err){
                    console.log(err)
                })
            },
            tzdtlTabsShow(n){
                this.eq = n
            },
            imgPath(url){
                return this.$http.baseURL+url
            }
        }
    }
</script>