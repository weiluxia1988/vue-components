<template>
  <div class="v-tab" :class="className">
    <!-- Nav tabs -->
    <ul class="nav nav-tabs" role="tablist">
      <li
        v-for="item in renderData"
        v-bind:class="[item.className, ($index === active) ? 'active' : '', item.disabled ? 'disabled': '']"
        @click.stop="handleTabListClick($index, item)"
        :disabled="item.disabled"
      >
        {{{ item.nav }}}
      </li>
    </ul>

    <!-- Tab panes -->
    <div role="tabContent" v-el:tab-content>
      <slot></slot>
    </div> 
  </div>
</template>

<script>
  import * as Util from "../Util"; 
  export default {
    props: {
      className: {
        type: String,
        default: ''
      },
      effect: {
        type: String,
        default: 'fadein'
      },
      active: {
        type: Number,
        coerce: Util.coerceNumber,
        default: 0
      },
      onChange: {
        type: Function,
        default () {
          return new Function();
        }
      }
    },
    data() {
      return {
        renderData: []
      }
    },
    methods: {
      handleTabListClick: function(index, el) {
        if(!el.disabled) {
          this.active = index;
          this.onChange(this.active);
        }
      }
    },
    ready: function() {
      this.onChange(this.active);
    }
  }
</script>
