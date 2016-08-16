<template>
  <article>
    <h1>开关Switch</h1>
    <section>
      <h3>演示</h3>
      <v-switch
        name="status"
        value="1"
        :disabled="oSwitch.disabled"
        :checked="oSwitch.checked"
        :on-change="oSwitch.onChange">
      </v-switch>

      <v-switch
        name="status"
        value="1"
        checked-txt="开" un-checked-txt="关"
        :disabled="oSwitch.disabled"
        :checked="oSwitch.checked"
        :on-change="oSwitch.onChange">
      </v-switch>
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
                <td>name</td>
                <td>设置开关对应的input属性名称</td>
                <td>String</td>
                <td>''</td>
              </tr>
              <tr>
                <td>value</td>
                <td>设置开关对应的input属性值</td>
                <td>String</td>
                <td>''</td>
              </tr>
              <tr>
                <td>unCheckedTxt</td>
                <td>选中时的内容</td>
                <td>String</td>
                <td>''</td>
              </tr>
              <tr>
                <td>checkedTxt</td>
                <td>非选中时的内容</td>
                <td>String</td>
                <td>''</td>
              </tr>
              <tr>
                <td>checked</td>
                <td>设置开关选中状态，选中为 true，反之为 false，或直接设置值，如：checked</td>
                <td>Boolean</td>
                <td>false</td>
              </tr>
              <tr>
                <td>disabled</td>
                <td>设置开关有效状态，有效为 true，禁用为 false，或直接设置值，如：disabled</td>
                <td>Boolean</td>
                <td>false</td>
              </tr>
              <tr>
                <td>onChange</td>
                <td>开关回调</td>
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
  import vSwitch from "../../../components/switch";

  export default{
    components: { vSwitch },
    data () {
      let self = this;
      return {
        oSwitch: {
          disabled: false,
          checked: false,
          onChange: function(checked) {
            let txt = checked ? '开' : '关';
            alert(txt);
          }
        }
      }
    }
  }
</script>