<template>
  <li class="v-menu-item" :class="className" @click="selectHandle">
    <slot></slot>
  </li>
</template>
<script>
  let seed = 0
  const now = Date.now();
  function getUid () {
    return 'menuitem_' + now + '_' + (seed++);
  }
  import * as Util from "../Util";

  const oTypeStyle = {
    'disabled': 'v-menu-item-disabled',
    'active': 'v-menu-item-active'
  };
  export default {
    props: {
      disabled: {
        type: Boolean,
        coerce: Util.coerceBoolean,
        default: false
      },
      key: {
        type: String,
        default: ''
      }
    },
    data () {
      return {
        isActive: false
      };
    },
    beforeCompile () {
      this.$set('key', this.key || getUid());
    },
    events: {
      'menu:selectedKeys' (arr) {
        if(arr.includes(this.key)) this.isActive = true;
      }
    },
    computed: {
      className () {
        let arr = [];
        if(this.disabled) arr.push(oTypeStyle['disabled']);
        if(this.isActive) arr.push(oTypeStyle['active']);
        return arr.join(' ');
      }
    },
    methods: {
      selectHandle() {
        if(this.disabled) return;
        this.$dispatch('menu:menuItemClick', {item: this, event: event, key: this.key});
      }
    }
  }
</script>