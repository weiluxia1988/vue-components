<template>
  <div class="newsType-content clearfix">
  	<div class="toolbar clearfix">
			<button class="btn btn-primary pull-right" @click="addHandle">新建分类</button>
      <v-modal
        :show.sync="modalConfig.show"
        :width="modalConfig.width"
        :title="modalConfig.title"
        :confirm-loading="modalConfig.confirmLoading"
        :on-cancel="modalConfig.onCancel"
        :on-ok="modalConfig.onOk"
      >
        <input class="form-control" v-model="txt">
      </v-modal>
      <button class="btn btn-primary pull-right" style="margin-right:20px;" @click="dragHandle">
        <template v-if="!isDrag">排序</template>
        <template v-else="isDrag">保存</template>
      </button>
  	</div>

    <v-table 
      :data-source="oTable.dataSource" 
      :columns="oTable.columns"
      :item-actions="oTable.itemActions"
      :pagination="oTable.pagination"
      :on-drag="oTable.onDrag"
      :on-edit="oTable.onEdit"
      :draging="oTable.draging"
      :loading="oTable.loading"
      no-data-title="暂无数据"
    >
    </v-table>
    
  </div>
</template>
<script>
  import * as Util from "../../Util";
  import vTable from "../../../components/table/Table-special.vue";
  import vModal from "../../../components/modal/Modal.vue";

  // 列表头
  const columns = [
    {
      title: '标题', // 列头显示文字
      dataIndex: 'name', // 列数据在数据项中对应的 key
      key: 'name', // vue需要的 key
      isEdit: true
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
      name: 'delete-item', 
      label: 'delete', 
      class: 'btn btn-default',
      title: "删除",
      icon: 'fa fa-times',
      callback: 'delHandle'
    }
  ];

  export default{
    components: {vTable, vModal},
    data: function() {
      return {
        isDrag: false,
        txt: '',
        modalConfig: {
          show: false,
          title: '新建分类',
          width: 400,
          confirmLoading: false,
          onCancel: this.cancelTypeCallback,
          onOk: this.saveTypeCallback
        },
        oTable: {
          url: URLConfig('newsTypeList'),
          search: '',
          columns: columns,
          dataSource: [],
          pagination: {},
          loading: false,
          draging: false,
          onEdit: this.editCallback,
          onDrag: this.dragCallback,
          itemActions: itemActions
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
      // 加载列表信息
      loadList (params) {
        var self = this;
        self.oTable.loading = true;
        self.doAjax({
          url: self.oTable.url,
          method: 'get',
          data: params,
          sucCallback: function(data) {
            $.each(data.list, function(i, one) {
              one.isDrag = false; // 拖拽
              one.isEdit = false; // 在table编辑
            });
            self.oTable.loading = false;
            self.oTable.dataSource = data.list;
            self.oTable.pagination = data.page;
          }
        });
      },
      // 删除
      delHandle (one) {
        var self = this;
        self.doAjax({
          url: URLConfig('newsTypeDelete'),
          method: 'get',
          data: {id: one.id},
          sucCallback: function(data) {
            self.$dispatch('lu-notify', {msg: '删除成功', duration: 1000, show: true});
            self.oTable.dataSource.$remove(one);
          }
        });
      },
      // 编辑
      editCallback (one) {
        var self = this;
        var params = {
          id: one.id,
          name: one.name
        };
        self.doAjax({
          url: URLConfig('newsTypeEdit'),
          method: 'get',
          data: params,
          sucCallback: function(data) {
            self.$dispatch('lu-notify', {msg: '修改成功', duration: 1000, show: true});
          }
        });
      },
      // 添加
      addHandle () {
        var self = this;
        self.modalConfig.show = true;
      },
      // 弹窗--取消
      cancelTypeCallback () {
        this.txt = '';
      },
      // 弹窗--确认
      saveTypeCallback () {
        var self = this;
        if('' == self.txt) {
          self.$dispatch('lu-notify', {msg: '内容不能为空！', duration: 1000, show: true});
        } else{
          self.modalConfig.confirmLoading = true;
          self.doAjax({
            url: URLConfig('newsTypeAdd'),
            method: 'get',
            data: {name: self.txt},
            sucCallback: function(data) {
              self.$dispatch('lu-notify', {msg: '添加成功', duration: 1000, show: true});
              self.txt = '';
              self.modalConfig.confirmLoading = false;
              self.modalConfig.show = false;
              setTimeout(()=>{
                window.location.reload();
              }, 1000)
            }
          });
        }
      },
      // 排序
      dragHandle () {
        var self = this;
        self.isDrag = !self.isDrag;
        self.oTable.draging = self.isDrag;
      },
      // 拖拽回调
      dragCallback (data) {
        var self = this;
        var params = [];
        $.each(data, function(i, one) {
          params.push(one.id);
        });
        self.doAjax({
          url: URLConfig('newsTypeSort'),
          method: 'get',
          data: {list: params},
          sucCallback: function(data) {
            self.$dispatch('lu-notify', {msg: '排序成功', duration: 1000, show: true});
          }
        });
      }
    },
    route: {
      data: function() {
        this.loadList();
      }
    }
  }
</script>
