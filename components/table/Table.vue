<!-- 
  table插件 
  weiluxia 2016.07.18  
  rowSelection 列表项是否可选择
  expandedRowRender 展开详细信息 ? 
  pagination 分页
  dataSource 数据数组
  columns 表格列的配置描述
  onChange 分页、排序、筛选变化时触发
  loading 页面是否加载中
-->
<template>
  <div class="v-table" :class="loading ? loadingClass : ''">
    <v-loading :show="loading"></v-loading>
    <div class="box">
      <div class="box-body table-responsive no-padding">
        <table class="table table-hover" data-type="oTable">
          <thead>
            <tr>
              <template v-for="item in columns">
                <template v-if="item.visible">
                  <th class={{item.titleClass}}>
                    {{item.title}}
                    <div class="table-column-sorter" v-if="item.sorter">
                      <span class="table-column-sorter-up" v-bind:class="item.isSortUp ? 'on' : 'off'" title="↑" @click="sortHandle(item, 'up')"></span>
                      <span class="table-column-sorter-down" v-bind:class="item.isSortDown ? 'on' : 'off'"title="↓" @click="sortHandle(item, 'down')"></span>
                    </div>
                  </th>
                </template>
              </template>
            </tr>
          </thead>
          <tbody>
            <tr v-cloak v-for="item in dataSource">
              <template v-for="col in columns">
                <template v-if="col.visible">
                  <td v-if="col.isAction" class={{col.dataClass}}>
                    <template v-for="action in itemActions">
                      <template v-if="action.dataIndex">
                        <template v-for="list in action.list">
                          <a href="javascript:;" v-if="item[action.dataIndex] == list.value" class="{{ list.class }}" title="{{ list.title }}" @click="callActionHandle(action, item)">
                            <i class="{{ list.icon }}"></i>
                          </a>
                        </template>
                      </template>
                      <template v-else>
                        <a href="javascript:;" class="{{ action.class }}" title="{{ action.title }}" @click="callActionHandle(action, item)">
                          <i class="{{ action.icon }}"></i>
                        </a>
                      </template>
                    </template>
                  </td>
                  <td v-else class={{col.dataClass}}>
                    {{{ callCallback(col, item) }}}
                    <!-- {{{ !col.render && col.dataIndex ? item[col.dataIndex] : col.render(item) }}} -->
                  </td>
                </template>
              </template>
            </tr>
          </tbody>
        </table>
        <p v-if="noData" class={{noDataClass}}>{{noDataTitle}}</p>
      </div>
      <div class="box-footer clearfix">
        <div class="pull-right">
          <v-pagination 
            :on-change="changeHandle"
            :curpage="pagination.curpage"
            :rcount="pagination.rcount"
            :pcount="pagination.pcount"
          >
          </v-pagination>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import './table.scss';
  import vPagination from "../pagination";
  import vLoading from "../loading";
  import * as Util from "../Util"; 
  export default{
    props: {
      'dataSource': {
        type: Array,
        default: []
      },
      'columns': {
        type: Array,
        default: []
      },
      'itemActions': {
        type: Array,
        default: []
      },
      'pagination': {
        type: Object,
        default: {}
      },
      'onChange': {
        type: Function,
        default: function() {
          return new Function();
        }
      },
      'loadingClass': {
        type: String,
        default: 'loading'
      },
      'loading': {
        type: Boolean,
        coerce: Util.coerceBoolean,
        default: false
      },
      'noDataClass': {
        type: String,
        default: 'noData'
      },
      'noDataTitle': {
        type: String,
        default: ''
      }
    },
    components: { vPagination, vLoading },
    data () {
      return {
        version: '0.0.1',
        eventPrefix: 'table:',
      };
    },
    computed: {
      noData () {
        return !this.loading && !this.dataSource.length;
      }
    },
    watch: {
      dataSource (value) {
        this.compileRender();
      }
    },
    ready () {
      this.compileRender();
    },
    created () {
      this.normalizeColumns();
    },
    methods: {
      // 按钮操作
      callActionHandle (action, item) {
        var func = action.callback;
        if (typeof this.$parent[func] == 'function') {
          this.$parent[func].call(this.$parent, item);
        }
      },
      hasCallback (item) {
        return item.callback ? true : false
      },
      callCallback (col, item) {
        var dataIndex = col.dataIndex;
        if ( ! this.hasCallback(col) ) return item[dataIndex];
        var args = col.callback.split('|')
        var func = args.shift();
        if (typeof this.$parent[func] == 'function') {
          return (args.length > 0)
                ? this.$parent[func].apply(this.$parent, [item[dataIndex]].concat(args))
                : this.$parent[func].call(this.$parent, item[dataIndex])
        }
        return;
      },
      // 分页
      changeHandle (cur) {
        this.onChange({page: cur});
      },
      // 排序
      sortHandle (item, type) {
        var s = 'asc';
        if('up' == type) {
          item.isSortUp = true;
          item.isSortDown = false;
        } else{
          s = 'desc';
          item.isSortUp = false;
          item.isSortDown = true;
        }
        this.onChange({page: 1, sortDirection: s, sortField: item.dataIndex});
      },
      // 初始化列表头字段 columns
      normalizeColumns () {
        var self = this;
        var obj;
        self.columns.forEach(function (column, i) {
          if (typeof (column) === 'string') {
            console.log('error 请传递对象');
          }
          obj = {
            title: column.title,
            visible: column.visible === undefined ? true : column.visible, // 是否显示
            titleClass: column.titleClass === undefined ? '' : column.titleClass, // 列表头类
            dataClass: column.dataClass === undefined ? '' : column.dataClass, // 列表内容类
            dataIndex: column.dataIndex === undefined ? '' : column.dataIndex, // 对应数据字段
            key: column.key === undefined ? '' : column.key, // vue需要的 key
            sorter: column.sorter === undefined ? false : column.sorter, // 排序
            callback: column.callback === undefined ? '' : column.callback, // 
            render: column.render === undefined ? '' : column.render, 
            isAction: column.isAction === undefined ? false : column.isAction // 是否显示操作
          };
          if(obj.sorter) {
            obj.isSortUp = false;
            obj.isSortDown = false;
          }
          self.columns.$set(i, obj);
        });
      },
      compileRender () {
        var self = this;

        // 将回调延迟到下次 DOM 更新循环之后执行。在修改数据之后立即使用它，然后等待 DOM 更新
        self.$nextTick(() => {
          // DOM 现在更新了
          self.$parent.$compile(self.$el.querySelector('tbody'));
        });
      },
      dispatchEvent (eventName, args) {
        this.$dispatch(this.eventPrefix + eventName, args);
      },
      broadcastEvent (eventName, args) {
        this.$broadcast(this.eventPrefix + eventName, args);
      }
    }
  };
</script>