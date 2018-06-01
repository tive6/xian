<template>
    <div class="clp">
        <div class="slp-li">请填写真实姓名，否则可能无法提现</div>
        <div class="bindCard-form">
            <div class="bindCard-li bindCard-li1">
                <span class="bindCard-li1l">真实姓名</span>
                <input v-if="isReal==0" v-model="name" type="text" class="bindCard-li1m" placeholder="请输入姓名">
                <input v-else :value="realName" readonly type="text" class="bindCard-li1m" placeholder="请输入姓名">
                <span v-if="isReal==0" class="bindCard-li1r"></span>
            </div>
            <div class="bindCard-li bindCard-li1">
                <span class="bindCard-li1l">证件类型</span>
                <input readonly type="text" value="中华人民共和国身份证" class="bindCard-li1m" placeholder="中华人民共和国身份证">
            </div>
            <div v-if="isReal==0" class="bindCard-li bindCard-li1">
                <span class="bindCard-li1l">证件号码</span>
                <input v-model="idcode" type="text" class="bindCard-li1m" placeholder="请输入您的身份证号码">
                <span class="bindCard-li1r"></span>
            </div>
        </div>
        <a v-if="isReal==0" @click="editPwd" href="javascript:" class="form-btn">确认</a>
    </div>
</template>

<script>
    export default {
        name: 'NameAuth',
        data () {
            return {
                msg: 'NameAuth',
                name: '',
                idcode: '',
                isReal: 0,
                realName: ''
            }
        },
        created(){
            this.isReal = this.getLocationData('user','id_status')
            console.log(this.isReal)
            if(this.isReal){
                this.realName = this.getLocationData('user','user_name')
                console.log(this.realName)
            }
        },
        mounted(){
            console.log(this.getLocationDataObj('user'))
            console.log(this.getLocationDataObj('other'))
//            console.log(Object.assign({},{a:12,b:22},{a:34}))
            let [user,other] = [{},{}]
            console.log(user)
            console.log(other)
        },
        updated(){
        },
        methods:{
            editPwd(){
                let that = this
                if(!this.isReal){
                    return false
                }
                if(this.name=='' || this.idcode==''){
                    that.$alert('vs-model',{
                        show: true,
                        msg: '输入不能为空！'
                    })
                    this.name = ''
                    this.idcode = ''
                    return
                }
                this.$http.post(this.$api.setUserRealname,{
                    token: that.getLocationData(),
                    realname: this.name,
                    idcode: this.idcode
                }).
                then(function (res) {
                    console.log(res)
                    if(res.status==200 && res.data.code==1002){
                        let [user,other] = [{},{}]
                        Object.assign(user,that.getLocationDataObj('user'), {
                            id_status: 1,
                            user_name: that.name
                        })
                        Object.assign(user,that.getLocationDataObj('other'), {
                            id_status: 1
                        })
                        that.setLocationData('user',user)
                        that.setLocationData('other',other)
                        that.$alert('vs-model',{
                            show: true,
                            msg: res.data.msg,
                            fn: function(){
                                that.$router.push({path:'/my'})
                            }
                        })
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