<template>
  <v-modal
    width="400"
    :title="title"
    :type="type"
    :ok-text="okText"
    :cancel-text="cancelText"
    :on-cancel="onCancel"
    :on-ok="onConfirm"
  >
    {{{ content }}}
  </v-modal>
</template>
<script>
  import vModal from '../modal';
  export default{
    components: { vModal },
    props: {
      show: {
        type: Boolean,
        default: false
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
      okText: {
        type: String,
        default: '确定'
      },
      cancelText: {
        type: String,
        default: '取消'
      },
      onCancel: {
        type: Function,
        default () {
          return new Function();
        }
      },
      onConfirm: {
        type: Function,
        default () {
          return new Function();
        }
      }
    }
  }
</script>