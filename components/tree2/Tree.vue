<!--
  树形控件
  weiluxia 2016.08.19
  multiple 是否支持多选
  checkable 是否支持选中 ok
  expandAll 默认展开所有树节点 ok
  expandedKeys 展开指定的树节点 
  checkedKeys 选中复选框的树节点 (默认展开树节点)
  selectedKeys 设置选中的树节点（默认展开树节点以及选中复选框）
  onExpand 展开/收起节点时触发 ok
  onCheck 点击复选框触发 ok
  onSelect 点击树节点触发 ok
-->
<template>
  <ul class="v-tree" role="tree">
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
    props: {
      multiple: {
        type: Boolean,
        coerce: Util.coerceBoolean,
        default: true
      },
      checkable: {
        type: Boolean,
        coerce: Util.coerceBoolean,
        default: false
      },
      expandAll: {
        type: Boolean,
        coerce: Util.coerceBoolean,
        default: false
      },
      expandedKeys: null,
      checkedKeys: null,
      selectedKeys: null,
      onExpand: {
        type: Function,
        default () {
          return new Function();
        }
      },
      onCheck: {
        type: Function,
        default () {
          return new Function();
        }
      },
      onSelect: {
        type: Function,
        default () {
          return new Function();
        }
      }
    },
    data () {
      return {
        toolName: 'tree'
      }
    },
    methods: {
      // 获得展开的key
      getExpandKey () {
        let expandedKeys = this.expandedKeys;
        return expandedKeys;
      },
      setExpandKey () {
      },
      // 获得选中的key
      getCheckKey () {
        let expandedKeys = this.expandedKeys;
        return expandedKeys;
      },
      setCheckKey () {
      },
      // 获得点击的key
      getSelectKey () {
        let expandedKeys = this.expandedKeys;
        return expandedKeys;
      },
      setSelectKey () {
      },
      handleClickItem (key) {
        // 返回数组
        this.onSelect(key);
      },
      handleCheckItem (key) {
        // 返回数组
        this.onCheck(key);
      },
      handleExpandItem (key) {
        // 返回数组
        this.onExpand(key);
      },
    },
    ready () {
      const self = this;
      const expandedKeys = self.getExpandKey();
      const $children = self.$el.querySelectorAll('[role="tree-item"]');
      // $chidren(nodelist) 转为数组
      [...$children].forEach(($child, index) => {
        const vChild = $child.__vue__;
        const key = vChild.key;
        vChild.multiple = self.multiple;
        vChild.checkable = self.checkable;
        vChild.isExpanded = self.expandAll;
        let isExpanded = false;
        Array.isArray(expandedKeys) && (isExpanded = expandedKeys.includes(key));
        vChild.isExpanded = isExpanded;

        // 事件绑定
        vChild.onItemClick = self.handleClickItem.bind(this, key);
        vChild.onItemCheck = self.handleCheckItem.bind(this, key);
        vChild.onItemExpand = self.handleExpandItem.bind(this, key);
      });
    }
  }
</script>