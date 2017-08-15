<template>
  <div id="app">
    <div class="container-fluid">
      <!-- 头部 -->
      <HeaderView></HeaderView>
      <!-- 中间主体内容区 -->
      <div class="section">
        <div class="row">
          <!-- 左侧菜单 -->
          <AsideView></AsideView>
          <!-- 右侧可变内容区 -->
          <MainView></MainView>
        </div>
      </div>
      <!-- 尾部 -->
      <FooterView></FooterView>
    </div>
  </div>
</template>

<script>
  import HeaderView from './components/header/Header.vue'
  import AsideView from './components/aside/Aside.vue'
  import FooterView from './components/footer/Footer.vue'
  import MainView from './components/main/Main.vue'

  export default {
    name: 'app',
    components:{
      HeaderView,
      AsideView,
      FooterView,
      MainView
    }
  }
</script>

<style>
  /* bootstrap 样式调整 */
  /*.panel-group,*/
  .navbar,
  .list-group{
    margin-bottom: 0;
  }
  a:focus, a:hover{
    text-decoration: none;
  }
  .panel-title a{
    display: block;
  }
  .table-bordered>thead>tr>td, .table-bordered>thead>tr>th{
    border-bottom-width: 1px;
  }
  .pagination span{
    cursor: pointer;
  }
  .container-fluid{
    padding-right: 0;
    padding-left: 0;
  }
  .row{
    margin-right: 0;
  }
  .container-fluid>.navbar-collapse,
  .container-fluid>.navbar-header,
  .container>.navbar-collapse,
  .container>.navbar-header{
    margin-left: 0;
    margin-right: 0;
  }
  /*.col-lg-1, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-md-1, .col-md-10, .col-md-11, .col-md-12, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-sm-1, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-xs-1, .col-xs-10, .col-xs-11, .col-xs-12, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9{
    padding-right: 0;
  }*/
  @media (min-width: 768px) {
    .navbar > .container .navbar-brand, .navbar > .container-fluid .navbar-brand {
      margin-left: 0;
    }
  }


  /* 自定义 公共样式 */
  .clear:before,
  .clear:after{
    content: '';
    display: block;
    clear: both;
    height: 0;
  }
  /*.section{
    border: 1px solid #05C8B6;
  }*/
  .icon-margin-right{
    margin-right: 5px;
  }
  table, th, td{
    text-align: center;
  }

</style>
