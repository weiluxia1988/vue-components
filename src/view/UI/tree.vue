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
            <v-tree :data="data" :props="defaultProps" :on-expand="onExpand"></v-tree>
          </div>
        </div>
        <div class="box box-success">
          <div class="box-header">
            <h3 class="box-title">出现多选框</h3>
          </div>
          <div class="box-body">
            <v-tree v-ref:tree :data="data" :config="defaultConfig" show-checkbox 
            :on-check="onCheck"></v-tree>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="box box-success">
          <div class="box-header">
            <h3 class="box-title">禁用展开、选中操作</h3>
          </div>
          <div class="box-body">
            <v-tree :data="data1" :config="defaultConfig" show-checkbox></v-tree>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="box box-success">
          <div class="box-header">
            <h3 class="box-title">动态加载</h3>
          </div>
          <div class="box-body">
            <v-tree :config="config" :load-data="loadNode" lazy show-checkbox></v-tree>
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
                  <td>data</td>
                  <td>展示数据(数组每一项参数，见下表data-item props)</td>
                  <td>Array</td>
                  <td>[]</td>
                </tr>
                <tr>
                  <td>config</td>
                  <td>配置选项(见下表config props)</td>
                  <td>Array</td>
                  <td>[]</td>
                </tr>
                <tr>
                  <td>multiple</td>
                  <td>是否支持多选（未做）</td>
                  <td>Boolean</td>
                  <td>true</td>
                </tr>
                <tr>
                  <td>showCheckbox</td>
                  <td>出现多选框</td>
                  <td>Boolean</td>
                  <td>false</td>
                </tr>
                <tr>
                  <td>lazy</td>
                  <td>延迟加载，配合loadData</td>
                  <td>Boolean</td>
                  <td>false</td>
                </tr>
                <tr>
                  <td>loadData</td>
                  <td>点击树节点，加载子树数据的方法，注:lazy设置为true</td>
                  <td>function</td>
                  <td>/</td>
                </tr>
                <tr>
                  <td>expandAll</td>
                  <td>默认展开所有树节点（未做）</td>
                  <td>Boolean</td>
                  <td>false</td>
                </tr>
                <tr>
                  <td>expandedKeys</td>
                  <td>展开指定的树节点（未做）</td>
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
              </tbody>
            </table>
          </div>
        </div>
        <div class="box">
          <div class="box-header">
            <h3 class="box-title">data-item props</h3>
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
                  <td>是否选中</td>
                  <td>Boolean</td>
                  <td>false</td>
                </tr>
                <tr>
                  <td>disabled</td>
                  <td>禁掉响应</td>
                  <td>Boolean</td>
                  <td>false</td>
                </tr>
                <tr>
                  <td>disableCheckbox</td>
                  <td>禁掉checkbox</td>
                  <td>Boolean</td>
                  <td>false</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="box">
          <div class="box-header">
            <h3 class="box-title">dconfig props</h3>
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
                  <td>label</td>
                  <td>指定节点标签为节点对象的某个属性值</td>
                  <td>String</td>
                  <td>/</td>
                </tr>
                <tr>
                  <td>children</td>
                  <td>指定子树为节点对象的某个属性值</td>
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
  import vTree from "../../../components/tree";
  let count = 1;
  export default{
    components: { vTree },
    data () {
      return {
        data: [
          {
            label: '一级 1',
            checked: true,
            children: [{
              label: '二级 1-1'
            }]
          }, 
          {
            label: '一级 2',
            children: [{
              label: '二级 2-1',
              checked: true,
              children: [{
                label: '三级2-1-1'
              }]
            }, {
              label: '二级 2-2'
            }]
          }, 
          {
            label: '一级 3',
            children: [{
              label: '二级 3-1'
            }, {
              label: '二级 3-2'
            }]
          }
        ],
        data1: [
          {
            label: '一级 1',
            disabled: true,
            children: [{
              label: '二级 1-1'
            }]
          }, 
          {
            label: '一级 2',
            children: [{
              label: '二级 2-1',
              children: [{
                label: '三级2-1-1',
                disableCheckbox: true
              },{
                label: '三级2-1-2'
              }]
            }, {
              label: '二级 2-2'
            }]
          }, 
          {
            label: '一级 3',
            children: [{
              label: '二级 3-1'
            }, {
              label: '二级 3-2'
            }]
          }
        ],
        defaultConfig: {
          children: 'children',
          label: 'label'
        },
        config: {
          label: 'name',
          children: 'zones'
        }
      }
    },
    methods: {
      onExpand (isExpand, data, node) {
        console.log(isExpand, data, node);
      },
      onCheck (isChecked, node, checkedList) {
        console.log('当前节点选中：' + isChecked, '当前节点: ' + node, '复选框选中元素:' , checkedList);
        // 也可以通过this.$refs.tree.getCheckedNodes()获得复选框选中元素
      },
      loadNode(node, resolve) {
        console.log(node);
        setTimeout(function() {
          if (node.level === -1) {
            return resolve([{ name: 'Root1' }, { name: 'Root2' }]);
          }
          var hasChild = Math.random() > 0.5;
          if (node.level > 4) return resolve([]);
          var data;
          if (hasChild) {
            data = [{
              name: 'zone' + count++
            }, {
              name: 'zone' + count++
            }];
          } else {
            data = [];
          }

          resolve(data);
        }, 500);
      }
    },
    ready () {
      let self = this;
      setTimeout(() => {
        self.data.push({
          label: '一级 4',
          children: [{
              label: '二级 4-1'
            }, {
              label: '二级 4-2'
            }]
        });
      }, 2000);
    }
  }
</script>