<template>
  <slot></slot>
</template>
<script>
  export default{
    props: {
      pos: {
        type: Object,
        default () {
          return {};
        }
      },
      placement: {
        type: String,
        default: 'left'
      }
    },
    watch: {
      pos (newValue) {
        console.log(newValue)
      }
    },
    ready () {
      this.$appendTo(this.$root.$el);
    }
  }
</script>