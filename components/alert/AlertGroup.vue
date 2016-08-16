<template>
  <div class="v-alertGroup">
    <template v-for="item in list">
      <alert
        :show.sync="item.show"
        :type="item.type"
        :show-icon="item.showIcon"
        :closable="item.closable"
        :title="item.title"
        :content="item.content"
        :on-close="item.onClose"
      ></alert>
    </template>
  </div>
</template>
<script>
  import './alert.scss';
  import Alert from './Alert.vue';

  let seed = 0
  const now = Date.now()
  function getUid () {
    return 'alertGroup_' + now + '_' + (seed++);
  }

  export default{
    components: { Alert },
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
            closable: true,
            showIcon: false,
            type: 'info',
            title: '',
            content: ''
          }, one);
          _one.onClose = function() {
            one.onClose && one.onClose();
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