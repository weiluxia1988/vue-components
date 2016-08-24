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
  <v-trigger prefix-cls="v-popover" :disabled="disabled" :show.sync="show" :placement="placement" :trigger="trigger" :on-visible-change="onVisibleChange">
    <div slot="popup" @click.stop class="v-popover popover" role="popover">
      <div class="arrow"></div>
      <h3 class="popover-title" v-if="title">{{{title}}}</h3>
      <div class="popover-content">
        <template v-if="content">
          {{{ content }}}
        </template>  
        <template v-else>
          <slot name="content"></slot>
        </template>
      </div>
    </div>
    <span slot="trigger"><slot></slot></span>
  </v-trigger>
</template>
<script>
  import './popover.scss';
  import * as Util from "../../Util"; 
  import vTrigger from '../trigger';
  export default{
    components: { vTrigger },
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