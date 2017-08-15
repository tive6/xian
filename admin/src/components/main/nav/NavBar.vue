<template>
  <div class="main-nav">

    <!--<div class="">
        <a href="#" class="btn btn-primary btn-lg disabled" role="button">
            Primary link
        </a>
        <button type="button" class="btn btn-default" aria-label="Left Align">
            <span class="glyphicon glyphicon-align-left" aria-hidden="true"></span>
        </button>

        <button type="button" class="btn btn-default btn-lg">
            <span class="glyphicon glyphicon-star" aria-hidden="true"></span> Star
        </button>
    </div>-->

    <div class="btn-toolbar" role="toolbar" aria-label="...">
      <button v-show="newBtnList.edit" type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">
        <span class="glyphicon glyphicon-edit" aria-hidden="true"></span> 编辑
      </button>
      <button v-show="newBtnList.add" type="button" class="btn btn-default">
        <span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> 增加
      </button>
      <button v-show="newBtnList.del" type="button" class="btn btn-default">
        <span class="glyphicon glyphicon-minus-sign" aria-hidden="true"></span> 删除
      </button>
      <button v-show="newBtnList.look" type="button" class="btn btn-default">
        <span class="glyphicon glyphicon-zoom-in" aria-hidden="true"></span> 查看
      </button>
      <button v-show="newBtnList.refresh" type="button" class="btn btn-default">
        <span class="glyphicon glyphicon-refresh" aria-hidden="true"></span> 刷新
      </button>
      <button v-show="newBtnList.checkAll" type="button" class="btn btn-default">
        <span class="glyphicon glyphicon-ok-circle" aria-hidden="true"></span> 全选
      </button>
      <button v-show="newBtnList.deselectAll" type="button" class="btn btn-default">
        <span class="glyphicon glyphicon-remove-circle" aria-hidden="true"></span> 取消
      </button>
      <button v-show="newBtnList.folderClose" type="button" class="btn btn-default">
        <span class="glyphicon glyphicon-folder-close" aria-hidden="true"></span> 折叠
      </button>
      <button v-show="newBtnList.folderOpen" type="button" class="btn btn-default">
        <span class="glyphicon glyphicon-folder-open" aria-hidden="true"></span> 展开
      </button>
      <button v-show="newBtnList.download" type="button" class="btn btn-default">
        <span class="glyphicon glyphicon-save" aria-hidden="true"></span> 下载
      </button>
      <button v-show="newBtnList.upload" type="button" class="btn btn-default">
        <span class="glyphicon glyphicon-open" aria-hidden="true"></span> 上传
      </button>
      <button v-show="newBtnList.imt" type="button" class="btn btn-default">
        <span class="glyphicon glyphicon-import" aria-hidden="true"></span> 导入
      </button>
      <button v-show="newBtnList.ext" type="button" class="btn btn-default">
        <span class="glyphicon glyphicon-export" aria-hidden="true"></span> 导出
      </button>
      <button v-show="newBtnList.print" type="button" class="btn btn-default">
        <span class="glyphicon glyphicon-print" aria-hidden="true"></span> 打印
      </button>
      <button v-show="newBtnList.heart" type="button" class="btn btn-default">
        <span class="glyphicon glyphicon-heart" aria-hidden="true"></span> 收藏
      </button>
      <button v-show="newBtnList.paperclip" type="button" class="btn btn-default">
        <span class="glyphicon glyphicon-paperclip" aria-hidden="true"></span> 附件
      </button>
      <button v-show="newBtnList.yen" type="button" class="btn btn-default">
        <span class="glyphicon glyphicon-yen" aria-hidden="true"></span> 费率
      </button>
      <button v-show="newBtnList.filter" type="button" class="btn btn-default">
        <span class="glyphicon glyphicon-filter" aria-hidden="true"></span> 过滤
      </button>
      <button v-show="newBtnList.send" type="button" class="btn btn-default">
        <span class="glyphicon glyphicon-send" aria-hidden="true"></span> 发布
      </button>
    </div>
  </div>
</template>

<script>

  export default{
    props:{
      btnArr:{
        type: Object
      }
    },
    data:function(){
      return {
        btnList:{
          edit: false,
          add: false,
          del: false,
          look: false,
          refresh: false,
          checkAll: false,
          deselectAll: false,
          folderOpen: false,
          folderClose: false,
          download: false,
          upload: false,
          imt: false,
          ext: false,
          print: false,
          heart: false,
          paperclip: false,
          yen: false,
          filter: false,
          send: false
        },
        newBtnList:{}
      }
    },
    components:{

    },
    created:function(){
      for(var i in this.btnList){
        for(var j in this.btnArr){
          this.newBtnList[i] = this.btnArr[i] || this.btnList[j]
        }
      }
//      console.log(this.newBtnList)
    },
    mounted:function(){

    }
  };
</script>

<style scoped>
  .btn-toolbar>.btn, .btn-toolbar>.btn-group, .btn-toolbar>.input-group{
    margin-top: 10px;
    margin-bottom: 10px;
  }

</style>
