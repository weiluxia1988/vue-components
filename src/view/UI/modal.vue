<template>
  <article>
    <h1>对话框Modal</h1>
    <section>
      <h3>演示</h3>
      <div>
        <v-button type="default" :onclick="openModal">点击</v-button>
        <span>按ESC或者点击遮罩层都可以关闭会话框</span>
        <v-modal
          :show.sync="oModal.show"
          :width="oModal.width"
          :title="oModal.title"
          :confirm-loading="oModal.confirmLoading"
          :on-cancel="oModal.onCancel"
          :on-ok="oModal.onOk"
        >
        </v-modal>
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
                <td>对话框是否可见</td>
                <td>Boolean</td>
                <td>false</td>
              </tr>
              <tr>
                <td>confirmLoading</td>
                <td>确定按钮 loading</td>
                <td>Boolean</td>
                <td>false</td>
              </tr>
              <tr>
                <td>title</td>
                <td>标题</td>
                <td>String</td>
                <td>''</td>
              </tr>
              <tr>
                <td>okText</td>
                <td>确定按钮文案</td>
                <td>String</td>
                <td>确定</td>
              </tr>
              <tr>
                <td>disabled</td>
                <td>取消按钮文案</td>
                <td>String</td>
                <td>取消</td>
              </tr>
              <tr>
                <td>onOk</td>
                <td>点击确定回调</td>
                <td>Function</td>
                <td>new Function()</td>
              </tr>
              <tr>
                <td>onCancel</td>
                <td>点击遮罩层或右上角叉或取消按钮的回调</td>
                <td>Function</td>
                <td>new Function()</td>
              </tr>
              <tr>
                <td>width</td>
                <td>宽度</td>
                <td>Number</td>
                <td>600</td>
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
  import vModal from "../../../components/modal";

  export default{
    components: { vButton, vModal },
    data () {
      let self = this;
      return {
        oModal: {
          show: false,
          title: '会话框',
          width: 400,
          confirmLoading: false,
          onCancel: this.cancelTypeCallback,
          onOk: this.saveTypeCallback
        }
      }
    },
    methods: {
      openModal () {
        this.oModal.show = true;
      }
    }
  }
</script>