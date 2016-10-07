<template>
  <article>
    <h1>通知提醒框Message</h1>
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
                <td>key</td>
                <td>唯一标志</td>
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
<script>
  import vButton from "../../../components/button";
  import message from "../../../components/message";

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
        message.info('info', '我的饿我的为代号为UI樊红伟护肤文化服务额呵呵为孵化范围', 2, () => {
          console.log('提示关闭');
        });
      },
      openSucHandle () {
        message.success('success');
      },
      openFailHandle () {
        message.error('error');
      },
      openWarnHandle () {
        message.warn('warn');
      },
      toggleHandle () {
        if(!s) s = message.info('info', '我的饿我的为代号为UI樊红伟护肤文化服务额呵呵为孵化范围', 0);
        this.isOpen = !this.isOpen;
        if(!this.isOpen) {
          s();
          s = null;
        } 
      }
    }
  }
</script>