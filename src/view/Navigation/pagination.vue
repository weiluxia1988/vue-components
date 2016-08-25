<template>
  <article>
    <h1>分页Pagination</h1>
    <section>
      <h3>演示</h3>
      <v-pagination
        :on-change="onChange"
        :curpage="pagination.curpage"
        :rcount="pagination.rcount"
        :pcount="pagination.pcount"
      >
      </v-pagination>
    </section>
    <section>
      <h3>使用</h3>
      <div class="box">
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
    </section>
  </article>
</template>
<style>
  h1{
    color: #3c8dbc;
    font-weight: 700;
  }
</style>
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