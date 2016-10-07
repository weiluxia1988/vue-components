import Vue from 'vue'
import vGroup from './AlertGroup.vue';

const defaultDuration = 1.5;
const defaultTitle = '';
const defaultContent = '';
const idName = 'v-alert';
let instance;
let key = 1;
function getInstance () {

  function newInstance() {
    const div = document.createElement('div');
    div.id = idName;
    div.innerHTML = `<v-group></v-group>`;
    document.body.appendChild(div);
    const group = new Vue({
      el: div,
      data: {},
      components: { vGroup }
    }).$children[0];

    return {
      add (props) {
        group.add(props);
      },
      remove (key) {
        group.remove(key);
      },
      component: group,
      destory () {
        instance = null;
        document.body.removeChild(div);
      }
    }
  }

  instance = instance || newInstance();
  return instance;
}
function notify (type, title, content, onClose) {
  let instance = getInstance();
  instance.add({
    key: key,
    type: type,
    title: title,
    content: content,
    show: true,
    onClose: onClose
  })

  return (function () {
    let target = key++;
    return function () {
      instance.remove(target);
    }
  })();
}
function close() {
  instance && instance.destory();
}

export default {
  info (title = defaultTitle, content = defaultContent, onClose) {
    return notify('info', title, content, onClose);
  },
  success (title = defaultTitle, content = defaultContent, onClose) {
    return notify('success', title, content, onClose);
  },
  error (title = defaultTitle, content = defaultContent, onClose) {
    return notify('error', title, content, onClose);
  },
  warn (title = defaultTitle, content = defaultContent, onClose) {
    return notify('warn', title, content, onClose);
  },
  loading (title = defaultTitle, content = defaultContent, onClose) {
    return notify('loading', title, content, onClose);
  },
  close () {
    return close();
  }
}