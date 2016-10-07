<template>
  <section class="content-header">
    <h1>树形控件<small>Tree</small></h1>
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
            <p class="text-muted">文件夹、组织架构、生物分类、国家地区等等，世间万物的大多数结构都是树形结构。使用树控件可以完整展现其中的层级关系，并具有展开收起选择等交互功能。</p>
            <pre>
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
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="box box-success">
          <div class="box-header">
            <h3 class="box-title">基本使用</h3>
          </div>
          <div class="box-body">
            <v-tree checkable expand-all>
              <v-tree-item title="1-1" key="1-1">
                <v-tree-item v-for="item in arr1" :title="item.title" :key="item.id"></v-tree-item>
              </v-tree-item>
              <v-tree-item title="1-2" key="1-2"></v-tree-item>
            </v-tree>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="box box-success">
          <div class="box-header">
            <h3 class="box-title">基本使用</h3>
          </div>
          <div class="box-body">
           <!--  <v-tree checkable="false" expand-all="false">
              <v-tree-item title="1-1" key="1-1">
                <v-tree-item title="1-1-2" key="1-1-2"></v-tree-item>
                <v-tree-item title="1-1-2" key="1-1-2"></v-tree-item>
                <v-tree-item title="1-1-3" key="1-1-3"></v-tree-item>
              </v-tree-item>
              <v-tree-item title="1-2" key="1-2"></v-tree-item>
            </v-tree> -->
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <h3 class="box-title">API</h3>
        <div class="box">
          <div class="box-header">
            <h3 class="box-title">Tree props</h3>
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
          <div class="box-header">
            <h3 class="box-title">TreeItem props</h3>
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
      </div>
    </div>
    <div style="height: 1000px"></div>
  </section>
</template>
<script>
  import { vTree, vTreeItem } from "../../../components/tree2";
  export default{
    components: { vTree, vTreeItem },
    data () {
      return {
        expandedKeys1: ['1-1-2'],
        arr1: []
      }
    },
    ready () {
      const foo = {};
      foo.prop = 123;
      console.log(foo);
      let self = this;
      setTimeout(()=> {
        self.arr1 = [
          {id: '1', title: '3333'},
          {id: '2', title: '4444'}
        ];
        console.log(self.arr1)
      }, 2000);
    }
  }
</script>