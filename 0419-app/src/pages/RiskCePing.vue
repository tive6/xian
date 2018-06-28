<template>
    <div class="riskCp">

        <!-- 风险测评进度条 -->
        <div class="progress-bar" v-if="!resultShow">
            <div class="progress-outer">
                <div class="progress-inner" :style="{width:progressW}"></div>
            </div>
            <div class="progress-n">{{itemIndex+1}}/10</div>
        </div>

        <!-- 风险测评问题选项 -->
        <div class="riskCp-content" v-if="!resultShow">
            <div class="riskCp-content-inner">
                <div v-for="(val,i) in listData.list" class="riskCp-content-list" v-if="itemIndex==i">
                    <div class="riskCp-issue" v-text="val.issue"></div>
                    <div class="riskCp-options">
                        <div class="riskCp-options-list" v-for="(item,index) in val.options" :class="{'riskCp-options-checked':''+i+index==itemList}">
                            <input @click="optionsCheck(i,index,$event)" :name="'riskCp'+i" :value="listData.score[index]" :id="'riskCp'+i+index" :data-options="listData.type[index]" type="radio" class="riskCp-options-list-radio">
                            <label class="riskCp-options-list-detail" :for="'riskCp'+i+index" v-text="item"></label>
                        </div>
                    </div>
                </div>
            </div>
            <a @click="riskSubmit" v-if="itemIndex==9" href="javascript:" class="riskCp-btn-submit">提交</a>
        </div>

        <!-- 风险测评结果 -->
        <div v-if="resultShow" class="riskCp-result">
            <div class="riskCp-result-t">
                <h2 class="riskCp-rt-title">◆ {{resultList[resultEq]['title']}} ◆</h2>
                <div class="riskCp-rt-desc">
                    {{resultList[resultEq]['desc']}}
                </div>
            </div>
            <div class="riskCp-result-b">
                <a v-if="btnShow" @click="cpFinished" href="javascript:" class="riskCp-rb-btn riskCp-rb-finish">完成</a>
                <a @click="cpAgain" href="javascript:" class="riskCp-rb-btn riskCp-rb-again">重新测评</a>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'RiskCePing',
        data () {
            return {
                listData: {
                    type: ['A','B','C','D','E'],
                    score: [2,3,4,5,6],
                    list: [
                        {
                            issue: '1、您准备用于投资的资金大致为？',
                            options: [
                                'A.10万以下',
                                'B.10-50万',
                                'C.50-70万',
                                'D.70-100万',
                                'E.100万以上'
                            ]
                        },
                        {
                            issue: '2、您的投资经验可以被概括为：',
                            options: [
                                'A.无：除银行活期和定期储蓄存款外，基本没有其他投资经验',
                                'B.有限：有过购买国债，货币型基金（余额宝类）等保本型产品',
                                'C.一般：有证券或购买非保本金融理财产品的经历，如基金、信托产品等',
                                'D.丰富：是一位积极和有经验的投资者，有证券、期货等投资经验并倾向于自己作出投资决定',
                                'E.非常丰富：我是一位非常有经验的投资者，参与过权证、期货或创业板等高风险产品的交易'
                            ]
                        },
                        {
                            issue: '3、您个人目前已经或者准备进行网贷投资的资金占家庭现有总资产(不含自住、自用房产及汽车等固定资产)的比例是：',
                            options: [
                                'A.10%以下',
                                'B.10%－30%',
                                'C.30%－50%',
                                'D.50%-70%',
                                'E.70%以上'
                            ]
                        },
                        {
                            issue: '4、您是否有过投资失败的经历，如有遭受的损失是多少？',
                            options: [
                                'A.否',
                                'B.本金亏损5%以内',
                                'C.本金亏损5%-20%',
                                'D.本金亏损20%-50%',
                                'E.本金亏损50%以上'
                            ]
                        },
                        {
                            issue: '5、作出一项投资决定后，您通常会觉得？',
                            options: [
                                'A.非常担心投资结果轻松，基本持乐观态度',
                                'B.比较担心投资结果',
                                'C.基本没什么影响',
                                'D.轻松，基本持乐观态度',
                                'E.很高兴，对自己的决定很有信心'
                            ]
                        },
                        {
                            issue: '6、您的家人或者朋友认为您在投资中是什么样的风险承担者？',
                            options: [
                                'A.无法承担风险',
                                'B.虽然厌恶风险但愿意承担一些风险',
                                'C.在深思熟虑后愿意承担一定的风险',
                                'D.敢冒风险，比较激进',
                                'E.爱好风险，相当积极'
                            ]
                        },
                        {
                            issue: '7、假设有两种不同的投资：投资A预期获得5%的收益，有可能承担非常小的损失；投资B预期获得20%的收益，但有可能面临25%甚至更高的亏损。您将您的投资资产分配为：',
                            options: [
                                'A.全部投资于A',
                                'B.大部分投资于A',
                                'C.两种投资各一半',
                                'D.大部分投资于B',
                                'E.全部投资于B'
                            ]
                        },
                        {
                            issue: '8、您是否有过网贷投资经历，对于您所投资项目的安全性，您认为：',
                            options: [
                                'A.我暂未进行过网贷投资',
                                'B.低，对所投资平台或项目了解较少，抱着试试看的态度',
                                'C.中，对所投资平台或项目有一定了解，认为收回投资本息问题不大',
                                'D.高，对所投资平台或项目非常了解，相信一定能够收回本息，风险小',
                                'E.不属于前述选项，但能收回本息'
                            ]
                        },
                        {
                            issue: '9、您进行网贷投资时的首要目标是？',
                            options: [
                                'A.兴趣爱好',
                                'B.资产保值，我不愿意承担任何投资风险',
                                'C.获得稳定投资收益，不在乎收益率比较低',
                                'D.产生较多的收益，可以承担一定的投资风险',
                                'E.获得超额收益，愿意承担很大的投资风险'
                            ]
                        },
                        {
                            issue: '10、您的网贷投资经历中有遇到过问题平台或项目吗？',
                            options: [
                                'A.尚未投资',
                                'B.无，总体盈利',
                                'C.有个别，个人累计投资的平台数目较少，有亏损但能承受',
                                'D.有个别，个人累计投资的平台数目极少，亏损严重',
                                'E.有一些，亏损严重'
                            ]
                        }
                    ]
                },
                itemIndex: 0,
                score: 0,
                isFinished: false,
                itemList: '',
                resultShow: false,
                btnShow: true,
                resultEq: 0,
                resultList: [
                    {
                        title: '保守型',
                        desc: '您的风险承受能力低，属于三思而后行的投资者，没有很大的把握不会轻易投资，对收益要求不高，追求资本绝对安全，预期报酬率优于中长期银行存款利率（3—5年），并确保本金在通货膨胀中至少发挥保值的功能。'
                    },
                    {
                        title: '稳健型',
                        desc: '您的风险承受能力较低，有一定的投资见解和风险意识，可以接受一定幅度的本金亏损，及时止损意识强，资产配置以低风险品种为主，少量参与投资回报率高、风险较高的产品。'
                    },
                    {
                        title: '进取型',
                        desc: '您的风险承受度适中，偏向于资产均衡配置，能够承受一定的投资风险和资金损失，投资预期收益相对较高，擅长分析资本的基本面和技术面，利用市场波动赢取利益差，追求在较短的周期内收益最大化。'
                    }
                ],
                token: '',
                eva: '',
                type: ''
            }
        },
        computed:{
            progressW(){
                return (this.itemIndex+1)/10*100+'%'
            }
        },
        mounted(){
            this.initShow()
        },
        methods:{
            optionsCheck(n1,n2,event){
                if(this.isFinished){
                    return false
                }else{
                    if(this.itemIndex>=9){
                        this.itemIndex = 9
                        this.isFinished = true
                    }else{
                        this.itemIndex++
                    }
                    this.score += parseInt(event.currentTarget.value)
                    this.itemList = ''+n1+n2
                }
//                console.log(n1,n2)
//                console.log(this.itemIndex)
                console.log(this.score)
            },
            riskSubmit(){
                if(this.isFinished) {
                    console.log("完成",this.score)
                    let that = this

                    this.token = this.getUrlParams('token') || ''
                    if(!this.token){
                        this.token = this.getLocationData('user','token')
                    }
                    console.log(this.token)
                    this.$http.post(this.$api.evaluationdo,{
                        token: that.token,
                        num: that.score
                    }).
                    then(function (res) {
                        let data = res.data
                        console.log(res)
                        if(res.status==200 && res.data.code==1002){
                            that.resultShow = true
                            if(that.score<=30){
                                that.resultEq = 0
                                console.log("保守",that.score)
                                that.type = '1'
                            }else if(that.score>=31&&that.score<=45){
                                that.resultEq = 1
                                console.log("稳健",that.score)
                                that.type = '2'
                            }else{
                                that.resultEq = 2
                                console.log("进取",that.score)
                                that.type = '3'
                            }
                        }else{
                            that.$alert('vs-model',{
                                show: true,
                                msg: res.data.msg,
                                /*fn: function(){
                                 that.toLoginAddBackUrl()
                                 }*/
                            })
                        }
                        console.log(`code:${res.data.code}\t msg:${res.data.msg}`)
                    }).catch(function (err){
                        console.log(err)
                    })
                }else{
                    this.$alert('vs-model',{
                        show: true,
                        msg: '答题未完成！'
                    })
                }
            },
            cpAgain(){
                this.itemIndex = 0
                this.isFinished = false
                this.btnShow = true
                this.score = 0
                this.resultShow = false
//                window.location.reload()
//                let token = this.getUrlParams('token')
//                this.$router.push({path:'riskceping?token='+token+'&eva=0'})
//                this.$router.go(0)
            },
            cpFinished(){
                try{
                    if(this.getPhoneType()){
                        /*  android */
                        window.ZhongYe.setCompleted(this.type)
                    }else{
                        /* ios */
                        window.webkit.messageHandlers.setCompleted.postMessage(this.type)
                    }
                }catch(err){
                    console.log(this.type)
                    this.$router.push({path:'/my'})
                }
            },
            initShow(){
                this.eva = this.getUrlParams('eva') || ''
                if(this.eva==''){
                    try{
                        this.eva = this.getLocationData('user','is_evaluating')
                    }catch(err){
                        this.eva = '0'
                    }
                    this.resultShow = false
                    this.btnShow = true
                }else if(this.eva==0){
                    this.resultEq = 0
                    this.resultShow = false
                    this.btnShow = true
                }else{
                    this.resultEq = parseInt(this.eva)-1
                    this.resultShow = true
                    this.btnShow = false
                }
            }
        }
    }
</script>
