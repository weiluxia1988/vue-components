<template>
  <article>
    <h1>工具提示Tooltip</h1>
    <section>
      <h3>演示</h3>
      <div style="text-align:center">
        <v-tooltip disabled title="标题标题标题" placement="leftTop">
          <v-button type="default">点我-左上</v-button>
        </v-tooltip>
        <v-tooltip title="标题标题标题" placement="left">
          <v-button type="default">点我-左边</v-button>
        </v-tooltip>
        <v-tooltip title="标题标题标题" placement="leftBottom">
          <v-button type="default">点我-左下</v-button>
        </v-tooltip>
        <v-tooltip title="标题标题标题标题标题标题标题标题标题标题标题标题" placement="topLeft">
          <v-button type="default">点我-上左</v-button>
        </v-tooltip>
        <v-tooltip title="标题标题标题" placement="top">
          <v-button type="default">点我-上边</v-button>
        </v-tooltip>
        <v-tooltip title="标题标题标题" placement="topRight">
          <v-button type="default">点我-上右</v-button>
        </v-tooltip>
        <v-tooltip title="标题标题标题" placement="rightTop">
          <v-button type="default">点我-右上</v-button>
        </v-tooltip>
        <v-tooltip title="标题标题标题" placement="right">
          <v-button type="default">点我-右</v-button>
        </v-tooltip>
        <v-tooltip title="标题标题标题" placement="rightBottom">
          <v-button type="default">点我-右下</v-button>
        </v-tooltip>
        <v-tooltip title="标题标题标题" placement="bottomLeft">
          <v-button type="default">点我-下左</v-button>
        </v-tooltip>
        <v-tooltip title="标题标题标题" placement="bottom">
          <v-button type="default">点我-下</v-button>
        </v-tooltip>
        <v-tooltip title="标题标题标题标题标题" placement="bottomRight">
          <v-button type="default">点我-下右</v-button>
        </v-tooltip>
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
                <td>disabled</td>
                <td>是否禁用</td>
                <td>boolean</td>
                <td>false</td>
              </tr>
              <tr>
                <td>title</td>
                <td>提示内容</td>
                <td>String</td>
                <td>''</td>
              </tr>
              <tr>
                <td>placement</td>
                <td>气泡框位置，可选 top/topLeft/topRight/left/leftTop/leftBottom/right/rightTop/rightBottom/bottom/bottomLeft/bottomRight</td>
                <td>String</td>
                <td>top</td>
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
  import vTooltip from "../../../components/tooltip";

  export default{
    components: { vButton, vTooltip },
    data () {
      return {
      }
    },
    methods: {
      change (flag) {
        console.log('是否打开弹窗：' + flag);
      }
    }
  }
</script>