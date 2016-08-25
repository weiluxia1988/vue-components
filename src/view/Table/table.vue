<template>
  <div class="newsList-content clearfix">

    <div class="filter-bar">
      <form class="searchBox clearfix">
        <div class="form-group col-md-3 padding-none">
          <label class="control-label">分类：</label>
          <div class="col-md-10 padding-none">
            <select class="form-control" name="typeId">
              <option value="">请选择</option>
              <option v-for="item in typeList" v-bind:value="item.id">{{ item.name }}</option>
            </select>
          </div>
        </div>
        
        <div class="form-group col-md-3">
          <label class="control-label">状态：</label>
          <div class="col-md-10 padding-none">
            <select class="form-control" name="status">
              <option value="">请选择</option>
              <option v-for="item in oStatus" v-bind:value="$key">{{ item }}</option>
            </select>
          </div>
        </div>

        <div class="clearfix"></div>

        <v-date-picker
          :placeholder="oDate.placeholder"
          :ranges="oDate.dateRange"
          :time-picker="oDate.timePicker"
          :show-dropdowns="oDate.showDropdowns"
          :format="oDate.format"
          :single-date-picker="oDate.singleDatePicker"
          :start-time="oDate.startTime"
          :key-start-name="oDate.keyStartName"
          :end-time="oDate.endTime"
          :key-end-name="oDate.keyEndName"
          :on-change="dateCallback"
        ></v-date-picker>

        <div class="form-group clearfix col-md-2">
          <button type="submit" class="btn btn-primary">搜索</button>
        </div>
      </form>
    </div>
  
    <v-table 
      :data-source="oTable.dataSource" 
      :columns="oTable.columns"
      :item-actions="oTable.itemActions"
      :pagination="oTable.pagination"
      :on-change="oTable.callback"
      :loading="oTable.loading"
      no-data-title="暂无数据"
    >
    </v-table>
    
  </div>
</template>
<script>
  import * as Util from "../../Util";
  import { vTable } from "../../../components/table";
  import vDatePicker from "../../../components/datePicker";

  // 列表头
  const columns = [
    {
      title: '标题', // 列头显示文字
      dataIndex: 'title', // 列数据在数据项中对应的 key
      key: 'title', // vue需要的 key
      sorter: true // 排序
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
      title: '置顶',
      dataIndex: 'isTop',
      callback: 'topTmp',
      render: (record) => {
        return `<small class="label label-warning" v-if="${record.isTop} == 1">已置顶</small><small class="label label-default" v-else>未置顶</small>`;
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
  const itemActions = [
    {
      name: 'status-item',
      label: 'status',
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
      name: 'top-item',
      label: 'top',
      dataIndex: 'isTop',
      list: [
        {
          value: '1',
          class: 'btn btn-default',
          title: "取消置顶",
          icon: 'fa fa-arrow-circle-down'
        },
        {
          value: '0',
          class: 'btn btn-default',
          title: "置顶",
          icon: 'fa fa-arrow-circle-up'
        }
      ],
      callback: 'topHandle'
    },
    { 
      name: 'edit-item', 
      label: 'edit', 
      class: 'btn btn-default',
      title: "编辑",
      icon: 'fa fa-pencil',
      callback: 'editHandle'
    },
    { 
      name: 'delete-item', 
      label: 'delete', 
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
    components: { vTable, vDatePicker },
    data: function() {
      return {
        typeList: [],
        oStatus: {
          1: '未发布',
          2: '已发布'
        },
        oTable: {
          url: URLConfig('newsList'),
          search: '',
          columns: columns,
          dataSource: [],
          pagination: {},
          itemActions: itemActions,
          loading: false,
          callback: this.tableCallback
        },
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
    methods: {
      // 加载数据
      doAjax (options) {
        var self = this;
        Util.loadData(options.url, options.data, options.method)
            .then(function(data){
                options.sucCallback && options.sucCallback(data);
              }, function(msg) {
                self.$dispatch('lu-notify', {msg: msg.message, duration: 1000, show: true});
                options.failCallback && options.failCallback();
                if(401 == msg.code) {
                  setTimeout(function() {
                    window.location.href = msg.data.url;
                  }, 1500);
                }
              });
      },
      // 加载分类
      loadGroup () {
        var self = this;
        self.doAjax({
          url: URLConfig('newsTypeList'),
          method: 'get',
          sucCallback: function(data) {
            self.typeList = data.list;
          }
        });
      },
      // 加载列表信息
      loadList (params) {
        var self = this;
        self.oTable.loading = true;
        self.doAjax({
          url: self.oTable.url,
          method: 'get',
          data: params,
          sucCallback: function(data) {
            setTimeout(()=>{
              self.oTable.loading = false;
              self.oTable.dataSource = data.list;
              self.oTable.pagination = data.page;
            }, 3000);
          }
        });
      },
      statusTmp (value) {
        return value == '1'
          ? '<small class="label label-warning">发布</small>'
          : '<small class="label label-default" v-else>未发布</small>';
      },
      topTmp (value) {
        return value == '1'
          ? '<small class="label label-warning">已置顶</small>'
          : '<small class="label label-default">未置顶</small>'
      },
      // 分页、排序回调
      tableCallback (params) {
        var self = this;
        var s = '';
        for(var e in params) {
          s += "&" + e + "=" + params[e];
        }
        if('' == self.oTable.search) {
          s = s.substring(1);
        }
        params = self.oTable.search + s;
        self.loadList(params);
      },
      // 删除
      delHandle (one) {
        var self = this;
        self.doAjax({
          url: URLConfig('newsDelete'),
          method: 'get',
          data: {id: one.id},
          sucCallback: function(data) {
            self.$dispatch('lu-notify', {msg: '删除成功', duration: 1000, show: true});
            self.oTable.dataSource.$remove(one);
          }
        });
      },
      // 发布
      statusHandle (one) {
        var self = this;
        var status = 1;
        if(1 == one.status) {
          status = 0;
        }
        self.doAjax({
          url: URLConfig('newsShow'),
          method: 'get',
          data: {id: one.id, show: status},
          sucCallback: function(data) {
            var title = status == 0 ? '取消发布成功' : '发布成功';
            self.$dispatch('lu-notify', {msg: title, duration: 1000, show: true});
            one.status = status;
          }
        });
      },
      // 置顶
      topHandle (one) {
        var self = this;
        var isTop = 1;
        if(1 == one.isTop) {
          isTop = 0;
        }
        self.doAjax({
          url: URLConfig('newsTop'),
          method: 'get',
          data: {id: one.id, top: isTop},
          sucCallback: function(data) {
            var title = isTop == 0 ? '取消置顶成功' : '置顶成功';
            self.$dispatch('lu-notify', {msg: title, duration: 1000, show: true});
            one.isTop = isTop;
          }
        });
      },
      // 编辑
      editHandle (one) {
        this.$router.go({
          path: '/news/edit',
          query: {id: one.id}
        });
      }
    },
    ready () {
      var self = this;

      var $forms = $('form');
      $forms.submit(function(e) {
        var $form = $(this);
        var params = $form.serialize();
        self.oTable.search = params;
        self.loadList(params);
        return false;
      });
    },
    route: {
      data: function() {
        this.loadGroup();
        this.loadList({page: 1});
      }
    }
  }
</script>
