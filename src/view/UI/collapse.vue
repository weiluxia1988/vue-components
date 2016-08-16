<template>
  <article>
    <h1>折叠面板Collapse</h1>
    <section>
      <h3>演示</h3>
      <div class="clearfix">
        <div class="col-md-4" style="width:30%;">
          <p>每次只打开一个面板</p>
          <v-collapse :on-change="onChange">
            <v-panel header="This is panel header 1  theme/default" theme="default">
                <p>
                  A dog is a type of domesticated animal.
                  Known for its loyalty and faithfulness,
                  it can be found as a welcome guest in many households across the world.
                </p>
              </v-panel>
            <v-panel header="This is panel header 2  theme/primary" theme="primary">
              <p>
                A dog is a type of domesticated animal.
                Known for its loyalty and faithfulness,
                it can be found as a welcome guest in many households across the world.
              </p>
            </v-panel>
            <v-panel header="This is panel header 3 theme/danger" theme="danger">
              <p>
                A dog is a type of domesticated animal.
                Known for its loyalty and faithfulness,
                it can be found as a welcome guest in many households across the world.
              </p>
            </v-panel>
            <v-panel header="This is panel header 4 theme/success" theme="success">
              <p>
                A dog is a type of domesticated animal.
                Known for its loyalty and faithfulness,
                it can be found as a welcome guest in many households across the world.
              </p>
            </v-panel>
            <v-panel header="This is panel header 5 theme/warning" theme="warning">
              <p>
                A dog is a type of domesticated animal.
                Known for its loyalty and faithfulness,
                it can be found as a welcome guest in many households across the world.
              </p>
            </v-panel>
          </v-collapse>
        </div>
        <div class="col-md-4" style="width:30%;">
          <p>可以同时展开多个面板</p>
          <v-collapse :on-change="onChange" accordion="false">
            <v-panel header="This is panel header 1" key="1">
              <p>
                A dog is a type of domesticated animal.
                Known for its loyalty and faithfulness,
                it can be found as a welcome guest in many households across the world.
              </p>
            </v-panel>
            <v-panel header="This is panel header 2" key="2">
              <p>
                A dog is a type of domesticated animal.
                Known for its loyalty and faithfulness,
                it can be found as a welcome guest in many households across the world.
              </p>
            </v-panel>
            <v-panel header="This is panel header 3" key="3">
              <p>
                A dog is a type of domesticated animal.
                Known for its loyalty and faithfulness,
                it can be found as a welcome guest in many households across the world.
              </p>
            </v-panel>
          </v-collapse>
        </div>
        <div class="col-md-4" style="width:30%;">
          <p>默认展开</p>
          <v-collapse :on-change="onChange" active-key="1">
            <v-panel header="This is panel header 1" key="1">
              <p>
                A dog is a type of domesticated animal.
                Known for its loyalty and faithfulness,
                it can be found as a welcome guest in many households across the world.
              </p>
            </v-panel>
            <v-panel header="This is panel header 2" key="2">
              <p>
                A dog is a type of domesticated animal.
                Known for its loyalty and faithfulness,
                it can be found as a welcome guest in many households across the world.
              </p>
            </v-panel>
            <v-panel header="This is panel header 3" key="3">
              <p>
                A dog is a type of domesticated animal.
                Known for its loyalty and faithfulness,
                it can be found as a welcome guest in many households across the world.
              </p>
            </v-panel>
          </v-collapse>
        </div>
      </div>
    </section>
    <section>
      <h3>使用</h3>
      <div class="box">
        <div class="box-header">Collapse</div>
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
                <td>activeKey</td>
                <td>当前激活 tab 面板的 key</td>
                <td>Array</td>
                <td>/</td>
              </tr>
              <tr>
                <td>accordion</td>
                <td>是否同时展开</td>
                <td>Boolean</td>
                <td>true</td>
              </tr>
              <tr>
                <td>onChange</td>
                <td>切换面板的回调</td>
                <td>Function</td>
                <td>/</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="box">
        <div class="box-header">Panel</div>
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
                <td>key</td>
                <td>对应 activeKey</td>
                <td>String</td>
                <td>/</td>
              </tr>
              <tr>
                <td>header</td>
                <td>面板头内容</td>
                <td>String</td>
                <td>/</td>
              </tr>
              <tr>
                <td>theme</td>
                <td>样式主题</td>
                <td>String（default primary danger success warning）</td>
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
  import vCollapse from "../../../components/collapse";
  const vPanel = vCollapse.Panel;
  export default {
    components: { vCollapse, vPanel },
    methods: {
      onChange (key, open) {
        console.log('panel：'+key, '是否打开：'+open);
      }
    }
  }
</script>