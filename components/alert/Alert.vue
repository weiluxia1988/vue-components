<template>
  <div class="v-alert alert" role="alert"
  :class="className"
  transition="v-alert">
    <button v-if="closable" type="button" class="close" @click="close"><span aria-hidden="true">×</span></button>
    <h4>{{{ title }}}</h4>
    {{{ content }}}
  </div>
</template>
<script>
  const oTypeClass = {
    'info': 'alert-info',
    'success': 'alert-success',
    'error': 'alert-danger',
    'warn': 'alert-warning',
    'loading': 'alert-loading'
  };
  import './alert.scss';
  export default{
    props: {
      show: {
        type: Boolean,
        default: false
      },
      showIcon: {
        type: Boolean,
        default: false
      },
      closable: {
        type: Boolean,
        default: true
      },
      type: {
        type: String,
        default: 'info'
      },
      title: {
        type: String,
        default: ''
      },
      content: {
        type: String,
        default: ''
      },
      onClose: {
        type: Function,
        default () {
          return new Function();
        }
      }
    },
    data () {
      return {
        closeTimer: null
      }
    },
    computed: {
      className () {
        return oTypeClass[this.type];
      }
    },
    methods: {
      close () {
        this.onClose();
        this.show = false;
      }
    }
  }
</script>