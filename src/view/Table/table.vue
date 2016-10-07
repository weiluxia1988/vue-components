<template>
  <section class="content-header">
    <h1>表格<small>Table</small></h1>
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
            <p class="text-muted">当有大量结构化的数据需要展现时</p>
            <p class="text-muted">当需要对数据进行排序、搜索、分页、自定义操作等复杂行为时</p>
            <pre>
              <code class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-name">table</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">thead</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">thead</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">tbody</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">tbody</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">table</span>&gt;</span></code>
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
            <div class="row">
              <div class="col-md-12">
                <v-affix offset-top="50" style="margin-bottom:10px">
                  <div class="filter-bar" v-el:searchbox>
                    <validator name="validation">
                      <form class="form-horizontal clearfix" novalidate>
                        <div class="form-group col-sm-4" v-validate-class>
                          <label class="col-sm-4 control-label">平台：</label>
                          <div class="col-sm-8">
                            <select class="form-control" name="area" v-validate:area="['required']" :classes="styleValid" initial='off'>
                              <option value="">请选择</option>
                              <option value="1">分类1</option>
                              <option value="2">分类2</option>
                              <option value="3">分类3</option>
                            </select>
                          </div>
                        </div>
                        <div class="form-group col-sm-4" v-validate-class>
                          <label class="col-sm-4 control-label">游戏：</label>
                          <div class="col-sm-8">
                            <select class="form-control" name="gameid" v-validate:gameid="['required']" :classes="styleValid" initial='off'>
                              <option value="">请选择</option>
                              <option value="1">分类1</option>
                              <option value="2">分类2</option>
                              <option value="3">分类3</option>
                            </select>
                          </div>
                        </div>
                        <div class="form-group col-sm-4" v-validate-class>
                          <label class="col-sm-4 control-label">渠道：</label>
                          <div class="col-sm-8">
                            <select class="form-control" name="channelid" v-validate:channelid="['required']" :classes="styleValid" initial='off'>
                              <option value="">请选择</option>
                              <option value="1">分类1</option>
                              <option value="2">分类2</option>
                              <option value="3">分类3</option>
                            </select>
                          </div>
                        </div>
                        <div class="form-group col-sm-4" v-validate-class>
                          <label class="col-sm-4 control-label">操作系统：</label>
                          <div class="col-sm-8">
                            <select class="form-control" name="os" v-validate:os="['required']" :classes="styleValid" initial='off'>
                              <option value="">请选择</option>
                              <option value="1">分类1</option>
                              <option value="2">分类2</option>
                              <option value="3">分类3</option>
                            </select>
                          </div>
                        </div>
                        <div class="form-group col-sm-4">
                          <label class="col-sm-4 control-label">时间：</label>
                          <div class="col-sm-8">
                            <v-date-picker
                              :placeholder="oDate.placeholder"
                              :time-picker="oDate.timePicker"
                              :show-dropdowns="oDate.showDropdowns"
                              :format="oDate.format"
                              :single-date-picker="oDate.singleDatePicker"
                              :start-time="oDate.startTime"
                              :key-start-name="oDate.keyStartName"
                              :end-time="oDate.endTime"
                              :key-end-name="oDate.keyEndName"
                              :on-change="_updateDate"
                            ></v-date-picker>
                          </div>
                        </div>
                        <div class="form-group col-sm-4">
                          <div class="col-sm-4 pull-right">
                            <v-button type="success" class="btn-block" :loading="btnLoading_download" @click="submitHandle(2)"
                            :disabled="isDisabled">
                              导出
                            </v-button>
                          </div>
                          <div class="col-sm-4 pull-right">
                            <v-button type="success" class="btn-block" :loading="btnLoading_search" @click="submitHandle(1)"
                            :disabled="isDisabled">
                              搜索
                            </v-button>
                          </div>
                        </div>
                      </form>
                    </validator>
                  </div>
                </v-affix>
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
                </v-table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-12">
        <div class="box box-success">
          <div class="box-header">
            <h3 class="box-title">拖拽使用</h3>
          </div>
          <div class="box-body">
            <v-table 
              :data-source="oTable2.dataSource" 
              :columns="oTable2.columns"
              :on-drag="oTable2.onDrag"
              :loading="oTable2.loading"
              draggable="true"
              no-data-title="暂无数据"
            >
            </v-table>
          </div>
          <div class="box-footer">
            拖拽之后数组id(id是随机数生成的，所以会有重复)：<template v-for="item in dragList">{{ item.id }}, </template>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <h3 class="box-title">API</h3>
        <div class="box">
          <div class="box-header">
            <h3 class="box-title">Table props</h3>
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
                  <td>dataSource</td>
                  <td>数据数组</td>
                  <td>Array</td>
                  <td>[]</td>
                </tr>
                <tr>
                  <td>columns</td>
                  <td>表格列的配置描述，具体项见下表</td>
                  <td>Array</td>
                  <td>[]</td>
                </tr>
                <tr>
                  <td>actions</td>
                  <td>按钮的配置描述，具体项见下表</td>
                  <td>Array</td>
                  <td>[]</td>
                </tr>
                <tr>
                  <td>pagination</td>
                  <td>分页器，配置项参考 pagination</td>
                  <td>Object</td>
                  <td>/</td>
                </tr>
                <tr>
                  <td>expandedRowRender</td>
                  <td>额外的展开行</td>
                  <td>Function</td>
                  <td>new Function()</td>
                </tr>
                <tr>
                  <td>draggable</td>
                  <td>是否拖拽</td>
                  <td>Boolean</td>
                  <td>false</td>
                </tr>
                <tr>
                  <td>loading</td>
                  <td>页面是否加载中</td>
                  <td>Boolean</td>
                  <td>false</td>
                </tr>
                <tr>
                  <td>noDataTitle</td>
                  <td>没有数据时显示的文案</td>
                  <td>String</td>
                  <td>/</td>
                </tr>
                <tr>
                  <td>onChange</td>
                  <td>分页、排序、筛选变化时触发</td>
                  <td>Function</td>
                  <td>new Function()</td>
                </tr>
                <tr>
                  <td>onDrag</td>
                  <td>拖拽结束时触发，建议只有一页的时候可以拖拽</td>
                  <td>Function</td>
                  <td>new Function()</td>
                </tr>
                <tr>
                  <td>onEdit</td>
                  <td>表格编辑项时触发，建议不要在表格里编辑，最好是弹窗或者跳转编辑页面</td>
                  <td>Function</td>
                  <td>new Function()</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="box">
          <div class="box-header">
            <h3 class="box-title">Column props(列描述数据对象，是 columns 中的一项)</h3>
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
                  <td>title</td>
                  <td>列头显示文字</td>
                  <td>String</td>
                  <td>''</td>
                </tr>
                <tr>
                  <td>visible</td>
                  <td>是否显示</td>
                  <td>Boolean</td>
                  <td>true</td>
                </tr>
                <tr>
                  <td>titleClass</td>
                  <td>列表头类</td>
                  <td>String</td>
                  <td>''</td>
                </tr>
                <tr>
                  <td>dataClass</td>
                  <td>列表内容类</td>
                  <td>String</td>
                  <td>''</td>
                </tr>
                <tr>
                  <td>key</td>
                  <td>唯一标示</td>
                  <td>String</td>
                  <td>''</td>
                </tr>
                <tr>
                  <td>dataIndex</td>
                  <td>列数据在数据项中对应的key</td>
                  <td>String</td>
                  <td>''</td>
                </tr>
                <tr>
                  <td>sorter</td>
                  <td>排序函数</td>
                  <td>Boolean</td>
                  <td>false</td>
                </tr>
                <tr>
                  <td>isAction</td>
                  <td>是否显示操作</td>
                  <td>Boolean</td>
                  <td>false</td>
                </tr>
                <tr>
                  <td>isEdit</td>
                  <td>内容是否直接在表格里编辑</td>
                  <td>Boolean</td>
                  <td>false</td>
                </tr>
                <tr>
                  <td>callback</td>
                  <td>生成复杂数据的渲染函数</td>
                  <td>Function</td>
                  <td>new Function()</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="box">
          <div class="box-header">
            <h3 class="box-title">Action props(操作按钮对象)</h3>
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
                  <td>class</td>
                  <td>按钮样式类</td>
                  <td>String</td>
                  <td>''</td>
                </tr>
                <tr>
                  <td>icon</td>
                  <td>按钮icon</td>
                  <td>String</td>
                  <td>''</td>
                </tr>
                <tr>
                  <td>title</td>
                  <td>按钮标题</td>
                  <td>String</td>
                  <td>''</td>
                </tr>
                <tr>
                  <td>dataIndex</td>
                  <td>列数据在数据项中对应的key(根据值的不同，显示不一样的icon。例如基本使用中的发布)</td>
                  <td>String</td>
                  <td>''</td>
                </tr>
                <tr>
                  <td>list</td>
                  <td>存放dataIndex所对应值需要显示的按钮信息（例如基本使用中的发布）,数组里每一项的配置描述，具体项见下表</td>
                  <td>Array</td>
                  <td>[]</td>
                </tr>
                <tr>
                  <td>callback</td>
                  <td>点击回调</td>
                  <td>Function</td>
                  <td>new Function()</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="box">
          <div class="box-header">
            <h3 class="box-title">Action.List props(操作按钮对象)</h3>
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
                  <td>value</td>
                  <td>值(列数据在数据项中对应的 key)</td>
                  <td>String</td>
                  <td>''</td>
                </tr>
                <tr>
                  <td>class</td>
                  <td>按钮样式类</td>
                  <td>String</td>
                  <td>''</td>
                </tr>
                <tr>
                  <td>icon</td>
                  <td>按钮icon</td>
                  <td>String</td>
                  <td>''</td>
                </tr>
                <tr>
                  <td>title</td>
                  <td>按钮标题</td>
                  <td>String</td>
                  <td>''</td>
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
  import vTable from "../../../components/table";
  import vButton from "../../../components/button";
  import vDatePicker from "../../../components/datePicker";
  import vAffix from "../../../components/affix";
  import Vue from 'vue';
  import VueValidator from 'vue-validator';
  Vue.use(VueValidator);

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

  // 列表头
  const columns2 = [
    {
      title: '标题', // 列头显示文字
      dataIndex: 'title', // 列数据在数据项中对应的 key
      key: 'title' // vue需要的 key
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

  // 时间
  const dateRange = [
    {
      count: -1,
      title: '昨日'
    },
    {
      count: -6,
      title: '近七日'
    },
    {
      count: -29,
      title: '近30日'
    }
  ];

  export default{
    components: { vTable, vDatePicker, vButton, vAffix },
    data: function() {
      return {
        btnLoading_search: false,
        btnLoading_download: false,
        styleValid: {valid: 'has-success', invalid: 'has-error'},
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
        oTable2: {
          url: URLConfig('table'),
          columns: columns2,
          dataSource: [],
          pagination: {},
          loading: false,
          onDrag: this.onDrag
        },
        dragList: [],
        oDate: {
          dateRange: dateRange,
          timePicker: false,
          singleDatePicker: false,
          showDropdowns: false,
          format: 'YYYY-MM-DD',
          keyStartName: 'starttime',
          keyEndName: 'endtime',
          startTime: '',
          endTime: '',
          placeholder: '开始日期 ~ 结束日期'
        }
      };
    },
    computed: {
      isDisabled () {
        return !this.$validation.valid;
      }
    },
    methods: {
      // 搜索/导出
      submitHandle (type) {
        this.$validate();
        if(!this.$validation.valid) return;
        let params = $(this.$els.searchbox).find('form').serialize();
        this.loadList(params);
      },
      // 加载列表信息
      loadList (params) {
        var self = this;
        self.oTable1.loading = true;
        self.oTable2.loading = true;
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

              self.oTable2.loading = false;
              self.oTable2.dataSource = data.list;
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
      }
    },
    route: {
      data: function() {
        this.loadList({page: 1});
      }
    }
  }
</script>
