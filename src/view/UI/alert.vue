<template>
  <article>
    <h1>警告提示Alert</h1>
    <section>
      <h3>演示</h3>
      <div>
        <v-button type="default" :onclick="openHandle">普通提示</v-button>
        <v-button type="default" :onclick="openSucHandle">成功提示</v-button>
        <v-button type="default" :onclick="openFailHandle">失败提示</v-button>
        <v-button type="default" :onclick="openWarnHandle">警告提示</v-button>
        <v-button type="default" :onclick="closeHandle">关闭all弹窗</v-button>
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
                <td>closable</td>
                <td>显示关闭按钮</td>
                <td>Boolean</td>
                <td>true</td>
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
                <td>onClose</td>
                <td>关闭时触发的回调函数</td>
                <td>Function</td>
                <td>new Function()</td>
              </tr>
              <tr>
                <td>showIcon</td>
                <td>是否显示辅助图标</td>
                <td>Boolean</td>
                <td>false</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </article>
</template>
<script>
  import vButton from "../../../components/button";
  import alert from "../../../components/alert";

  let s;
  export default{
    components: { vButton },
    data () {
      return {
        isOpen: false
      }
    },
    methods: {
      closeHandle () {
        alert.close();
      },
      openHandle () {
        alert.info('info', 'lululululululu');
      },
      openSucHandle () {
        alert.success('success', 'lululululululu');
      },
      openFailHandle () {
        alert.error('error', 'lululululululu');
      },
      openWarnHandle () {
        alert.warn('warn', 'lululululululu');
      }
    }
  }
</script>