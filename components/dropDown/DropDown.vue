<template>
  <v-trigger prefix-cls="v-dropDown" :show="show" :placement="placement" :trigger="trigger" :on-visible-change="onVisibleChange">
    <div slot="popup" class="v-dropDown" role="dropDown">
      <slot name="content"></slot>
    </div>
    <span slot="trigger"><slot></slot></span>
  </v-trigger>
</template>
<script>
  const mouseEnterDelay = 0;
  const mouseLeaveDelay = 0.1;
  import './dropDown.scss';
  import * as Util from "../Util"; 
  import vTrigger from '../base/trigger';
  export default{
    components: { vTrigger },
    props: {
      trigger: {
        type: String,
        default: 'click'
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
      placement: {
        type: String,
        default: 'bottomLeft'
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