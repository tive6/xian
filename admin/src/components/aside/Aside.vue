<template>
  <div class="aside col-lg-2 col-md-4 col-sm-4">

    <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
      <div class="panel panel-default">
        <div class="panel-heading" role="tab" id="headingOne">
          <h4 class="panel-title">
            <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              <span class="glyphicon glyphicon-wrench icon-margin-right"></span>
              系统管理
            </a>
          </h4>
        </div>
        <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
          <div class="panel-body">
            <div class="list-group">

              <!--
                <router-link to="/home" tag="li" active-class="active">
                    <a href="javascript:;">首页</a>
                </router-link>
              -->
              <router-link to="/first" class="list-group-item active">
                <span class="glyphicon glyphicon-user icon-margin-right"></span>
                用户管理
              </router-link>
              <router-link to="/second" class="list-group-item">
                <span class="glyphicon glyphicon-user icon-margin-right"></span>
                部门管理
              </router-link>
              <router-link to="/second" class="list-group-item">
                <span class="glyphicon glyphicon-user icon-margin-right"></span>
                角色管理
              </router-link>
              <router-link to="/second" class="list-group-item">
                <span class="glyphicon glyphicon-user icon-margin-right"></span>
                权限管理
              </router-link>
              <router-link to="/second" class="list-group-item">
                <span class="glyphicon glyphicon-user icon-margin-right"></span>
                菜单管理
              </router-link>
              <a href="#" class="list-group-item">
                <span class="glyphicon glyphicon-user icon-margin-right"></span>
                菜单管理
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="panel panel-default">
        <div class="panel-heading" role="tab" id="headingTwo">
          <h4 class="panel-title">
            <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              企业管理
            </a>
          </h4>
        </div>
        <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
          <div class="panel-body">
            <div class="list-group">
              <a href="#" class="list-group-item active">
                <span class="glyphicon glyphicon-user icon-margin-right"></span>
                用户管理
              </a>
              <a href="#" class="list-group-item">
                <span class="glyphicon glyphicon-user icon-margin-right"></span>
                部门管理
              </a>
              <a href="#" class="list-group-item">
                <span class="glyphicon glyphicon-user icon-margin-right"></span>
                角色管理
              </a>
              <a href="#" class="list-group-item">
                <span class="glyphicon glyphicon-user icon-margin-right"></span>
                权限管理
              </a>
              <a href="#" class="list-group-item">
                <span class="glyphicon glyphicon-user icon-margin-right"></span>
                菜单管理
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="panel panel-default">
        <div class="panel-heading" role="tab" id="headingThree">
          <h4 class="panel-title">
            <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              用户管理
            </a>
          </h4>
        </div>
        <div id="collapseThree" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
          <div class="panel-body">
            <div class="list-group">
              <a href="#" class="list-group-item active">
                <span class="glyphicon glyphicon-user icon-margin-right"></span>
                用户管理
              </a>
              <a href="#" class="list-group-item">
                <span class="glyphicon glyphicon-user icon-margin-right"></span>
                部门管理
              </a>
              <a href="#" class="list-group-item">
                <span class="glyphicon glyphicon-user icon-margin-right"></span>
                角色管理
              </a>
              <a href="#" class="list-group-item">
                <span class="glyphicon glyphicon-user icon-margin-right"></span>
                权限管理
              </a>
              <a href="#" class="list-group-item">
                <span class="glyphicon glyphicon-user icon-margin-right"></span>
                菜单管理
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="panel panel-default">
        <div class="panel-heading" role="tab" id="headingThree">
          <h4 class="panel-title">
            <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              用户管理
            </a>
          </h4>
        </div>
        <div id="collapseThree" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
          <div class="panel-body">
            <div class="list-group">
              <a href="#" class="list-group-item active">
                <span class="glyphicon glyphicon-user icon-margin-right"></span>
                用户管理
              </a>
              <a href="#" class="list-group-item">
                <span class="glyphicon glyphicon-user icon-margin-right"></span>
                部门管理
              </a>
              <a href="#" class="list-group-item">
                <span class="glyphicon glyphicon-user icon-margin-right"></span>
                角色管理
              </a>
              <a href="#" class="list-group-item">
                <span class="glyphicon glyphicon-user icon-margin-right"></span>
                权限管理
              </a>
              <a href="#" class="list-group-item">
                <span class="glyphicon glyphicon-user icon-margin-right"></span>
                菜单管理
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default{};
</script>

<style scoped>
.aside{
  border-right: 1px solid #e7e7e7;
}

</style>
