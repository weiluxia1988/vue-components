<template>
  <component :is="currentView" 
    :percent="percent"
    :show-info="showInfo"
    :stroke-width="strokeWidth"
    :width="width"
    :status="status"
    :format="format"
  ></component>
</template>
<script>
  import * as Util from "../utils";
  import progressLine from './ProgressLine.vue';
  import progressCircle from './ProgressCircle.vue';
  export default{
    components: { progressLine, progressCircle },
    props: {
      type: {
        type: String,
        default: 'line'
      },
      showInfo: {
        type: Boolean,
        default: true
      },
      percent: {
        type: Number,
        coerce: Util.coerceNumber,
        default: 0
      },
      strokeWidth: null,
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
    computed: {
      currentView () {
        return this.type == 'line' ? 'progressLine' : 'progressCircle';
      }
    }
  }
</script>