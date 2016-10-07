<template>
  <div class="v-tree">
    <v-tree-item v-for="child in tree.root.children" :node="child"></v-tree-item>
  </div>
</template>

<script type="text/ecmascript-6">
  import './tree.scss';
  import Tree from './model/tree';
  import vTreeItem from './TreeItem.vue';
  import * as Util from '../Util'; 
  export default {
    name: 'v-tree',
    components: { vTreeItem },
    props: {
      data: {
        type: Array
      },
      showCheckbox: {
        type: Boolean,
        coerce: Util.coerceBoolean,
        default: false
      },
      config: {
        default() {
          return {
            children: 'children',
            label: 'label',
            icon: 'icon'
          };
        }
      },
      lazy: {
        type: Boolean,
        coerce: Util.coerceBoolean,
        default: false
      },
      loadData: {
        type: Function,
        default () {
          return new Function();
        }
      },
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
    created() {
      this.$isTree = true;
      this.tree = new Tree({
        data: this.data,
        lazy: this.lazy,
        props: this.config,
        load: this.loadData
      });
    },
    data() {
      return {
        tree: {}
      };
    },
    computed: {
      children: {
        set(value) {
          this.data = value;
        },
        get() {
          return this.data;
        }
      }
    },
    methods: {
      getCheckedNodes(leafOnly) {
        return this.tree.getCheckedNodes(leafOnly);
      }
    }
  };
</script>
