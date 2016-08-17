<template>
  <ul class="v-tree" role="v-tree">
    <slot></slot>
  </ul>
</template>
<script>
  import './tree.scss';
  import vIcon from '../icon';
  import vCheckbox from '../checkbox';
  import * as Util from "../Util"; 
  export default {
    components: { vIcon, vCheckbox },
    props: {},
    data () {
      return {
        toolName: 'tree'
      }
    }
  }
</script>