<template>
  <section class="content-header">
    <h1>标签页<small>Tab</small></h1>
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
            <p class="text-muted">卡片式的页签</p>
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
            <v-tabs
              class="nav-tabs-custom"
              active="1"
              :on-change="onChange"
            >
              <v-tab-item nav='<a href="javascript:;">Tab1</a>'>
                <v-table 
                  :data-source="oTable1.dataSource" 
                  :columns="oTable1.columns"
                  :actions="oTable1.actions"
                  :pagination="oTable1.pagination"
                  :on-change="oTable1.callback"
                  :on-drag="oTable1.onDrag"
                  :on-edit="oTable1.onEdit"
                  :loading="oTable1.loading"
                  :expanded-row-render="oTable1.expandedRowRender"
                  no-data-title="暂无数据"
                >
              </v-tab-item>
              <v-tab-item nav='<a href="javascript:;">Tab2</a>'> which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now.</v-tab-item>
            </v-tabs>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <h3 class="box-title">API</h3>
        <div class="box">
          <div class="box-header">
            <h3 class="box-title">Tab props</h3>
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
          <div class="box-header">
            <h3 class="box-title">TabItem props</h3>
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
      </div>
    </div>
  </section>
</template>
<script>
  import * as Util from "../../Util";
  import { vTabs, vTabItem } from "../../../components/tab";
  import vTable from "../../../components/table";
  // 列表头
  const columns1 = [
    {
      title: '标题', // 列头显示文字
      dataIndex: 'title', // 列数据在数据项中对应的 key
      key: 'title', // vue需要的 key
      sorter: true, // 排序
      isEdit: true // 是否编辑
    },
    {
      title: '发布时间',
      dataIndex: 'createtime',
      key: 'createtime'
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      callback: 'statusTmp',
      render: (record) => {
        return `<small class="label label-warning" v-if="${record.status} == 1">发布</small><small class="label label-default" v-else>未发布</small>`;

      }
    },
    {
      title: '操作',
      key: 'operation',
      isAction: true,
      titleClass: 'text-center', // 列头标题是否居中
      dataClass: 'text-center', // 内容是否居中
      render: function(record) { // 生成复杂数据的渲染函数，参数分别为当前行的值，当前行数据
        return '';
      }
    }
  ];

  // 操作按钮
  const actions = [
    {
      dataIndex: 'status',
      list: [
        {
          value: '1',
          class: 'btn btn-default',
          title: "取消发布",
          icon: 'fa fa-ban'
        },
        {
          value: '0',
          class: 'btn btn-default',
          title: "发布",
          icon: 'fa fa-bullhorn'
        }
      ],
      callback: 'statusHandle'
    },
    { 
      class: 'btn btn-default',
      title: "编辑",
      icon: 'fa fa-pencil',
      callback: 'editHandle'
    },
    {  
      class: 'btn btn-default',
      title: "删除",
      icon: 'fa fa-times',
      callback: 'delHandle'
    }
  ];

  export default{
    components: { vTabs, vTabItem, vTable },
    data () {
      let self = this;
      return {
        oTable1: {
          url: URLConfig('table'),
          search: '',
          columns: columns1,
          dataSource: [],
          pagination: {},
          actions: actions,
          loading: false,
          expandedRowRender: this.expandedRowRender,
          callback: this.tableCallback,
          onEdit: this.onEdit,
          onDrag: this.onDrag
        },
      }
    },
    methods: {
      // 加载列表信息
      loadList (params) {
        var self = this;
        self.oTable1.loading = true;
        Util.doAjax({
          url: self.oTable1.url,
          method: 'get',
          data: params,
          sucCallback: function(data) {
            setTimeout(()=>{
              self.dragList = data.list;
              self.btnLoading_search = false;
              self.oTable1.loading = false;
              self.oTable1.dataSource = data.list;
              self.oTable1.pagination = data.page;
            }, 3000);
          },
          failCallback () {
            self.btnLoading_search = false;
            self.oTable1.loading = false;
          }
        });
      },
      // 状态列表格式回调
      statusTmp (value) {
        return value == '1'
          ? '<small class="label label-warning">发布</small>'
          : '<small class="label label-default" v-else>未发布</small>';
      },
      // 分页、排序回调
      tableCallback (params) {
        var self = this;
        var s = '';
        for(var e in params) {
          s += "&" + e + "=" + params[e];
        }
        if('' == self.oTable1.search) {
          s = s.substring(1);
        }
        params = self.oTable1.search + s;
        self.loadList(params);
      },
      // 删除
      delHandle (one) {
        console.log('delete')
      },
      // 发布
      statusHandle (one) {
        var status = 1;
        if(1 == one.status) {
          status = 0;
        }
        var title = status == 0 ? '取消发布成功' : '发布成功';
        one.status = status;
      },
      // 编辑
      editHandle (one) {
        console.log('edit')
        // this.$router.go({
        //   path: '/news/edit',
        //   query: {id: one.id}
        // });
      },
      // 展开项
      expandedRowRender (item, columns) {
        return '展开：' + item.title;
      },
      // 表格项编辑回调
      onEdit (item) {
        console.log(item);
      },
      // 拖拽回调
      onDrag (list) {
        this.dragList = list;
      },
      onChange (key) {
        console.log(key);
      }
    },
    route: {
      data: function() {
        this.loadList({page: 1});
      }
    }
  }
</script>