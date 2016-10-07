<template>
  <div class="v-notify" 
  :class="className"
  transition="v-notify">
    {{{ content }}}
  </div>
</template>
<script>
  const oTypeClass = {
    'info': 'v-notify-info',
    'success': 'v-notify-success',
    'error': 'v-notify-danger',
    'warn': 'v-notify-warning',
    'loading': 'v-notify-loading'
  };
  import './notify.scss';
  export default{
    props: {
      show: {
        type: Boolean,
        default: false
      },
      duration: {
        type: Number,
        default: 1.5 // 蜊穂ｽ行
      },
      type: {
        type: String,
        default: 'info'
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