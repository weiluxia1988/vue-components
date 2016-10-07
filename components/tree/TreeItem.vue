<template>
  <div class="v-tree-node"
     :class="{ expanded: childrenRendered && expanded, disabled: node.disabled }">
    <div class="v-tree-node__content" :style="{ 'padding-left': node.level * 16 + 'px' }"
         @click="handleExpandIconClick">
      <span class="v-tree-node__expand-icon"
        :class="{ 'is-leaf': node.isLeaf, expanded: !node.isLeaf && expanded }"
        ></span>
      <v-checkbox v-if="showCheckbox && !node.disableCheckbox" 
        :indeterminate="node.indeterminate"
        :disabled="node.disabled"
        :checked="node.checked" 
        :on-change="handleCheckChange" 
      ></v-checkbox>
      <span
        v-if="node.loading"
        class="v-tree-node__loading-icon"
      >  
        <v-icon type="rotate-right"></v-icon>
      </span>
      <span class="v-tree-node__label">{{ node.label }}</span>
    </div>
    <v-animate 
      :show="expanded" 
      transition-name="slide"
    >
      <div class="v-tree-node__children"
        v-show="expanded">
        <v-tree-node v-for="child in node.children" :node="child"></v-tree-node>
      </div>
    </v-animate>
  </div>
</template>

<script type="text/ecmascript-6">
  import './tree.scss';
  import vIcon from '../icon';
  import vCheckbox from '../checkbox';
  import vAnimate from '../animate';
  import * as Util from '../Util'; 
  export default {
    name: 'v-tree-node',
    components: { vCheckbox, vAnimate, vIcon},
    props: {
      node: {
        default() {
          return {};
        }
      }
    },
    data() {
      return {
        $tree: null,
        checked: false,
        disabled: false,
        disableCheckbox: false,
        expanded: false,
        childrenRendered: false, 
        showCheckbox: false,
        oldChecked: null,
        oldIndeterminate: null
      };
    },
    watch: {
      'node.indeterminate'(val) {
        this.handleSelectChange(this.node.checked, val);
      },
      'node.checked'(val) {
        this.handleSelectChange(val, this.node.indeterminate);
      }
    },
    methods: {
      getTree () {
        var parent = this.$parent;
        while(!parent.$isTree) {
          parent = parent.$parent;
        }
        return parent;
      },
      handleSelectChange(checked, indeterminate) {
        if(this.oldChecked !== checked && this.oldIndeterminate !== indeterminate) {
          this.$tree.$emit('check-change', this.node.data, checked, indeterminate);
        }
        this.oldChecked = checked;
        this.indeterminate = indeterminate;
      },
      handleExpandIconClick(event) {
        if(this.node.disabled) return;
        let target = event.target;
        if (target.tagName.toUpperCase() !== 'DIV' &&
                target.parentNode.nodeName.toUpperCase() !== 'DIV' ||
                target.nodeName.toUpperCase() === 'LABLE') {
          return;
        }
        if (this.expanded) {
          this.node.collapse();
          this.expanded = false;
        } else {
          this.node.expand(() => {
            this.expanded = true;
            this.childrenRendered = true;
          });
        }
        // 展开收起回调
        this.$tree.$emit('node-click', this.node.data);
        this.$tree.onExpand(this.expanded, this.node.data);
      },
      handleCheckChange(checked) {
        if(this.node.disabled) return;
        if (!this.node.indeterminate) {
          this.node.setChecked(checked, true);
        }
        // 复选框回调
        this.$tree.onCheck(checked, this.node, this.$tree.getCheckedNodes());
      }
    },
    created() {
      this.$tree = this.getTree();
      const tree = this.$tree;
      if (!tree) {
        console.warn('Can not find node\'s tree.');
      } else{
        this.showCheckbox = tree.showCheckbox;
      }
    },
    ready() {
      if(this.node.data.checked) {
        this.node.setChecked(true, true);
      }
      if(this.node.data.disabled) {
        this.node.disabled = this.node.data.disabled; 
      }
      if(this.node.data.disableCheckbox) {
        this.node.disableCheckbox = this.node.data.disableCheckbox; 
      }
    }
  };
</script>
