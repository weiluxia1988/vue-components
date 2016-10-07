<template>
  <section class="content-header">
    <h1>面包屑<small>Breadcrumb</small></h1>
  </section>
  <section class="content">
    <div class="row">
      <div class="col-md-12">
        <div class="box box-solid">
          <div class="box-header with-border">
            <i class="fa fa-text-width"></i>
            <h3 class="box-title">何时使用</h3>
          </div>
          <div class="box-body">
            <p class="text-muted">当系统拥有超过两级以上的层级结构时</p>
            <p class="text-muted">当需要告知用户『你在哪里』时</p>
            <p class="text-muted">当需要向上导航的功能时</p>
          </div>
        </div>
      </div>
    </div>
    <h2 class="page-header"><i class="fa fa-code"></i> 代码演示</h2>
    <div class="row">
      <div class="col-md-6">
        <div class="box box-success">
          <div class="box-header">
            <h3 class="box-title">基本使用</h3>
          </div>
          <div class="box-body">
            <ol class="breadcrumb">
              <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
              <li><a href="#">UI</a></li>
              <li class="active">General</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <h3 class="box-title">API</h3>
        <div class="box">
          <div class="box-header">
            <h3 class="box-title">Breadcrumb props</h3>
          </div>
          <div class="box-body">
            <table class="table table-bordered table-hover dataTable">
              <thead>
                <tr>
                  <th>属性</th>
                  <th>说明</th>
                  <th>类型</th>
                  <th>默认值</th>
                </tr>
              </thead>
              <tbody>  
                <tr>
                  <td>rcount</td>
                  <td>总条数</td>
                  <td>Number</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>pcount</td>
                  <td>总页数</td>
                  <td>Number</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>curpage</td>
                  <td>当前页</td>
                  <td>Number</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>perpage</td>
                  <td>每页显示数量</td>
                  <td>Number</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>onChange</td>
                  <td>分页回调</td>
                  <td>Function</td>
                  <td>new Function()</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
  import vBreadcrumb from "../../../components/breadcrumb";
  export default{
    components: { vBreadcrumb },
    data () {
      let self = this;
      return {
       
      }
    },
    methods: {

    }
  }
</script>