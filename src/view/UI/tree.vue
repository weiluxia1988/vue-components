<template>
  <article style="height: 2000px;">
    <h1>树形控件Tree</h1>
    <p>文件夹、组织架构、生物分类、国家地区等等，世间万物的大多数结构都是树形结构。使用树控件可以完整展现其中的层级关系，并具有展开收起选择等交互功能。</p>
    <section>
      <h3>演示</h3>
      <v-tree checkable :expanded-keys="expandedKeys1">
        <v-tree-item title="1-1" key="1-1">
          <v-tree-item title="1-1-1" key="1-1-1"></v-tree-item>
          <v-tree-item title="1-1-2" key="1-1-2" disable-checkbox>
            <v-tree-item title="1-1-2-1" key="1-1-2-1"></v-tree-item>
            <v-tree-item title="1-1-2-2" key="1-1-2-2" disabled>
              <v-tree-item title="1-1-2-2-1" key="1-1-2-2-1"></v-tree-item>
              <v-tree-item title="1-1-2-2-2" key="1-1-2-2-2"></v-tree-item>
              <v-tree-item title="1-1-2-2-3" key="1-1-2-2-3"></v-tree-item>
            </v-tree-item>
            <v-tree-item title="1-1-2-3" key="1-1-2-3"></v-tree-item>
            <v-tree-item title="1-1-2-4" key="1-1-2-4"></v-tree-item>
          </v-tree-item>
          <v-tree-item title="1-1-3" key="1-1-3"></v-tree-item>
        </v-tree-item>
        <v-tree-item title="1-2" key="1-2"></v-tree-item>
      </v-tree>

      <v-tree checkable="false" expand-all>
        <v-tree-item title="1-1" key="1-1">
          <v-tree-item title="1-1-2" key="1-1-2"></v-tree-item>
          <v-tree-item title="1-1-2" key="1-1-2"></v-tree-item>
          <v-tree-item title="1-1-3" key="1-1-3"></v-tree-item>
        </v-tree-item>
        <v-tree-item title="1-2" key="1-2"></v-tree-item>
      </v-tree>

      <v-tree checkable="false" expand-all="false">
        <v-tree-item title="1-1" key="1-1">
          <v-tree-item title="1-1-2" key="1-1-2"></v-tree-item>
          <v-tree-item title="1-1-2" key="1-1-2"></v-tree-item>
          <v-tree-item title="1-1-3" key="1-1-3"></v-tree-item>
        </v-tree-item>
        <v-tree-item title="1-2" key="1-2"></v-tree-item>
      </v-tree>
    </section>
    <section>
      <h3>使用</h3>
      <div class="box">
        <div class="box-header">Tree</div>
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
                <td>multiple</td>
                <td>是否支持多选</td>
                <td>Boolean</td>
                <td>true</td>
              </tr>
              <tr>
                <td>checkable</td>
                <td>是否支持选中</td>
                <td>Boolean</td>
                <td>false</td>
              </tr>
              <tr>
                <td>expandAll</td>
                <td>默认展开所有树节点</td>
                <td>Boolean</td>
                <td>false</td>
              </tr>
              <tr>
                <td>expandedKeys</td>
                <td>展开指定的树节点</td>
                <td>String/Array</td>
                <td>[]</td>
              </tr>
              <tr>
                <td>checkedKeys</td>
                <td>选中复选框的树节点</td>
                <td>String/Array</td>
                <td>[]</td>
              </tr>
              <tr>
                <td>selectedKeys</td>
                <td>设置选中的树节点</td>
                <td>String/Array</td>
                <td>[]</td>
              </tr>
              <tr>
                <td>onExpand</td>
                <td>展开/收起节点时触发</td>
                <td>function</td>
                <td>/</td>
              </tr>
              <tr>
                <td>onCheck</td>
                <td>点击复选框触发</td>
                <td>function</td>
                <td>/</td>
              </tr>
              <tr>
                <td>onSelect</td>
                <td>点击树节点触发</td>
                <td>function</td>
                <td>/</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="box">
        <div class="box-header">TreeItem</div>
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
                <td>disabled</td>
                <td>禁掉响应</td>
                <td>Boolean</td>
                <td>false</td>
              </tr>
              <tr>
                <td>disableCheckbox</td>
                <td>禁掉 checkbox</td>
                <td>Boolean</td>
                <td>false</td>
              </tr>
              <tr>
                <td>title</td>
                <td>标题</td>
                <td>String</td>
                <td>/</td>
              </tr>
              <tr>
                <td>key</td>
                <td>唯一标识。注意：整个树范围内的所有节点的 key 值不能重复！</td>
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
  import vTree from "../../../components/tree";
  const vTreeItem = vTree.vTreeItem;
  export default{
    components: { vTree, vTreeItem },
    data () {
      return {
        expandedKeys1: ['1-1-2']
      }
    },
    ready () {
      const foo = {};
      foo.prop = 123;
      console.log(foo);
    }
  }
</script>