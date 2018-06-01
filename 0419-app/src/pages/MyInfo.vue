<template>
    <div class="myInfo">
        <div class="myInfo-t">
            <div class="myInfo-li">
                头像
                <span class="myInfo-lir myInfo-li-pic"></span>
            </div>
            <div class="myInfo-li">
                账号
                <span class="myInfo-lir myInfo-li-text">{{status.tel}}</span>
            </div>
            <router-link tag="div"
                         :to="{path:'/nameauth'}" class="myInfo-li">
                实名认证
                <span class="myInfo-lir myInfo-li-icon">{{status.realName?'已认证':'未认证'}}</span>
            </router-link>
            <router-link tag="div"
                         :to="{path:'/bindcard'}" class="myInfo-li myInfo-li-last">
                银行账户
                <span class="myInfo-lir myInfo-li-icon">{{status.bank?'已绑定':'未绑定'}}</span>
            </router-link>
        </div>
        <router-link tag="div" :to="{path:'/riskceping',query:{eva:type}}" class="myInfo-li myInfo-b myInfo-li-last">
            风险测评
            <span class="myInfo-lir myInfo-color-blue myInfo-li-icon">{{status.risk!=0?status.risk:'未测评'}}</span>
        </router-link>

    </div>
</template>

<script>
    export default {
        name: 'MyInfo',
        data () {
            return {
                msg: 'MyInfo',
                status: {
                    tel: '',
                    realName: 0,
                    bank: 0,
                    risk: 0,
                },
                type: 0
            }
        },
        created(){
            this.status.tel = this.getLocationData('other','user_phone')
            this.status.realName = this.getLocationData('other','id_status')
            this.status.bank = this.getLocationData('other','bank_status')
            this.status.risk = this.getLocationData('other','evaluation')
            if(this.status.risk=='保守型'){
                this.type = 1
            }else if(this.status.risk=='稳健型'){
                this.type = 2
            }else if(this.status.risk=='进取型'){
                this.type = 3
            }else{
                this.type = 0
            }
            console.log(this.status)
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="">

</style>
