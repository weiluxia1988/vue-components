<template>
<i class="fa" :class="iconClasses">
  <slot></slot>
</i>
</template>

<script>
import './icon.scss';
export default {
  props: {
    className: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''
    }
  },
  computed: {
    iconClasses () {
      return this.className + ' fa-' + this.type;
    }
  }
}

</script>
