<template>
  <section class="content-header">
    <h1>固钉<small>Affix</small></h1>
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
            <p class="text-muted">当内容区域比较长，需要滚动页面时，这部分内容对应的操作或者导航需要在滚动范围内始终展现。常用于侧边菜单和按钮组合。页面可视范围过小时，慎用此功能以免遮挡页面内容。</p>
            <pre>
              <code class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"position: fixed;top:0;left:0"</span>&gt;</span>固定<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></code>
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
            <v-affix>
              <v-button type="primary">固定在顶部</v-button>  
            </v-affix>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="box box-success">
          <div class="box-header">
            <h3 class="box-title">基本使用</h3>
          </div>
          <div class="box-body">
            <v-affix offset-top='75'>
              <v-button type="primary">固定在距离顶部 75px 的位置</v-button>  
            </v-affix>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="box box-success">
          <div class="box-header">
            <h3 class="box-title">基本使用</h3>
          </div>
          <div class="box-body">
            <v-affix offset-bottom='20'>
              <v-button type="primary">固定在距离底部 20px 的位置</v-button>  
            </v-affix>
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
                  <td>offsetTop</td>
                  <td>距离窗口顶部达到指定偏移量后触发，注offsetTop与offsetBottom只能选其一</td>
                  <td>Number</td>
                  <td>/</td>
                </tr>
                <tr>
                  <td>offsetBottom</td>
                  <td>距离窗口底部达到指定偏移量后触发，注offsetTop与offsetBottom只能选其一</td>
                  <td>Number</td>
                  <td>/</td>
                </tr>
                <tr>
                  <td>onChange</td>
                  <td>固定状态改变时触发的回调函数</td>
                  <td>Function</td>
                  <td>/</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div style="height: 1000px"></div>
  </section>
</template>
<script>
  import vButton from "../../../components/button";
  import vAffix from "../../../components/affix";
  export default{
    components: { vButton, vAffix }
  }
</script>