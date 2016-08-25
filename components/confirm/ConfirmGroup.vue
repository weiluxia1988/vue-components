<template>
  <div class="v-confirmGroup">
    <template v-for="item in list">
      <v-confirm
        :show.sync="item.show"
        :type="item.type"
        :title="item.title"
        :content="item.content"
        :ok-text="item.okText"
        :cancel-text="item.cancelText"
        :on-confirm="item.onConfirm"
        :on-cancel="item.onCancel"
      ></v-confirm>
    </template>
  </div>
</template>
<script>
  import './confirm.scss';
  import vConfirm from './Confirm.vue';

  let seed = 0
  const now = Date.now()
  function getUid () {
    return 'confirmGroup_' + now + '_' + (seed++);
  }

  export default{
    components: { vConfirm },
    props: {
    },
    data () {
      return {
        list: []
      }
    },
    methods: {
      add (one) {
        const self = this
        const key = one.key = one.key || getUid();
        const list = this.list;
        if (!list.filter(v => v.key === key).length) {
          // 合并对象(Object.assign)
          let _one = Object.assign({
            show: true,
            type: 'info',
            title: '',
            content: '',
            okText: '',
            cancelText: ''
          }, one);
          _one.onConfirm = function() {
            one.onConfirm && one.onConfirm();
            self._close(_one);
            self._remove(_one.key);
          }
          _one.onCancel = function() {
            one.onCancel && one.onCancel();
            self._close(_one);
            self._remove(_one.key);
          }
          this.list = list.concat(_one);
        }
      },
      remove (key) {
        this.list.map(v => {
          if (v.key === key) {
            this._close(v);
          }
        });
        this._remove(key);
      },
      _remove (key) {
        this.list = this.list.filter(v => {
          return v.key !== key;
        });
      },
      _close (one) {
        one.show = false;
      }
    }
  }
</script>