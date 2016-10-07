<template>
  <article style="height: 2000px;">
    <h1>确认弹框Confirm</h1>
    <section>
      <h3>演示</h3>
      <v-button type="default" :onclick="openHandle">普通提示</v-button>
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
                <td>确认框的描述</td>
                <td>String</td>
                <td>/</td>
              </tr>
              <tr>
                <td>onConfirm</td>
                <td>点击确认的回调</td>
                <td>function</td>
                <td>/</td>
              </tr>
              <tr>
                <td>onCancel</td>
                <td>点击取消的回调</td>
                <td>function</td>
                <td>/</td>
              </tr>
              <tr>
                <td>okText</td>
                <td>确认按钮文字</td>
                <td>String</td>
                <td>确定</td>
              </tr>
               <tr>
                <td>cancelText</td>
                <td>取消按钮文字</td>
                <td>String</td>
                <td>取消</td>
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
  import confirm from "../../../components/confirm";
  export default{
    components: { vButton },
    methods: {
      openHandle () {
        confirm.info({
          title: '提示',
          content: '你确定要删除吗？',
          onCancel () {
            console.log('cancel');
          },
          onConfirm () {
            console.log('confirm');
          }
        });
      }
    }
  }
</script>