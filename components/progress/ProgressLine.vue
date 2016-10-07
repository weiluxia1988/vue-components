<template>
  <div class="v-progress-outer v-progress-line">
    <span class="v-progress-text" v-if="showInfo">
      {{{ render() }}}
    </span>
    <div class="v-progress-inner">
      <div class="v-progress-bg"
        :style="{width: percent + '%', height: strokeWidth + 'px', background: strokeColor}"
      ></div>
    </div>
  </div>
</template>
<script>
  import './progress.scss';
  import * as Util from "../utils";
  const statusColorMap = {
    'normal': '#2db7f5',
    'error': '#f50',
    'success': '#87d068'
  }
  export default{
    props: {
      showInfo: {
        type: Boolean,
        default: true
      },
      percent: {
        type: Number,
        coerce: Util.coerceNumber,
        default: 0
      },
      strokeWidth: {
        type: Number,
        coerce: Util.coerceNumber,
        default: 10
      },
      status: {
        type: String,
        default: 'normal'
      },
      format: null
    },
    watch: {
      percent (val) {
        if(100 == val) {
          this.status = 'success';
        } else{
          this.status = 'normal';
        }
      }
    },
    computed: {
      strokeColor () {
        return statusColorMap[this.status];
      },
    },
    methods: {
      // 数据渲染
      render () {
        if (typeof this.format == 'function') {
          return this.format.call(this._context, this.percent);
        } else{
          return this.percent + '%';
        }
      }
    }
  }
</script>