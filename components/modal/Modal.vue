<!--
  对话弹窗
  weiluxia 2016.07.24
  show 对话框是否可见
  confirm-loading 确定按钮 loading
  title 标题
  on-ok 点击确定回调
  on-cancel 点击遮罩层或右上角叉或取消按钮的回调
  width 宽度  String or Number  默认值：600
  ok-text 确定文本  String  确定
  cancel-text 取消文本
-->
<template>
<div class="modal" 
  v-show="show"
  @click="closeHandle"
>
  <div class="modal-dialog" 
    :style="{width: width + 'px'}" 
    @click.stop
  >
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="closeHandle"><span aria-hidden="true">×</span></button>
        <h4 class="modal-title">{{title}}</h4>
      </div>
      <div class="modal-body">
        <slot></slot>
      </div>
      <div class="modal-footer">
        <v-button type="default" class-name="pull-left"
          @click="closeHandle">
          {{cancelText}}
        </v-button>
        <v-button type="primary" :loading="confirmLoading"
          @click="okHandle">
          {{okText}}
        </v-button>
      </div>
    </div><!-- /.modal-content -->
  </div><!-- /.modal-dialog -->
</div>
</template>
<script>
  import vButton from '../button/Button.vue';
  export default{
    components: { vButton },
    props: {
      show: {
        type: Boolean,
        coerce: function(val) {
          if(typeof val !== "string") {
            return val;
          } else if(val === "true") {
            return true;
          } else if(val === "false") {
            return false;
          } else if(val === "null") {
            return false;
          } else if(val === "undefined") {
            return false;
          } 
        },
        default: true
      },
      confirmLoading: {
        type: Boolean,
        default: false
      },
      title: {
        type: String,
        default: ''
      },
      width: {
        type: Number,
        default: 520
      },
      cancelText: {
        type: String,
        default: '取消'
      },
      okText: {
        type: String,
        default: '确定'
      },
      onOk: {
        type: Function,
        default () {
          return new Function();
        }
      },
      onCancel: {
        type: Function,
        default () {
          return new Function();
        }
      }
    },
    data () {
      return {
        toolName: 'modal',
        version: '0.0.1',
        eventPrefix: 'modal:'
      }
    },
    watch: {
      show: function (newValue, oldValue) {
        var self = this;
        var fn = function(e) {
          if(e.which == 27) {
            self.show = false;
          }
        };
        if(newValue) {
          document.body.addEventListener('keyup', fn, false);
        } else{
          this.onCancel();
          document.body.removeEventListener('keyup', fn, false);
        }
      }
    },
    methods: {
      closeHandle () {
        this.show = false;
      },
      okHandle () {
        this.onOk();
      },
      dispatchEvent (eventName, args) {
        this.$dispatch(this.eventPrefix + eventName, args);
      },
      broadcastEvent (eventName, args) {
        this.$broadcast(this.eventPrefix + eventName, args);
      }
    }
  }
</script>