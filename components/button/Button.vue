<template>
  <button type="button" class="btn v-button" 
  @click="onclick"
  :class="[btClasses, disabled? 'disabled': '', loading? 'v-button-loading' : '']"
  >
    <slot></slot>
  </button>
</template>
<script>
  import "./button.scss";
  import * as Util from "../Util"; 
  // 按钮类型
  const oTypeClass = {
    'default': 'btn-default',
    'primary': 'btn-primary',
    'success': 'btn-success',
    'info': 'btn-info',
    'danger': 'btn-danger',
    'warn': 'btn-warning'
  };
  // 按钮形状
  const oShapeClass = {
    'default': '',
    'flat': 'btn-flat'
  };
  // 按钮大小
  const oSizeClass = {
    'default': '',
    'big': 'btn-lg',
    'small': 'btn-sm',
    'xSmall': 'btn-xs'
  };
  export default{
    props: {
      type: {
        type: String,
        default: 'default'
      },
      size: {
        type: String,
        default: 'default'
      },
      shape: {
        type: String,
        default: 'default'
      },
      className: {
        type: String,
        default: ''
      },
      disabled: {
        type: Boolean,
        coerce: Util.coerceBoolean,
        default: false
      },
      loading: {
        type: Boolean,
        coerce: Util.coerceBoolean,
        default: false
      },
      onclick: {
        type: Function,
        default () {
          return new Function();
        }
      }
    },
    data () {
      return {
        version: '0.0.1',
        eventPrefix: 'button:'
      }
    },
    computed: {
      btClasses () {
        return oTypeClass[this.type]+ ' ' + oSizeClass[this.size] + ' ' + oShapeClass[this.shape]+ ' ' + this.className;
      }
    }
  }
</script>