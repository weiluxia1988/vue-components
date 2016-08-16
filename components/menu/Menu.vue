<template>
  <ul class="v-menu clearfix" :class="className">
    <slot></slot>
  </ul>
</template>
<script>
  import * as Util from "../Util"; 
  import './menu.scss';
  // 主题色
  const oTheme = {
    'light': 'v-menu-light',
    'dark': 'v-menu-dark'
  };
  // 模式
  const oMode = {
    'vertical': 'v-menu-vertical',
    'inline': 'v-menu-inline',
    'horizontal': 'v-menu-horizontal'
  };
  export default{
    components: { },
    props: {
      theme: {
        type: String,
        default: 'light'
      },
      mode: {
        type: String,
        default: 'vertical'
      },
      openKeys: {
        type: Array,
        default () {
          return [];
        }
      },
      selectedKeys: {
        type: Array,
        default () {
          return [];
        }
      },
      onOpen: {
        type: Function,
        default () {
          return new Function();
        }
      },
      onClose: {
        type: Function,
        default () {
          return new Function();
        }
      },
      onClick: {
        type: Function,
        default () {
          return new Function();
        }
      }
    },
    data () {
      let self = this;
      return {
        toolName: 'menu',
        version: '0.0.1'
      }
    },
    computed: {
      className () {
        return oTheme[this.theme] + " " + oMode[this.mode];
      }
    },
    ready () {
      this.$broadcast('menu:openKeys', this.openKeys);
      this.$broadcast('menu:selectedKeys', this.selectedKeys);
    },
    watch: {
      openKeys (newValue) {
        this.$broadcast('menu:openKeys', newValue);
      },
      selectedKeys (newValue) {
        this.$broadcast('menu:selectedKeys', newValue);
      }
    },
    events: {
      'menu:menuItemClick' (params) {
        this.onClick(params);
      },
      'menu:toggleSubMenu' (params) {
        if(params.show) {
          this.onOpen(params.props);
        } else{
          this.onClose(params.props)
        }
      }
    }
    
  }
</script>