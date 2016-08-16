<template>
  <slot></slot>
</template>
<script>
  import * as Util from "../../Util";
  import align from 'dom-align'
  export default{
    props: {
      className: {
        type: String,
        default: ''
      },
      align: {
        type: Object,
        default () {
          return {};
        }
      },
      onAlign: {
        type: Function,
        default () {
          return new Function();
        }
      },
      show: {
        type: Boolean,
        coerce: Util.coerceBoolean,
        default: false
      },
      onMouseEnter: {
        type: Function,
        default () {
          return new Function();
        }
      },
      onMouseLeave: {
        type: Function,
        default () {
          return new Function();
        }
      },
      getTarget: {
        default: function (){
          const self = this;
          return function () { return this.$el }
        }
      }
    },
    computed: {
      currentNode () {
        return Util.getTrustSlotNode(this.$el);
      }
    },
    watch: {
      show (val) {
        this.doAlign(val);
      }
    },
    methods: {
      doAlign (flag) {
        const target = this.getTarget();
        if (!target) return;
        const currentNode = this.currentNode;
        if(flag) {
          currentNode.style.display = 'block';
          this.onAlign(currentNode, align(currentNode, target, this.align));
        } else{
          currentNode.style.display = 'none';
        }
      }
    },
    ready () {
      // 防止错位
      if(this.className) this.currentNode.classList.add(this.className);
      if(this.show) this.doAlign(true);
      this.currentNode.addEventListener('mouseenter', this.onMouseEnter, false);
      this.currentNode.addEventListener('mouseleave', this.onMouseLeave, false);
    }
  }
</script>