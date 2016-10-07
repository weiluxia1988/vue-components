<template>
  <div class="tab-pane" role="tabpanel"
    v-show="show"
    :class="show ?'active': ''"
    :transition="transition"
  >
    <slot></slot>
  </div>
</template>

<script>
  import * as Util from "../Util"; 
  export default {
    props: {
      nav: {
        type: String,
        default: ''
      },
      disabled: {
        type: Boolean,
        coerce: Util.coerceBoolean,
        default: false
      },
      className: {
        type: String,
        default: ''
      }
    },
    data: function() {
      return {
        index: 0,
        show: false
      };
    },
    computed: {
      show: function() {
        return (this.$parent.active == this.index);
      },
      transition: function() {
        return this.$parent.effect;
      }
    },
    created: function() {
      this.$parent.renderData.push({
        nav: this.nav,
        disabled: this.disabled,
        className: this.className
      });
    },
    ready: function() {
      for(var c in this.$parent.$children) {
        if(this.$parent.$children[c].$el == this.$el) {
          this.index = c;
          break;
        }
      }
    }
  }
</script>
