<template>
  <div class="v-progress-outer v-progress-circle" :class="'v-progress-status-' + status">
    <div class="v-progress-inner"
      :style="{
        'width': width + 'px',
        'height': width + 'px',
        'fontSize': width * 0.16 + 6 + 'px'
      }"
    >
      <svg viewBox='0 0 100 100'>
        <path :d="pathString" :stroke="trailColor"
          :stroke-width="trailWidth" fill-opacity='0'/>
        <path :d="pathString" stroke-linecap='round'
          :stroke="strokeColor" :stroke-width="strokeWidth" fill-opacity='0' :style="pathStyle" />
      </svg>
      <span class="v-progress-text" v-if="'success' == status">
        <i class="fa fa-check" ></i>
      </span>
      <span class="v-progress-text" v-if="'error' == status">
        <i class="fa fa-remove" ></i>
      </span>
      <span class="v-progress-text" v-if="'normal' == status">
        {{{ render() }}}
      </span>
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
        default: 6
      },
      width: {
        type: Number,
        coerce: Util.coerceNumber,
        default: 132
      },
      status: {
        type: String,
        default: 'normal'
      },
      format: null
    },
    data () {
      return {
        trailColor: '#e9e9e9'
      }
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
      trailWidth () {
        return this.strokeWidth;
      },
      strokeColor () {
        return statusColorMap[this.status];
      },
      radius () {
        return 50 - this.strokeWidth / 2;
      },
      pathString () {
        return `M 50,50 m 0,-${this.radius}
                a ${this.radius},${this.radius} 0 1 1 0,${2 * this.radius}
                a ${this.radius},${this.radius} 0 1 1 0,-${2 * this.radius}`;
      },
      pathStyle () {
        const len = Math.PI * 2 * this.radius;
        return {
          'strokeDasharray': `${len}px ${len}px`,
          'strokeDashoffset': `${((100 - this.percent) / 100 * len)}px`,
          'transition': 'stroke-dashoffset 0.6s ease 0s, stroke 0.6s ease'
        };
      }
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