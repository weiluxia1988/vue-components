<template>
  <article>
    <h1>弹出框Popover</h1>
    <section>
      <h3>演示</h3>
      <div style="text-align:center">
        <v-popover disabled :on-visible-change="change" content='And heres some amazing conten' title="标题" placement="leftTop">
          <v-button type="default">click-disabled-左上</v-button>
        </v-popover>
        <v-popover show="true"  :on-visible-change="change" content='And heres some amazing conten' title="标题" placement="left" trigger="hover">
          <a href="http://www.baiud.com">hover-左边</a>
          <!-- <v-button type="default">hover-左边</v-button> -->
        </v-popover>
        <v-popover content='And heres some amazing conten' title="标题" placement="leftBottom">
          <input type="text" value="foucs-左下">
        </v-popover>
        <v-popover title="标题" placement="topLeft">
          <div slot="content">
            <p>And here's some amazing content. It's very engaging. Right?</p>
            <p>内容</p>
          </div>
          <v-button type="default" :onclick="openFailHandle">点我-上左</v-button>
        </v-popover>
        <v-popover title="标题" placement="top">
          <div slot="content">
            <p>And here's some amazing content. It's very engaging. Right?</p>
            <p>内容</p>
          </div>
          <v-button type="default" :onclick="openFailHandle">点我-上边</v-button>
        </v-popover>
        <v-popover title="标题" placement="topRight">
          <div slot="content">
            <p>And here's some amazing content. It's very engaging. Right?</p>
            <p>内容</p>
          </div>
          <v-button type="default" :onclick="openFailHandle">点我-上右</v-button>
        </v-popover>
        <v-popover title="标题" placement="rightTop">
          <div slot="content">
            <p>And here's some amazing content. It's very engaging. Right?</p>
            <p>内容</p>
          </div>
          <v-button type="default">点我-右上</v-button>
        </v-popover>
        <v-popover title="标题" placement="right">
          <div slot="content">
            <p>And here's some amazing content. It's very engaging. Right?</p>
            <p>内容</p>
          </div>
          <v-button type="default">点我-右</v-button>
        </v-popover>
        <v-popover title="标题" placement="rightBottom">
          <div slot="content">
            <p>And here's some amazing content. It's very engaging. Right?</p>
            <p>内容</p>
          </div>
          <v-button type="default">点我-右下</v-button>
        </v-popover>
        <v-popover title="标题" placement="bottomLeft">
          <div slot="content">
            <p>And here's some amazing content. It's very engaging. Right?</p>
            <p>内容</p>
          </div>
          <v-button type="default" :onclick="openWarnHandle">点我-下左</v-button>
        </v-popover>
        <v-popover title="标题" placement="bottom">
          <div slot="content">
            <p>And here's some amazing content. It's very engaging. Right?</p>
            <p>内容</p>
          </div>
          <v-button type="default" :onclick="openWarnHandle">点我-下</v-button>
        </v-popover>
        <v-popover title="标题" placement="bottomRight">
          <div slot="content">
            <p>And here's some amazing content. It's very engaging. Right?</p>
            <p>内容</p>
          </div>
          <v-button type="default" :onclick="openWarnHandle">点我-下右</v-button>
        </v-popover>
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
                <td>trigger</td>
                <td>触发行为，可选 hover/focus/click</td>
                <td>String</td>
                <td>click</td>
              </tr>
              <tr>
                <td>placement</td>
                <td>气泡框位置，可选 top/topLeft/topRight/left/leftTop/leftBottom/right/rightTop/rightBottom/bottom/bottomLeft/bottomRight</td>
                <td>String</td>
                <td>top</td>
              </tr>
              <tr>
                <td>title</td>
                <td>标题</td>
                <td>String</td>
                <td>''</td>
              </tr>
              <tr>
                <td>content</td>
                <td>内容</td>
                <td>String</td>
                <td>''</td>
              </tr>
              <tr>
                <td>onVisibleChange</td>
                <td>显示隐藏改变的回调</td>
                <td>function</td>
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
  import vPopover from "../../../components/popover";

  export default{
    components: { vButton, vPopover },
    data () {
      return {}
    },
    methods: {
      change (flag) {
        console.log('是否打开弹窗：' + flag);
      }
    }
  }
</script>