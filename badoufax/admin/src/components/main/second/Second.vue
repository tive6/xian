<template>
    <div class="second">

        <NavBtn :btnArr="btnList"></NavBtn>

        <div class="table-responsive">
            <table class="table table-bordered table-hover table-condensed">
                <thead>
                <tr>
                    <th><input type="checkbox"/></th>
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

    </div>
</template>

<script>

    export default{
        data:function(){
            return {
                btnList:{
                    edit: true,
                    add: true,
                    del: true,
                    look: true,
                    refresh: true,
                    download: true,
                    upload: true
                },
                list:[
                    {
                        a:'<input type="checkbox"/>',
                        b:22211,
                        c:33311,
                        d:44411,
                        e:55511,
                        f:66611,
                        g:77711,
                        h:88811,
                        i:99911
                    },
                    {
                        a:'<input type="checkbox"/>',
                        b:22211,
                        c:33311,
                        d:44411,
                        e:55511,
                        f:66611,
                        g:77711,
                        h:88811,
                        i:99911
                    },
                    {
                        a:'<input type="checkbox"/>',
                        b:22211,
                        c:33311,
                        d:44411,
                        e:55511,
                        f:66611,
                        g:77711,
                        h:88811,
                        i:99911
                    },
                    {
                        a:'<input type="checkbox"/>',
                        b:22211,
                        c:33311,
                        d:44411,
                        e:55511,
                        f:66611,
                        g:77711,
                        h:88811,
                        i:99911
                    },
                    {
                        a:'<input type="checkbox"/>',
                        b:22211,
                        c:33311,
                        d:44411,
                        e:55511,
                        f:66611,
                        g:77711,
                        h:88811,
                        i:99911
                    },
                ]
            }
        }
    };
</script>

<style>

</style>

