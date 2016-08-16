<template>
  <article>
    <h1>全局提示Notify</h1>
    <section>
      <h3>演示</h3>
      <div>
        <v-button type="default" :onclick="openHandle">普通提示</v-button>
        <v-button type="default" :onclick="openSucHandle">成功提示</v-button>
        <v-button type="default" :onclick="openFailHandle">失败提示</v-button>
        <v-button type="default" :onclick="openWarnHandle">警告提示</v-button>
      </div>
      <div class="mt20">
        <v-button type="default" :onclick="toggleHandle">toggle</v-button>
        <span>duration设置为0时，就不会自动关闭</span>
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
                <td>content</td>
                <td>提示内容</td>
                <td>String</td>
                <td>''</td>
              </tr>
              <tr>
                <td>duration</td>
                <td>默认自动关闭延时，单位秒</td>
                <td>Number</td>
                <td>1.5</td>
              </tr>
              <tr>
                <td>onClose</td>
                <td>提示关闭回调</td>
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
  import vButton from "../../../components/button/Button.vue";
  import notify from "../../../components/notify";

  let s;
  export default{
    components: { vButton },
    data () {
      return {
        isOpen: false
      }
    },
    methods: {
      openHandle () {
        notify.info('info', 2, () => {
          console.log('提示关闭');
        });
      },
      openSucHandle () {
        notify.success('success');
      },
      openFailHandle () {
        notify.error('error');
      },
      openWarnHandle () {
        notify.warn('warn');
      },
      toggleHandle () {
        if(!s) s = notify.info('info', 0);
        this.isOpen = !this.isOpen;
        if(!this.isOpen) {
          s();
          s = null;
        } 
      }
    }
  }
</script>