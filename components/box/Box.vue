<template>
  <div class="box" :class="className">
    <div v-if="showHeader" class="box-header with-border">
      <slot name="header"></slot>
    </div>
    <div class="box-body">
      <slot></slot>
    </div>
    <div v-if="showFooter" class="box-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
<script>
  import * as Util from '../utils';
  export default{
    props: {
      showHeader: {
        type: Boolean,
        coerce: Util.coerceBoolean,
        default: true
      },
      showFooter: {
        type: Boolean,
        coerce: Util.coerceBoolean,
        default: false
      },
      theme: {
        type: String,
        default: 'primary'
      }
    },
    computed: {
      className () {
        return 'box-' + this.theme;
      }
    }
  }
</script>