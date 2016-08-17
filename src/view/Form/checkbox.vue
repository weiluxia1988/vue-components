<template>
  <article >
    <h1>多选</h1>
    <section class="clearfix">
      <h3>演示</h3>
      <div class="box clearfix">
        <div class="col-md-12" style="margin-top:20px;">
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
        <h3 class="col-md-8" style="color:#3c8dbc;font-weight:bold">三种不同样式的checkbox</h3>
        <div class="box-body clearfix">
          <div class="col-md-12" style="background-color:#fff;">
            <div class="col-md-12" style="margin-top:20px;">
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
            <div class="col-md-12" style="margin-top:20px;">
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
            <div class="col-md-12" style="margin-top:20px;">
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
    </section>
  </article>
</template>
<script>
  import vCheckbox from '../../../components/checkbox/Checkbox.vue';
  export default{
    components: { vCheckbox},
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