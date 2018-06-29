<template>
    <div class="TotalAssets">
        <ve-ring class="veRing" :data="chartData" :settings="chartSettings"></ve-ring>
        <div class="tAll-body">
            <div class="tAll-li">
                <div class="tAll-lil tAll-lil1">
                    可用余额（元）
                </div>
                <div class="tAll-lir">
                    1000.00
                </div>
            </div>
            <div class="tAll-li">
                <div class="tAll-lil tAll-lil2">
                    冻结金额（元）
                </div>
                <div class="tAll-lir">
                    1000.00
                </div>
            </div>
            <div class="tAll-li">
                <div class="tAll-lil tAll-lil3">
                    待收本金（元）
                </div>
                <div class="tAll-lir">
                    1000.00
                </div>
            </div>
            <div class="tAll-li">
                <div class="tAll-lil tAll-lil4">
                    待收收益（元）
                </div>
                <div class="tAll-lir">
                    1000.00
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import VeRing from 'v-charts/lib/ring.common'
    export default {
        name: 'TotalAssets',
        data () {
            return {
                msg: 'TotalAssets',
                chartSettings: '',
                chartData: null,
                lineData: {
                    columns: ['资金类型', '占比'],
                    rows: [
                        { '资金类型': '可用余额', '占比': 1393 },
                        { '资金类型': '冻结金额', '占比': 3530 },
                        { '资金类型': '待收本金', '占比': 2923 },
                        { '资金类型': '待收收益', '占比': 923 },
                    ]
                }
            }
        },
        created(){
            this.chartSettings = {
                dimension: '资金类型',
                metrics: '占比',
                radius: [100,80],
                label: {
                    show: false,
                    position: 'outside'
                },
                backgroundColor: '#fff'
            }
            this.chartData = this.lineData
        },
        components:{
            VeRing
        }
    }
</script>
