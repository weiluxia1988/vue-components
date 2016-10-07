export default {
  dragstartHandle (idx) {
    // 当拖拽元素开始被拖拽的时候触发的事件，此事件作用在被拖曳元素上
    if(!this.draggable) return;
    event.dataTransfer.setData("sourceIdx", idx);
  },
  dragenterHandle (idx) {
    // 当拖曳元素进入目标元素的时候触发的事件，此事件作用在目标元素上
    if(!this.draggable) return;
  },
  dragoverHandle (idx) {
    // 拖拽元素在目标元素上移动的时候触发的事件，此事件作用在目标元素上
    if(!this.draggable) return;
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  },
  dragleaveHandle (idx) {
    // 当拖曳元素离开目标元素的时候触发的事件，此事件作用在目标元素上
    if(!this.draggable) return;
  },
  dropHandle (idx) {
    // 被拖拽的元素在目标元素上同时鼠标放开触发的事件，此事件作用在目标元素上
    event.preventDefault();
    if(!this.draggable) return;
    const sourceIdx = event.dataTransfer.getData("sourceIdx");
    const targetIdx = idx;
    if(sourceIdx != targetIdx) {
      const sourceItem = this.list[sourceIdx];
      const targetItem = this.list[targetIdx];
      this.list.$set(targetIdx, sourceItem);
      this.list.$set(sourceIdx, targetItem);
      this.onDrag(this.list);
    }
  },
  dragendHandle (idx) {
    if(!this.draggable) return;
    // 当拖拽完成后触发的事件，此事件作用在被拖曳元素上
    event.preventDefault();
  }
}