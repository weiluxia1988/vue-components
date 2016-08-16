<template>
  <div class="v-notifyGroup">
    <template v-for="item in notifies">
      <v-notify
        :show.sync="item.show"
        :type="item.type"
        :content="item.content"
        :on-close="item.onClose"
        :duration="item.duration"
      ></v-notify>
    </template>
  </div>
</template>
<script>
  import './notify.scss';
  import vNotify from './Notify.vue';

  let seed = 0
  const now = Date.now()
  function getUuid () {
    return 'notifyGroup_' + now + '_' + (seed++);
  }

  export default{
    components: { vNotify },
    props: {

    },
    data () {
      return {
        notifies: []
      }
    },
    methods: {
      add (notify) {
        const self = this
        const key = notify.key = notify.key || getUuid();
        const notifies = this.notifies;

        if (!notifies.filter(v => v.key === key).length) {
          // 合并对象(Object.assign)
          let _notify = Object.assign({
            show: true,
            type: 'info',
            content: '',
            duration: 0.5
          }, notify);
          _notify.onClose = function() {
            notify.onClose && notify.onClose();
            self._close(_notify);
            self._remove(_notify.key);
          }
          this.notifies = notifies.concat(_notify);
        }
      },
      remove (key) {
        this.notifies.map(v => {
          if (v.key === key) {
            this._close(v);
          }
        });
        this._remove(key);
      },
      _remove (key) {
        this.notifies = this.notifies.filter(v => {
          return v.key !== key;
        });
      },
      _close (notify) {
        notify.show = false;
      }
    }
  }
</script>