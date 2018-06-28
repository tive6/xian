<template>
    <div class="fx paddingB">
        <div class="fx-head clear">
            <div class="fx-hli fx-hli-active">
                <a href="" class="fx-hli-inner">推荐</a>
            </div>
            <div class="fx-hli">
                <a href="" class="fx-hli-inner">关注</a>
            </div>
            <div class="fx-hli">
                <a href="" class="fx-hli-inner">圈子</a>
            </div>
        </div>
        <div class="fx-body">
            <div class="fx-b fx-b1">
                <div class="fx-search">
                    <input type="text" class="fx-search-int" placeholder="搜索">
                </div>
                <div class="fx-recommend">
                    <div class="fx-recommend-outer">
                        <h3 class="fx-recom-title">个性推荐</h3>
                        <div class="fx-recommend-inner clear">
                            <div class="fx-recommend-li">
                                <div class="fx-recommend-li-title">
                                    <img src="./../assets/img/my/my-icon-08.png" alt="" class="fx-recommend-li-icon">
                                    过敏
                                </div>
                                <div class="fx-recommend-li-desc">过敏综合征</div>
                            </div>
                            <div class="fx-recommend-li">
                                <div class="fx-recommend-li-title">
                                    <img src="./../assets/img/my/my-icon-09.png" alt="" class="fx-recommend-li-icon">
                                    过敏
                                </div>
                                <div class="fx-recommend-li-desc">过敏综合征</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="fx-ask">
                    <div class="fx-ask-head">
                        <img src="./../assets/img/my/icon-realize.png" alt="" class="fx-ask-hl">
                        <span class="fx-ask-hm">问健康</span>
                        <span class="fx-ask-hr">去提问</span>
                    </div>
                    <div class="fx-ask-body">

                    </div>
                </div>
            </div>
            <div class="fx-b fx-b2">

            </div>
            <div class="fx-b fx-b3"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Faxian',
        data () {
            return {
                msg: 'Faxian'
            }
        }
    }
</script>
