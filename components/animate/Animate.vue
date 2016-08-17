<template>
  <slot></slot>
</template>
<script type="text/javascript">
import animation from '../base/openAnimation';
function getTrustSlotNode (node) {
  let childNode = node.nextSibling;
  if (childNode.nodeType !== 1) {
    return getTrustSlotNode(childNode)
  }
  return childNode;
}
const oTransitionName = {
  'fade': {
    enter: 'fadeIn',
    leave: 'fadeOut'
  },
  'slide': {
    enter: 'slideDown',
    leave: 'slideUp'
  }
};
export default{
  props: {
    show: {
      type: Boolean,
      default: false
    },
    duration: {
      type: Number,
      default: 400
    },
    transitionName: {
      type: String,
      default: 'fade'
    },
    onEnter: {
      type: Function,
      default () {
        return new Function();
      }
    },
    onLeave: {
      type: Function,
      default () {
        return new Function();
      }
    }
  },
  methods: {
    enter () {
      animation.enter(this.currentNode, this.duration, oTransitionName[this.transitionName].enter, () => {
        this.onEnter()
      });
    },
    leave () {
      animation.leave(this.currentNode, this.duration, oTransitionName[this.transitionName].leave, () => {
        this.onLeave();
      });
    }
  },
  watch: {
    show (val) {
      if(val) this.enter();
      else this.leave(); 
    }
  },
  computed: {
    currentNode () {
      return getTrustSlotNode(this.$el);
    }
  },
  ready () {
    if (!this.show) {
      this.currentNode.style.display = 'none';
    } else {
      this.currentNode.style.display = 'block';
    }
  }
}
</script>