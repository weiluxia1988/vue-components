<!--
  弹出框
  weiluxia 20160815
  placement 方向
  show 是否显示
  title 标题
  onVisibleChange 显示隐藏回调
-->
<template>
  <v-trigger prefix-cls="v-tooltip" :disabled="disabled" :show="show" :placement="placement" :trigger="trigger" :on-visible-change="onVisibleChange">
    <div slot="popup" class="v-tooltip tooltip" role="tooltip">
      <div class="tooltip-arrow"></div>
      <div class="tooltip-inner">
        {{{title}}}
      </div>
    </div>
    <span slot="trigger"><slot></slot></span>
  </v-trigger>
</template>
<script>
  import './tooltip.scss';
  import * as Util from "../Util"; 
  import vTrigger from '../base/trigger';
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
        default: 'hover'
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