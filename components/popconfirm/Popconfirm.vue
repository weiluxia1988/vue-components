<!--
  气泡确认框
  title 标题
  placement 方向
  okText 确认按钮文字
  cancelText  取消按钮文字
  onCancel 取消回调
  onConfirm 确认回调
-->
<template>
  <v-popover :show.sync="show" :trigger="trigger" :placement="placement" :on-visible-change="onVisibleChange">
    <div slot="content">
      <div class="popover-message">{{{ title }}}</div>
      <div class="popover-buttons">
        <v-button size="small" :onclick="cancelHandle.bind($parent)">{{ cancelText }}</v-button>
        <v-button size="small" type="primary" :onclick="confirmHandle.bind($parent)">{{ okText }}</v-button>
      </div>
    </div>
    <slot></slot>
  </v-popover>
</template>
<script>
  import * as Util from "../Util";
  import vButton from '../button';
  import vPopover from '../popover';
  export default{
    components: { vButton, vPopover },
    props: {
      trigger: {
        type: String,
        default: 'click'
      },
      title: {
        type: String,
        default: ''
      },
      placement: {
        type: String,
        default: 'bottom'
      },
      cancelText: {
        type: String,
        default: '取消'
      },
      okText: {
        type: String,
        default: '确定'
      },
      onVisibleChange: {
        type: Function,
        default () {
          return new Function();
        }
      },
      onConfirm: {
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
      },
      show: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      cancelHandle () {
        this.show = false;
        this.onCancel();
      },
      confirmHandle () {
        this.show = false;
        this.onConfirm();
      }
    }
  }
</script>