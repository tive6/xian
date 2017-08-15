<template>
    <div class="first">

        <NavBtn :btnArr="btnList"></NavBtn>

        <div class="table-responsive">
            <table class="table table-bordered table-hover table-condensed">
                <thead>
                <tr>
                    <th><input checked="checked" type="checkbox"/></th>
                    <th>用户名</th>
                    <th>真实姓名</th>
                    <th>所属角色</th>
                    <th>所属部门</th>
                    <th>邮箱地址</th>
                    <th>创建时间</th>
                    <th>最后修改时间</th>
                    <th>状态</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(val,index) in list">
                    <td v-html="val.a"></td>
                    <td>{{val.b}}</td>
                    <td>{{val.c}}</td>
                    <td>{{val.d}}</td>
                    <td>{{val.e}}</td>
                    <td>{{val.f}}</td>
                    <td>{{val.g}}</td>
                    <td>{{val.h}}</td>
                    <td>{{val.i}}</td>
                </tr>
                </tbody>

            </table>
        </div>

      <Pagination></Pagination>

      <div class="modelBox">
        <!-- Button trigger modal -->

        <!-- Modal -->
        <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" id="myModalLabel">添加</h4>
              </div>
              <div class="modal-body">

                <form class="form-horizontal">
                  <div class="form-group">
                    <label class="col-sm-2 control-label">图片</label>
                    <div class="col-sm-10">
                      <p class="form-control-static">email@example.com</p>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="" class="col-sm-2 control-label">Password</label>
                    <div class="col-sm-10">
                      <input type="password" class="form-control" placeholder="Password">
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="col-sm-2 control-label">Email</label>
                    <div class="col-sm-10">
                      <p class="form-control-static">email@example.com</p>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="" class="col-sm-2 control-label">Password</label>
                    <div class="col-sm-10">
                      <input type="password" class="form-control" placeholder="Password">
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="col-sm-2 control-label">Email</label>
                    <div class="col-sm-10">
                      <p class="form-control-static">email@example.com</p>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="" class="col-sm-2 control-label">Password</label>
                    <div class="col-sm-10">
                      <input type="password" class="form-control" id="" placeholder="Password">
                    </div>
                  </div>
                </form>

              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
</template>

<script>

    export default{
        data:function(){
            return {
              checked: true,
                btnList:{
                    edit: true,
                    add: true,
                    del: true,
                    look: true,
                    refresh: true,
                    checkAll: true,
                    deselectAll: true
                },
                list:[
                    {
                        a:'<input type="checkbox"/>',
                        b:222,
                        c:333,
                        d:444,
                        e:555,
                        f:666,
                        g:777,
                        h:888,
                        i:999
                    },
                    {
                        a:'<input type="checkbox"/>',
                        b:222,
                        c:333,
                        d:444,
                        e:555,
                        f:666,
                        g:777,
                        h:888,
                        i:999
                    },
                    {
                        a:'<input type="checkbox"/>',
                        b:222,
                        c:333,
                        d:444,
                        e:555,
                        f:666,
                        g:777,
                        h:888,
                        i:999
                    },
                    {
                        a:'<input type="checkbox"/>',
                        b:222,
                        c:333,
                        d:444,
                        e:555,
                        f:666,
                        g:777,
                        h:888,
                        i:999
                    },
                    {
                        a:'<input type="checkbox"/>',
                        b:222,
                        c:333,
                        d:444,
                        e:555,
                        f:666,
                        g:777,
                        h:888,
                        i:999
                    },
                    {
                        a:'<input type="checkbox"/>',
                        b:222,
                        c:333,
                        d:444,
                        e:555,
                        f:666,
                        g:777,
                        h:888,
                        i:999
                    },
                    {
                        a:'<input type="checkbox"/>',
                        b:222,
                        c:333,
                        d:444,
                        e:555,
                        f:666,
                        g:777,
                        h:888,
                        i:999
                    },
                ]
            }
        }
    };
</script>

<style>

</style>
