<template>
  <article>
    <h1>tab切换</h1>
    <section>
      <h3>演示</h3>
      <v-tabs
        class="nav-tabs-custom"
        active="1"
        :on-change="onChange"
      >
        <v-tab-item nav='<a href="javascript:;">Tab1</a>'> wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now.</v-tab-item>
        <v-tab-item nav='<a href="javascript:;">Tab2</a>'> wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now. wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now.</v-tab-item>
      </v-tabs>
    </section>
    <section>
      <h3>使用</h3>
      <div class="box">
        <div class="box-header">tab</div>
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
                <td>className</td>
                <td>自定义样式类名</td>
                <td>String</td>
                <td>/</td>
              </tr>
              <tr>
                <td>active</td>
                <td>初始化选中面板的序列号，默认从0开始，或直接设置值，如：active="1"</td>
                <td>Number</td>
                <td>0</td>
              </tr>
              <tr>
                <td>onChange</td>
                <td>切换面板的回调</td>
                <td>Function</td>
                <td>new Function()</td>
              </tr>
              <tr>
                <td>effect</td>
                <td>切换面板的电话效果，fadein，show</td>
                <td>String</td>
                <td>/</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="box">
        <div class="box-header">tabItem</div>
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
                <td>nav</td>
                <td>选项卡头显示文字</td>
                <td>String</td>
                <td>/</td>
              </tr>
              <tr>
                <td>disabled</td>
                <td>禁用</td>
                <td>Boolean</td>
                <td>false</td>
              </tr>
              <tr>
                <td>className</td>
                <td>自定义样式类名</td>
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
<style>
  h1{
    color: #3c8dbc;
    font-weight: 700;
  }
</style>
<script>
  import vTabs from "../../../components/tab";
  let vTabItem = vTabs.vTabItem;
  export default{
    components: { vTabs, vTabItem },
    data () {
      let self = this;
      return {
        
      }
    },
    methods: {
      onChange (key) {
        console.log(key);
      }
    }
  }
</script>