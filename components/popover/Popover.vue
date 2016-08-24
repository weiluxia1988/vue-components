<!--
  弹出框
  trigger 触发方式
  placement 方向
  show 是否显示
  title 标题
  content 内容
  onVisibleChange 显示隐藏回调
-->
<template>
  <v-popover :disabled="disabled" :show.sync="show" :trigger="trigger" :placement="placement" :on-visible-change="onVisibleChange" :title="title">
    <div slot="content">
      <template v-if="content">
        {{{ content }}}
      </template>  
      <template v-else>
        <slot name="content"></slot>
      </template>
    </div>
    <slot></slot>
  </v-popover>
</template>
<script>
  import * as Util from "../Util"; 
  import vPopover from '../base/popover';
  export default{
    components: { vPopover },
    props: {
      title: {
        type: String,
        default: ''
      },
      content: {
        type: String,
        default: ''
      },
      trigger: {
        type: String,
        default: 'click'
      },
      placement: {
        type: String,
        default: 'top'
      },
      show: {
        type: Boolean,
        coerce: Util.coerceBoolean,
        default: false
      },
      disabled: {
        type: Boolean,
        coerce: Util.coerceBoolean,
        default: false
      },
      onVisibleChange: {
        type: Function,
        default () {
          return new Function();
        }
      }
    }
  }
</script>