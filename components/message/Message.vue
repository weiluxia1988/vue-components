<template>
  <div class="v-message" 
  :class="className"
  transition="v-message">
    <button type="button" class="close" @click="close"><span aria-hidden="true">×</span></button>
    <h4>{{{ title }}}</h4>
    {{{ content }}}
  </div>
</template>
<script>
  const oTypeClass = {
    'info': 'v-message-info',
    'success': 'v-message-success',
    'error': 'v-message-danger',
    'warn': 'v-message-warning',
    'loading': 'v-message-loading'
  };
  import './message.scss';
  export default{
    props: {
      show: {
        type: Boolean,
        default: false
      },
      duration: {
        type: Number,
        default: 4.5 // 单位s
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
    compiled () {
      this.clearCloseTimer();
      if(this.duration) {
        this.closeTimer = setTimeout(() => {
          this.close();
        }, this.duration * 1000);
      }
    },
    beforeDestory () {
      this.clearCloseTimer();
    },
    methods: {
      clearCloseTimer () {
        if(this.closeTimer) {
          clearTimeout(this.closeTimer);
          this.closeTimer = null;
        }
      },
      close () {
        this.clearCloseTimer();
        this.onClose();
        this.show = false;
      }
    }
  }
</script>