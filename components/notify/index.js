import Vue from 'vue'
import vNotifyGroup from './NotifyGroup.vue';

const defaultDuration = 1.5;
let notifyInstance;
let key = 1;
function getNotifyInstance () {

  function newInstance() {
    const div = document.createElement('div');
    div.id = 'v-notify';
    div.innerHTML = `<v-notify-group></v-notify-group>`;
    document.body.appendChild(div);
    const notification = new Vue({
      el: div,
      data: {},
      components: { vNotifyGroup }
    }).$children[0];

    return {
      notify (props) {
        notification.add(props);
      },
      removeNotify (key) {
        notification.remove(key);
      },
      component: notification,
      destory () {
        notifyInstance = null;
        document.body.removeChild(div);
      }
    }
  }

  notifyInstance = notifyInstance || newInstance();
  return notifyInstance;
}

function notify (content, duration = defaultDuration, type, onClose) {
  let instance = getNotifyInstance();
  instance.notify({
    key: key,
    type: type,
    duration: duration,
    content: content,
    show: true,
    onClose: onClose
  })

  return (function () {
    let target = key++;
    return function () {
      instance.removeNotify(target);
    }
  })();
}

export default {
  info (content, duration, onClose) {
    return notify(content, duration, 'info', onClose);
  },
  success (content, duration, onClose) {
    return notify(content, duration, 'success', onClose);
  },
  error (content, duration, onClose) {
    return notify(content, duration, 'error', onClose);
  },
  warn (content, duration, onClose) {
    return notify(content, duration, 'warn', onClose);
  },
  loading (content, duration, onClose) {
    return notify(content, duration, 'loading', onClose);
  }
}