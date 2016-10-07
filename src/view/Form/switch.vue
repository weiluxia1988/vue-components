<template>
  <section class="content-header">
    <h1>开关<small>Switch</small></h1>
  </section>
  <section class="content">
    <div class="row">
      <div class="col-md-12">
        <div class="box box-solid">
          <div class="box-header with-border">
            <i class="fa fa-text-width"></i>
            <h3 class="box-title">何时使用</h3>
          </div>
          <div class="box-body">
            <p class="text-muted">需要表示开关状态/两种状态之间的切换时；</p>
            <pre>
              <code class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"radio"</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"1"</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"1"</span>&gt;</span></code>
            </pre>
          </div>
        </div>
      </div>
    </div>
    <h2 class="page-header"><i class="fa fa-code"></i> 代码演示</h2>
    <div class="row">
      <div class="col-md-6">
        <div class="box box-success">
          <div class="box-header">
            <h3 class="box-title">基本使用</h3>
          </div>
          <div class="box-body">
            <v-switch
              name="status"
              value="1"
              :disabled="oSwitch1.disabled"
              :checked="oSwitch1.checked"
              :on-change="oSwitch1.onChange">
            </v-switch>
          </div>
          <div class="box-footer">
            {{ oSwitch1.result }}
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="box box-success">
          <div class="box-header">
            <h3 class="box-title">带有文字</h3>
          </div>
          <div class="box-body">
            <v-switch
              name="status"
              value="1"
              checked-txt="开" un-checked-txt="关"
              :disabled="oSwitch2.disabled"
              :checked="oSwitch2.checked"
              :on-change="oSwitch2.onChange">
            </v-switch>
          </div>
          <div class="box-footer">
            {{ oSwitch2.result }}
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="box box-success">
          <div class="box-header">
            <h3 class="box-title">可禁用</h3>
          </div>
          <div class="box-body">
            <v-switch
              name="status"
              value="1"
              :disabled="oSwitch3.disabled"
              :checked="oSwitch3.checked"
              :on-change="oSwitch3.onChange">
            </v-switch>
          </div>
          <div class="box-footer">
            {{ oSwitch3.result }}
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <h3 class="box-title">API</h3>
        <div class="box">
          <div class="box-header">
            <h3 class="box-title">Switch props</h3>
          </div>
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
      </div>
    </div>
  </section>
</template>
<script>
  import vSwitch from "../../../components/switch";
  export default{
    components: { vSwitch },
    data () {
      let self = this;
      return {
        oSwitch1: {
          disabled: false,
          checked: false,
          result: '关',
          onChange: function(checked) {
            let txt = checked ? '开' : '关';
            self.oSwitch1.result = txt;
          }
        },
        oSwitch2: {
          disabled: false,
          checked: false,
          result: '关',
          onChange: function(checked) {
            let txt = checked ? '开' : '关';
            self.oSwitch2.result = txt;
          }
        },
        oSwitch3: {
          disabled: true,
          checked: false,
          result: '关',
          onChange: function(checked) {
          }
        }
      }
    }
  }
</script>