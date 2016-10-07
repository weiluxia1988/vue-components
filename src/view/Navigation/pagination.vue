<template>
  <section class="content-header">
    <h1>分页<small>Pagination</small></h1>
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
            <p class="text-muted">当加载/渲染所有数据将花费很多时间时</p>
            <p class="text-muted">可切换页码浏览数据</p>
          </div>
        </div>
      </div>
    </div>
    <h2 class="page-header"><i class="fa fa-code"></i> 代码演示</h2>
    <div class="row">
      <div class="col-md-6">
        <div class="box box-success">
          <div class="box-header">
            <h3 class="box-title">基本使用-medium</h3>
          </div>
          <div class="box-body">
            <v-pagination
              :on-change="onChange"
              :curpage="pagination.curpage"
              :rcount="pagination.rcount"
              :pcount="pagination.pcount"
            >
            </v-pagination>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="box box-success">
          <div class="box-header">
            <h3 class="box-title">大小-big</h3>
          </div>
          <div class="box-body">
            <v-pagination
              size="big"
              :on-change="onChange"
              :curpage="pagination.curpage"
              :rcount="pagination.rcount"
              :pcount="pagination.pcount"
            >
            </v-pagination>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="box box-success">
          <div class="box-header">
            <h3 class="box-title">大小-small</h3>
          </div>
          <div class="box-body">
            <v-pagination
              size="small"
              :on-change="onChange"
              :curpage="pagination.curpage"
              :rcount="pagination.rcount"
              :pcount="pagination.pcount"
            >
            </v-pagination>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <h3 class="box-title">API</h3>
        <div class="box">
          <div class="box-header">
            <h3 class="box-title">Pagination props</h3>
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
                  <td>size</td>
                  <td>样式大小,可选值为medium big small 或者不设</td>
                  <td>String</td>
                  <td>medium</td>
                </tr>
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
  import vPagination from "../../../components/pagination";

  export default{
    components: { vPagination },
    data () {
      let self = this;
      return {
        pagination: {
          curpage: 2,
          pcount: 10,
          rcount: 100
        }
      }
    },
    methods: {
      onChange (curpage) {
        console.log('当前页：' + curpage);
      }
    }
  }
</script>