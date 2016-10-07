<template>
  <slot></slot>
</template>
<script>
  import * as Util from "../Util";
  export default{
    data () {
      return {
        idx: 0
      }
    },
    methods: {
      dragstartHandle () {
        this.$parent.dragstartHandle(event.target);
      },
      dragenterHandle () {
        this.$parent.dragenterHandle(event.target);
      },
      dragoverHandle () {
        this.$parent.dragoverHandle(event.target);
      },
      dragleaveHandle () {
        this.$parent.dragleaveHandle(event.target);
      },
      dropHandle () {
        this.$parent.dropHandle(event.target);
      },
      dragendHandle () {
        this.$parent.dragendHandle(event.target);
      }
    },
    ready () {
      const el = Util.getTrustSlotNode(this.$el);
      // for(var c in this.$parent.$children) {
      //   if(this.$parent.$children[c].$el == this.$el) {
      //     this.idx = c;
      //     break;
      //   }
      // }
      if (el) {
        el.setAttribute('draggable', true);
        el.addEventListener('dragstart', this.dragstartHandle, false);
        el.addEventListener('dragenter', this.dragenterHandle, false);
        el.addEventListener('dragover', this.dragoverHandle, false);
        el.addEventListener('dragleave', this.dragleaveHandle, false);
        el.addEventListener('drop', this.dropHandle, false);
        el.addEventListener('dragend', this.dragendHandle, false);
      }
    }
  }
</script>