<template>
  <article>
    <h1>按钮Button</h1>
    <section>
      <h3>演示</h3>
      <div>
        <v-button type="default">default</v-button>
        <v-button type="primary" :loading="oButton.btnLoading">loading</v-button>
        <v-button type="primary" size="big">Primary</v-button>
        <v-button type="success">success</v-button>
        <v-button type="info">info</v-button>
        <v-button type="danger">danger</v-button>
        <v-button type="warn" @click="clickHandle">warning</v-button>
        <v-button type="warn" shape="flat" disabled="true">warning</v-button>
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
                <td>type</td>
                <td>设置按钮类型，可选值为default primary success info danger warn 或者不设</td>
                <td>String</td>
                <td>default</td>
              </tr>
              <tr>
                <td>size</td>
                <td>设置按钮大小，可选值为default big small xSmall 或者不设</td>
                <td>String</td>
                <td>default</td>
              </tr>
              <tr>
                <td>shape</td>
                <td>设置按钮形状，可选值为default flat 或者不设</td>
                <td>String</td>
                <td>default</td>
              </tr>
              <tr>
                <td>loading</td>
                <td>设置按钮载入状态，存在为 true，不存在为 false，或直接设置值，如：loading="true"</td>
                <td>Boolean</td>
                <td>false</td>
              </tr>
              <tr>
                <td>disabled</td>
                <td>设置按钮有效状态，有效为 true，禁用为 false，或直接设置值，如：disabled="true"</td>
                <td>Boolean</td>
                <td>false</td>
              </tr>
              <tr>
                <td>onclick</td>
                <td>按钮点击回调</td>
                <td>Function</td>
                <td>new Function()</td>
              </tr>
              <tr>
                <td>className</td>
                <td>设置按钮样式</td>
                <td>String</td>
                <td>''</td>
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
  export default{
    components: { vButton },
    data () {
      let self = this;
      return {
        oButton: {
          btnLoading: true,
        }
      }
    },
    methods: {
      clickHandle () {
        notify.success('success');
      }
    }
  }
</script>