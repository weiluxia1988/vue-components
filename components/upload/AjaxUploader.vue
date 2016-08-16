<!--
beforeUpload // 上传之前
onStart // 开始上传
onProgress // 正在上传
onSuccess // 上传成功
onError // 上传失败
-->
<template>
<span role="button"
  tabIndex="0"
  @click="clickHandle">
  <input v-el:file
    type="file"
    style="display: none"
    :accept="accept"
    :multiple="multiple"
    @change="changeHandle">
  <slot></slot>
</span>
</template>

<script>
import request from './request';

let index = 0;
const now = +(new Date());
function uid() {
  return 'upload-' + now + '-' + (++index);
}

export default {
  props: {
    action: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    multiple: {
      type: Boolean,
      default: false
    },
    data: {
      type: Object,
      default: function() {
        return {}
      }
    },
    accept: {
      type: String,
      default: 'image/*'
    },
    maxSize: {
      type: Number,
      default: 1024 // K
    },
    beforeUpload: null,
    onStart: {
      type: Function,
      default: function() {
        return new Function();
      }
    },
    onProgress: {
      type: Function,
      default: function() {
        return new Function();
      }
    },
    onSuccess: {
      type: Function,
      default: function() {
        return new Function();
      }
    },
    onError: {
      type: Function,
      default: function() {
        return new Function();
      }
    }
  },
  methods: {
    changeHandle (e) {
      const files = e.target.files;
      this.uploadFiles(files);
    },
    clickHandle () {
      const el = this.$els.file;
      if (!el) return;

      el.click();
      el.value = '';
    },
    checkFile (file) {
      var size = file.size;
      // 文件大小
      if(size > (this.maxSize * 1024)) {
        alert('文件过大!');
        return false;
      }
      return true;
    },
    uploadFiles (files) {
      const len = files.length;
      if(len > 0) {
        for(let i = 0; i < len; i++) {
          const file = files.item(i);
          if(this.checkFile(file)) {
            file.uid = uid();
            this.upload(file);
            this.onStart(file);
          }
        }
      }
    },
    upload (file) {
      if (!this.beforeUpload) {
        return this.post(file);
      }

      const before = this.beforeUpload(file);
      if (before && before.then) {
        before.then(() => {
          this.post(file);
        })
      } else if (before !== false) {
        this.post(file);
      }
    },
    post (file) {
      let data = this.data
      if (typeof data === 'function') {
        data = data();
      }

      request({
        action: this.action,
        filename: this.name,
        file: file,
        data: data,
        onProgress: e => {
          this.onProgress(e, file);
        },
        onSuccess: ret => {
          this.onSuccess(ret, file);
        },
        onError: (err, ret) => {
          this.onError(err, ret, file);
        },
      })
    }
  }
}

</script>
