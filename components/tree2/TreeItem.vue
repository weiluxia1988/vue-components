<template>
  <li :class="liClassName" role="tree-item">
    <span class="v-tree-switcher" :class="switchClassName" @click="expandHandle">
      <v-icon v-show="isFolder" type="sort-desc"></v-icon>
    </span>
    <span class="v-tree-checkbox" v-if="checkable"><v-checkbox :on-change="checkHandle" :disabled="_disableCheckbox" :checked="isChecked"></v-checkbox></span>
    <a href="javascript:;" @click="selectHandle" class="v-tree-title">{{{ title }}}</a>
    <v-Animate 
      :show="isExpanded" 
      transition-name="slide"
    >
      <ul v-show="isFolder" class="v-tree-child-tree" :class="treeChildClassName">
        <slot></slot>
      </ul>
    </v-Animate>
  </li>
</template>
<script>
  import './tree.scss';
  import vIcon from '../icon';
  import vCheckbox from '../checkbox';
  import vAnimate from '../animate';
  import * as Util from '../Util'; 
  export default {
    components: { vIcon, vCheckbox, vAnimate },
    props: {
      disabled: { // 禁掉响应
        type: Boolean,
        coerce: Util.coerceBoolean,
        default: false
      },
      disableCheckbox: { // 禁掉checkbox
        type: Boolean,
        coerce: Util.coerceBoolean,
        default: false
      },
      key: {
        type: String,
        default: ''
      },
      title: {
        type: String,
        default: ''
      },
      multiple: { // 是否支持多选
        type: Boolean,
        coerce: Util.coerceBoolean,
        default: true
      },
      checkable: { // 是否支持选中
        type: Boolean,
        coerce: Util.coerceBoolean,
        default: true
      },
      isExpanded: { // 是否展开树节点
        type: Boolean,
        coerce: Util.coerceBoolean,
        default: false
      },
      isChecked: { // checkbox是否选中
        type: Boolean,
        coerce: Util.coerceBoolean,
        default: true
      },
      onItemClick: {
        type: Function,
        default () {
          return new Function();
        }
      },
      onItemCheck: {
        type: Function,
        default () {
          return new Function();
        }
      },
      onItemExpand: {
        type: Function,
        default () {
          return new Function();
        }
      }
    },
    data () {
      return {
        toolName: 'treeItem',
        isFolder: false
      }
    },
    computed: {
      liClassName () {
        return this.disabled ? 'v-tree-item-disabled' : '';
      },
      switchClassName () {
        return this.isExpanded ? 'v-tree-switcher-open' : 'v-tree-switcher-close';
      },
      treeChildClassName () {
        return this.isExpanded ? 'v-tree-child-tree-open' : 'v-tree-child-tree-close';
      },
      _disableCheckbox () {
        return !(!this.disableCheckbox && !this.disabled);
      }
    },
    methods: {
      // 展开收起列表
      expandHandle () {
        if(this.disabled) return;
        this.isExpanded = !this.isExpanded;
        this.onItemExpand();
      },
      // 点击树节点
      selectHandle () {
        this.onItemClick();
      },
      // 是否选中checkbox
      checkHandle (flag) {
        this.isChecked = flag;
        this.setParentChecked();
        this.setChildChecked(flag);
        this.onItemCheck();
      },
      // 设置父组件
      setParentChecked () {
        let $parent = this.$parent;
        while ('treeItem' === $parent.toolName) {
          const $children = $parent.$children;
          const $newChildren = this.getTreeItem($children);
          let isChecked = true;
          $newChildren.forEach(($child, index) => {
            isChecked = $child.isChecked && isChecked;
          });
          $parent.isChecked = isChecked;
          $parent = $parent.$parent;
        }
      },
      // 设置子组件
      setChildChecked (flag) {
        function getArray(arr){
          const $newChildren = self.getTreeItem(arr);
          $newChildren.forEach(($child, index) => {
            $child.isChecked = flag;
            $child.$children && getArray($child.$children);
          });
        }
        let self = this;
        let $children = this.$children;
        getArray($children);
      },
      // 获得树组件
      getTreeItem (arr) {
        return arr.filter((one, index) => {
          return 'treeItem' === one.toolName;
        });
      }
    },
    created() {
      var parent = this.$parent;
      if('treeItem' === parent.toolName) {
        parent.isFolder = true;
      }
    }
  }
</script>