<!-- 
  table插件 
  weiluxia 2016.07.18  
  rowSelection 列表项是否可选择
  expandedRowRender 展开详细信息
  draggable 是否拖拽
  onDrag 回调
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
          <tbody v-el:drag-box>
            <template v-cloak v-for="item in dataSource">
              <tr data-sort="{{item.sort}}"
                draggable="{{draggable}}"
                @dragstart="dragstartHandle($index)"
                @dragenter="dragenterHandle($index)"
                @dragover="dragoverHandle($index)"
                @dragleave="dragleaveHandle($index)"
                @drop="dropHandle($index)"
                @dragend="dragendHandle($index)"
              >
                <template v-for="col in columns" v-if="col.visible">
                  <td v-if="col.isAction" class={{col.dataClass}}>
                    <a href="javascript:;" v-if="draggable" class="btn btn-default" title="拖拽">
                      <i class="fa fa-arrows"></i>
                    </a>
                    <template v-else>
                      <template v-if="opening">
                        <a href="javascript:;" v-show="!item.isOpen"  @click="toggleStateHandle(item, 'isOpen')" class="btn btn-default" title="展开">
                          <i class="fa fa-arrow-down"></i>
                        </a>
                        <a href="javascript:;" v-show="item.isOpen"  @click="toggleStateHandle(item, 'isOpen')" class="btn btn-default" title="收齐">
                          <i class="fa fa-arrow-up"></i>
                        </a>
                      </template>

                      <template v-if="editing">
                        <a href="javascript:;" class="btn btn-default" v-show="!item.isEdit"  title="修改" @click="toggleStateHandle(item, 'isEdit')">
                          <i class="fa fa-edit"></i>
                        </a>
                        <a href="javascript:;" class="btn btn-default" v-show="item.isEdit"  title="保存修改" @click="editHandle(item)">
                          <i class="fa fa-check-square-o"></i>
                        </a>
                      </template>

                      <template v-for="action in actions">
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

                    </template>
                  </td>
                  <td v-else class={{col.dataClass}}>
                    <template v-if="!(col.isEdit && item.isEdit)">{{{ callCallback(col, item) }}}</template>
                    <input type="text" class="form-control" v-if="col.isEdit && item.isEdit" v-model="item[col.dataIndex]">
                  </td>
                </template>
              </tr>
              <tr v-if="opening && item.isOpen">
                <td colspan="{{columns.length}}">{{{ renderOther(item, columns) }}}</td>
              </tr>
            </template>
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
  import * as Util from "../utils";
  export default{
    props: {
      'dataSource': {
        type: Array,
        default () {
          return [];
        }
      },
      'columns': {
        type: Array,
        default () {
          return [];
        }
      },
      'actions': {
        type: Array,
        default () {
          return [];
        }
      },
      'pagination': {
        type: Object,
        default: function () {
          return {}
        }
      },
      'onChange': {
        type: Function,
        default: function() {
          return new Function();
        }
      },
      'onEdit': {
        type: Function,
        default: function() {
          return new Function();
        }
      },
      'onDrag': {
        type: Function,
        default: function() {
          return new Function();
        }
      },
      'draggable': {
        type: Boolean,
        coerce: Util.coerceBoolean,
        default: false
      },
      'expandedRowRender': null,
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
        opening: false,
        editing: false
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
      this.initData();
    },
    methods: {
      initData () {
        var self = this;
        self.normalizeColumns();
        self.opening = !!self.expandedRowRender;
      },
      // 按钮操作
      callActionHandle (action, item) {
        var func = action.callback;
        if (typeof this.$parent[func] == 'function') {
          this.$parent[func].call(this.$parent, item);
        }
      },
      // 改变状态
      toggleStateHandle (one, type) {
        one[type] = !one[type];
      },
      hasCallback (item) {
        return item.callback ? true : false
      },
      // 数据渲染
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
      // 展开信息
      renderOther (item, columns) {
        return this.expandedRowRender && this.expandedRowRender(item, columns);
      },
      // 编辑
      editHandle (item) {
        this.toggleStateHandle(item, 'isEdit');
        this.onEdit(item);
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
        var flag = false;
        self.columns.forEach(function (column, i) {
          if (typeof (column) === 'string') {
            console.log('error 请传递对象');
          }
          if(column.isEdit) flag = true;
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
            isAction: column.isAction === undefined ? false : column.isAction, // 是否显示操作
            isEdit: column.isEdit === undefined ? false : column.isEdit // 是否编辑
          };
          if(obj.sorter) {
            obj.isSortUp = false;
            obj.isSortDown = false;
          }
          self.columns.$set(i, obj);
        });
        self.editing = flag;
      },
      compileRender () {
        var self = this;

        // 将回调延迟到下次 DOM 更新循环之后执行。在修改数据之后立即使用它，然后等待 DOM 更新
        self.$nextTick(() => {
          // DOM 现在更新了
          self.$parent.$compile(self.$el.querySelector('tbody'));
        });
      },
      dragstartHandle (idx) {
        // 当拖拽元素开始被拖拽的时候触发的事件，此事件作用在被拖曳元素上
        if(!this.draggable) return;
        event.dataTransfer.setData("sourceIdx", idx);
      },
      dragenterHandle (idx) {
        // 当拖曳元素进入目标元素的时候触发的事件，此事件作用在目标元素上
        if(!this.draggable) return;
      },
      dragoverHandle (idx) {
        // 拖拽元素在目标元素上移动的时候触发的事件，此事件作用在目标元素上
        if(!this.draggable) return;
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
      },
      dragleaveHandle (idx) {
        // 当拖曳元素离开目标元素的时候触发的事件，此事件作用在目标元素上
        if(!this.draggable) return;
      },
      dropHandle (idx) {
        // 被拖拽的元素在目标元素上同时鼠标放开触发的事件，此事件作用在目标元素上
        event.preventDefault();
        if(!this.draggable) return;
        const sourceIdx = event.dataTransfer.getData("sourceIdx");
        const targetIdx = idx;
        if(sourceIdx != targetIdx) {
          const sourceItem = this.dataSource[sourceIdx];
          const targetItem = this.dataSource[targetIdx];
          this.dataSource.$set(targetIdx, sourceItem);
          this.dataSource.$set(sourceIdx, targetItem);
          this.onDrag(this.dataSource);
        }
      },
      dragendHandle (idx) {
        if(!this.draggable) return;
        // 当拖拽完成后触发的事件，此事件作用在被拖曳元素上
        event.preventDefault();
        // event.target.classList.remove(this.styles[0]);
      }
    }
  };
</script>