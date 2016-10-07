<template>
  <section class="content-header">
    <h1>加载中<small>Loading</small></h1>
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
            <p class="text-muted">页面局部处于等待异步数据或正在渲染过程时，合适的加载动效会有效缓解用户的焦虑。</p>
            <pre>
            </pre>
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
            <div style="height: 100px;">
              <v-loading :show="oLoading.show"></v-loading>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="box box-success">
          <div class="box-header">
            <h3 class="box-title">各种大小-small</h3>
          </div>
          <div class="box-body">
            <div style="height: 100px;">
              <v-loading :show="oLoading.show" size="small"></v-loading>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="box box-success">
          <div class="box-header">
            <h3 class="box-title">各种大小-big</h3>
          </div>
          <div class="box-body">
            <div style="height: 100px;">
              <v-loading :show="oLoading.show" size="big"></v-loading>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="box box-success">
          <div class="box-header">
            <h3 class="box-title">自定义文案</h3>
          </div>
          <div class="box-body">
            <div style="height: 100px;">
              <v-loading
                :show="oLoading.show"
                tip="正在加载中..."
              ></v-loading>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <h3 class="box-title">API</h3>
        <div class="box">
          <div class="box-header">
            <h3 class="box-title">checkbox props</h3>
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
      </div>
    </div>
  </section>
</template>
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