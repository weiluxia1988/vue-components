<template>
  <section class="content-header">
    <h1>多选<small>Checkbox</small></h1>
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
            <p class="text-muted">在一组可选项中进行多项选择时</p>
            <pre>
              <code class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"checkbox"</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"1"</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"1"</span>&gt;</span></code>
            </pre>
          </div>
        </div>
      </div>
    </div>
    <h2 class="page-header"><i class="fa fa-code"></i> 代码演示</h2>
    <div class="row">
      <div class="col-md-12">
        <div class="box box-success">
          <div class="box-header">
            <h3 class="box-title">基本使用</h3>
          </div>
          <div class="box-body">
            <div style="float:left" v-for="item in checkbox4">
              <v-checkbox
              :checked = "item.checked"
              :disabled = "item.disabled"
              :type = "item.type"
              :text = "item.text"
              :value = "item.value"
              ></v-checkbox>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-12">
        <div class="box box-success">
          <div class="box-header">
            <h3 class="box-title">三种不同样式的checkbox</h3>
          </div>
          <div class="box-body">
            <div class="row" style="margin-top:10px;">
              <div class="col-md-2">type='ele'的样式：</div>
              <div class="col-md-9">
                <div style="float:left" v-for="item in checkbox1">
                  <v-checkbox
                  :checked="item.checked"
                  :disabled="item.disabled"
                  :type="item.type"
                  :text = "item.text"
                  :value = "item.value"
                  ></v-checkbox>
                </div>
              </div>
            </div>
            <div class="row" style="margin-top:10px;">
              <div class="col-md-2">type='blue'的样式：</div>
              <div class="col-md-9">
                <div style="float:left" v-for="item in checkbox2">
                  <v-checkbox
                    :checked="item.checked"
                    :disabled="item.disabled"
                    :type="item.type"
                    :text = "item.text"
                    :value = "item.value"
                  ></v-checkbox>
                </div>
              </div>
            </div>
            <div class="row" style="margin-top:10px;">
              <div class="col-md-2">type='green'的样式：</div>
              <div class="col-md-9">
                <div style="float:left" v-for="item in checkbox3">
                  <v-checkbox
                    :checked="item.checked"
                    :disabled="item.disabled"
                    :type="item.type"
                    :text = "item.text"
                    :value = "item.value"
                  ></v-checkbox>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <h3 class="box-title">API</h3>
        <div class="box">
          <div class="box-header">
            <h3 class="box-title">checkbox props</h3>
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
                  <td>checked</td>
                  <td>是否选中, true/是, false/否 </td>
                  <td>Boolean</td>
                  <td>false</td>
                </tr>
                <tr>
                  <td>disabled</td>
                  <td>是否禁用, true/是, false/否 </td>
                  <td>Boolean</td>
                  <td>false</td>
                </tr>
                <tr>
                  <td>text</td>
                  <td>checkbox对应文本内容</td>
                  <td>String</td>
                  <td>/</td>
                </tr>
                <tr>
                  <td>type</td>
                  <td>radio的类型,一共三种,如整组应用的列子的三种。</td>
                  <td>String</td>
                  <td>默认第一种</td>
                </tr>
                <tr>
                  <td>value</td>
                  <td>当前选项的key值</td>
                  <td>String</td>
                  <td>/</td>
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
  import vCheckbox from '../../../components/checkbox';
  export default{
    components: {vCheckbox},
    data () {
      let self = this;
      return {
        checkbox4:[{
          checked:true,
          disabled:false,
          type:'ele',
          text:'1',
          value:'test'
        },{
          checked:false,
          disabled:false,
          text:'2',
          value:'test'
        },{
          checked:true,
          disabled:false,
          text:'3',
          value:'test'
        },{
          checked:false,
          disabled:false,
          text:'4',
          value:'test'
        }],
        checkbox1:[{
          checked:true,
          disabled:true,
          type:'ele',
          text:'初始选中且禁用',
          value:'test'
        },{
          checked:false,
          disabled:false,
          text:'初始未选中且未禁用',
          value:'test'
        },{
          checked:true,
          disabled:false,
          text:'初始选中且未禁用',
          value:'test'
        },{
          checked:false,
          disabled:true,
          text:'初始未选中且禁用',
          value:'test'
        }],
        checkbox2:[{
          checked:true,
          disabled:true,
          type:'blue',
          text:'初始选中且禁用',
          value:'test'
        },{
          checked:false,
          disabled:false,
          type:'blue',
          text:'初始未选中且未禁用',
          value:'test'
        },{
          checked:true,
          disabled:false,
          type:'blue',
          text:'初始选中且未禁用',
          value:'test'
        },{
          checked:false,
          disabled:true,
          type:'blue',
          text:'初始未选中且禁用',
          value:'test'
        }],
        checkbox3:[{
          checked:true,
          disabled:true,
          type:'green',
          text:'初始选中且禁用',
          value:'test'
        },{
          checked:false,
          disabled:false,
          type:'green',
          text:'初始未选中且未禁用',
          value:'test'
        },{
          checked:true,
          disabled:false,
          type:'green',
          text:'初始选中且未禁用',
          value:'test'
        },{
          checked:false,
          disabled:true,
          type:'green',
          text:'初始未选中且禁用',
          value:'test'
        }]
      }
    }
  }
</script>