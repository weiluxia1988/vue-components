<template>
  <article>
    <h1>加载中Loading</h1>
    <section>
      <h3>演示</h3>
      <div style="position:relative; height: 100px; width: 300px;background: rgba(0,0,0,0.05);margin-bottom:20px;">
        <v-loading :show="oLoading.show" size="small"></v-loading>
      </div>
      <div style="position:relative; height: 100px; width: 300px;background: rgba(0,0,0,0.05);margin-bottom:20px;">
        <v-loading :show="oLoading.show"></v-loading>
      </div>
      <div style="position:relative; height: 100px; width: 300px;background: rgba(0,0,0,0.05);margin-bottom:20px;">
        <v-loading :show="oLoading.show" size="big"></v-loading>
      </div>
      <div style="position:relative; height: 100px; width: 300px;background: rgba(0,0,0,0.05);">
        <v-loading
          :show="oLoading.show"
          tip="正在加载中..."
        ></v-loading>
      </div>
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
                <td>show</td>
                <td>显示状态，显示为 true，隐藏为 false，或直接设置值，如：show="true"</td>
                <td>Boolean</td>
                <td>false</td>
              </tr>
              <tr>
                <td>size</td>
                <td>设置按钮大小，可选值为default big small 或者不设</td>
                <td>String</td>
                <td>default</td>
              </tr>
              <tr>
                <td>tip</td>
                <td>显示文案</td>
                <td>String</td>
                <td>''</td>
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
  import vLoading from "../../../components/loading";

  export default{
    components: { vLoading },
    data () {
      let self = this;
      return {
        oLoading: {
          show: true,
        }
      }
    }
  }
</script>