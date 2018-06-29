<template>
    <div class="rechargeRc">
        <div class="rechargeRc-li clear">
            <div class="rechargeRc-lil">
                <div class="rechargeRc-lil-order">订单号：
                    <span class="rechargeRc-lil-num">2018051112131415</span>
                </div>
                <h3 class="rechargeRc-lil-status">充值成功</h3>
            </div>
            <div class="rechargeRc-lir">
                <h4 class="rechargeRc-lir-time">2018-05-10 12:30</h4>
                <h3 class="rechargeRc-lir-sum rechargeRc-lir-sum-success">+100.00</h3>
            </div>
        </div>
        <div class="rechargeRc-li clear">
            <div class="rechargeRc-lil">
                <div class="rechargeRc-lil-order">订单号：
                    <span class="rechargeRc-lil-num">2018051112131415</span>
                </div>
                <h3 class="rechargeRc-lil-status">充值成功</h3>
            </div>
            <div class="rechargeRc-lir">
                <h4 class="rechargeRc-lir-time">2018-05-10 12:30</h4>
                <h3 class="rechargeRc-lir-sum rechargeRc-lir-sum-failed">100.00</h3>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'RechargeRecord',
        data () {
            return {
                msg: 'Welcome'
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="">

</style>
