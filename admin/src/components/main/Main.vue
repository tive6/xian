<template>
  <div class="main col-lg-10 col-md-8 col-sm-8">
    <!-- 内容区顶部-按钮组:全局组件 -->
    <!--<NavBtn></NavBtn>-->
    <!-- 主体路由变化展示区 -->
    <!-- keep-alive 不重复加载 -->
    <keep-alive>
      <!-- 路由 -->
      <router-view class="router-view"></router-view>
    </keep-alive>
    <!--<ContentView></ContentView>-->
    <!-- 内容区底部-数据分页器:全局组件 -->
  </div>

</template>

<script>

//  import PaginationView from './pagination/Pagination.vue'
  export default{
    components:{
//      PaginationView
    }
  };

</script>

<style scoped>
@media (max-width: 768px){
  .main{
  }
}
</style>
