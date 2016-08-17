<template>
  <li :class="liClassName" role="v-tree-item">
    <span class="v-tree-switcher" :class="switchClassName" @click="toggle">
      <v-icon v-if="isFolder" type="sort-desc"></v-icon>
    </span>
    <span class="v-tree-checkbox"><v-checkbox :disabled="disableCheckbox" :checked.sync="isSelected"></v-checkbox></span>
    <a href="javascript:;" class="v-tree-title">{{{ title }}}</a>
    <template v-if="isFolder">
      <v-Animate 
        :show="isOpened" 
        transition-name="slide"
      >
        <ul class="v-tree-child-tree" :class="treeChildClassName">
          <slot></slot>
        </ul>
      </v-Animate>
    </template>
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
      disabled: {
        type: Boolean,
        coerce: Util.coerceBoolean,
        default: false
      },
      disableCheckbox: {
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
      }
    },
    data () {
      return {
        toolName: 'treeItem',
        isOpened: true, // 孩子树是否打开
        isSelected: false, // checkbox是否选中
        isFolder: true // 是否含有孩子树
      }
    },
    computed: {
      liClassName () {
        return this.disabled ? 'v-tree-treeitem-disabled' : '';
      },
      switchClassName () {
        return this.isOpened ? 'v-tree-switcher-open' : 'v-tree-switcher-close';
      },
      treeChildClassName () {
        return this.isOpened ? 'v-tree-child-tree-open' : 'v-tree-child-tree-close';
      }
    },
    methods: {
      toggle () {
        this.isOpened = !this.isOpened;
      }
    },
    watch: {
      isSelected (newValue) {
        const $children = this.$el.querySelectorAll('[role="v-tree-item"]');
        [...$children].forEach(($child, index) => {
          const vChild = $child.__vue__;
          console.log(vChild)
          vChild.isSelected = newValue;
        });
        
        // this.$parent.isSelected = false;
      }
    },
    ready () {
      const self = this;
      const $children = self.$el.querySelectorAll('[role="v-tree-item"]');
      if($children.length) {
        self.isFolder = true;
      } else{
        self.isFolder = false;
      }
    }
  }
</script>