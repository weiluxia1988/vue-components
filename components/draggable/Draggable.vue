<template>
  <slot></slot>
</template>
<script>
  import * as Util from "../Util";
  export default{
    props: {
      draggable: {
        type: Boolean,
        default: true
      },
      list: {
        type: Array,
        default () {
          return [];
        }
      },
      onChange: {
        type: Function,
        default () {
          return new Function();
        }
      },
      styles: {
        type: Array,
        default () {
          return ['v-draggable-source', 'v-draggable-hover'];
        }
      }
    },
    methods: {
      dragstartHandle: function(node) {
        // 当拖拽元素开始被拖拽的时候触发的事件，此事件作用在被拖曳元素上
        this.dragNode = node;
        if(!this.draggable) return;
        node.classList.add(this.styles[0]);
      },
      dragenterHandle: function(node) {
        // 当拖曳元素进入目标元素的时候触发的事件，此事件作用在目标元素上
        if(!this.draggable) return;
        if(!this.dragNode || !this.containNode.contains(this.dragNode)) return;
        node.classList.add(this.styles[1]);
      },
      dragoverHandle: function(node) {
        // 拖拽元素在目标元素上移动的时候触发的事件，此事件作用在目标元素上
        if(!this.draggable) return;
        if(!this.dragNode || !this.containNode.contains(this.dragNode)) return;
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
      },
      dragleaveHandle: function(node) {
        // 当拖曳元素离开目标元素的时候触发的事件，此事件作用在目标元素上
        if(!this.draggable) return;
        if(!this.dragNode || !this.containNode.contains(this.dragNode)) return;
        node.classList.remove('dragHover');
      },
      dropHandle: function(node) {
        // 被拖拽的元素在目标元素上同时鼠标放开触发的事件，此事件作用在目标元素上
        event.preventDefault();
        if(!this.draggable) return;
        if(!this.dragNode || !this.containNode.contains(this.dragNode)) return;
        node.classList.remove(this.styles[1]);
        console.log(this.dragNode)
        // const sourceIdx = event.dataTransfer.getData("sourceIdx");
        // const targetIdx = idx;
        // if(sourceIdx != targetIdx) {
        //   const sourceItem = this.list[sourceIdx];
        //   const targetItem = this.list[targetIdx];
        //   this.list.$set(targetIdx, sourceItem);
        //   this.list.$set(sourceIdx, targetItem);
        //   this.onChange(this.list);
        // }
      },
      dragendHandle: function(node) {
        if(!this.draggable) return;
        // 当拖拽完成后触发的事件，此事件作用在被拖曳元素上
        event.preventDefault();
        node.classList.remove(this.styles[0]);
      }
    },
    ready () {
      this.containNode = Util.getTrustSlotNode(this.$el);
    }
  }
</script>