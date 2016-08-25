import Vue from 'vue'
import vGroup from './ConfirmGroup.vue';

const defaultTitle = '';
const defaultContent = '';
const defaultOkText = '确定';
const defaultCancelText = '取消';
const idName = 'v-confirm';
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
function notify (type, title = defaultTitle, content = defaultContent, okText = defaultOkText, cancelText = defaultCancelText, onConfirm, onCancel) {
  let instance = getInstance();
  instance.add({
    key: key,
    type: type,
    title: title,
    content: content,
    okText: okText,
    cancelText: cancelText,
    show: true,
    onConfirm: onConfirm,
    onCancel: onCancel
  })

  return (function () {
    let target = key++;
    return function () {
      instance.remove(target);
    }
  })();
}

export default {
  info (params) {
    return notify('info', params.title, params.content, params.okText, params.cancelText, params.onConfirm, params.onCancel);
  },
  success (params) {
    return notify('success', params.title, params.content, params.okText, params.cancelText, params.onConfirm, params.onCancel);
  },
  error (params) {
    return notify('error', params.title, params.content, params.okText, params.cancelText, params.onConfirm, params.onCancel);
  },
  warn (params) {
    return notify('warn', params.title, params.content, params.okText, params.cancelText, params.onConfirm, params.onCancel);
  }
}