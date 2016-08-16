<template>
  <div class="v-loading" v-show="show" :class="className">
    <span class="v-loading-dot" v-show="!tip.length"></span>
    <span class="v-loading-txt">{{{ tip }}}</span>
  </div>
</template>
<script>
  import './loading.scss';
  const oSizeClass = {
    'default': '',
    'big': 'v-loading-big',
    'small': 'v-loading-small'
  };
  export default{
    props: {
      show: {
        type: Boolean,
        default: false
      },
      size: {
        type: String,
        default: 'default'
      },
      tip: {
        type: String,
        default: ''
      }
    },
    computed: {
      className () {
        return oSizeClass[this.size];
      }
    }
  }
</script>