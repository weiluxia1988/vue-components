import Vue from 'vue'
import vGroup from './messageGroup.vue';

const defaultDuration = 4.5;
const defaultTitle = '';
const defaultContent = '';
const idName = 'v-message';
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

function notify (type, title, content,  duration = defaultDuration, onClose) {
  let instance = getInstance();
  instance.add({
    key: key,
    type: type,
    duration: duration,
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

export default {
  info (title = defaultTitle, content = defaultContent, duration, onClose) {
    return notify('info', title, content, duration, onClose);
  },
  success (title = defaultTitle, content = defaultContent, duration, onClose) {
    return notify('success', title, content, duration, onClose);
  },
  error (title = defaultTitle, content = defaultContent, duration, onClose) {
    return notify('error', title, content, duration, onClose);
  },
  warn (title = defaultTitle, content = defaultContent, duration, onClose) {
    return notify('warn', title, content, duration, onClose);
  },
  loading (title = defaultTitle, content = defaultContent, duration, onClose) {
    return notify('loading', title, content, duration, onClose);
  }
}