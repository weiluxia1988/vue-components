<template>
  <article style="height: 2000px;">
    <h1>固钉Affix</h1>
    <p>当内容区域比较长，需要滚动页面时，这部分内容对应的操作或者导航需要在滚动范围内始终展现。常用于侧边菜单和按钮组合。页面可视范围过小时，慎用此功能以免遮挡页面内容。</p>
    <section>
      <h3>演示</h3>
      <div style="margin-bottom: 50px;">
        <v-affix>
          <v-button type="primary">固定在顶部</v-button>  
        </v-affix>
      </div>
      <div style="margin-bottom: 50px;text-align:center">
        <v-affix offset-top='75'>
          <v-button type="primary">固定在距离顶部 75px 的位置</v-button>  
        </v-affix>
      </div>
      <div style="height:100px">
      </div>
      <div style="text-align:right;margin-bottom: 150px;">
        <v-affix offset-bottom='20'>
          <v-button type="primary">固定在距离底部 20px 的位置</v-button>  
        </v-affix>
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
  import vButton from "../../../components/button";
  import vAffix from "../../../components/affix";
  export default{
    components: { vButton, vAffix }
  }
</script>