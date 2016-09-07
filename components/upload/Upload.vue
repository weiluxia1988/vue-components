<!--
上传文件
weiluxia 2016.07.22
name 上传的文件参数
action 上传的地址
multiple 是否支持多选文件
data 上传所需参数
accept 接受上传的文件类型
maxSize 文件大小
fileList 已经上传的文件列表
listType 上传列表的内建样式，支持两种基本样式 text or image
onChange 上传文件改变时的状态回调(uploading done error removed)
beforeUpload 上传文件之前的钩子,返回false,则停止上传
-->
<template>
<div class="v-upload">
  <div class="v-upload-select">
    <ajax-upload
      :name="name"
      :action="action"
      :multiple="multiple"
      :data="data"
      :accept="accept"
      :max-size="maxSize"
      :on-start="onStart"
      :on-progress="onProgress"
      :on-success="onSuccess"
      :on-error="onError"
      :before-upload="beforeUpload">
      <button type="button" class="btn btn-default"><i class="fa fa-upload"></i>上传文件</button>
    </ajax-upload>
    <slot></solt>
  </div>
  <upload-list :list="fileList" :on-remove="onRemove" :list-type="listType"></upload-list>
</div>
</template>
<script>
  function fileToObject (file) {
    return {
      lastModified: file.lastModified,
      lastModifiedDate: file.lastModifiedDate,
      name: file.filename || file.name,
      size: file.size,
      type: file.type,
      uid: file.uid,
      response: file.response,
      percent: file.percent,
      error: file.error,
      url: file.url
    }
  }

  function getFileItem (file, fileList) {
    const matchWay = (!file.uid) ? 'byName' : 'byUid';
    let target = fileList.filter(item => {
      if (matchWay === 'byName') {
        return item.name === file.name;
      } else {
        return item.uid === file.uid;
      }
    })[0]

    return target;
  }

  // 创建对象url （BLOB生成img的url）
  function createObjectURL (blob) {
    if(window.URL) {
      return window.URL.createObjectURL(blob);
    } else if(window.webkitURL) {
      return window.webkitURL.createObjectURL(blob);
    } else{
      return null;
    }
  }
  function revokeObjectURL (url) {
    if(window.URL) {
      return window.URL.revokeObjectURL(url);
    } else{
      return window.webkitURL.revokeObjectURL(url);
    }
  }
  import './upload.scss';
  import AjaxUpload from "./AjaxUploader.vue";
  import UploadList from "./UploadList.vue";
  export default {
    props: {
      name: { 
        type: String,
        default: ''
      },
      multiple: {
        type: Boolean,
        default: false
      },
      action: {
        type: String,
        default: ''
      },
      listType: {
        type: String,
        default: 'image'
      },
      data: {
        type: Object,
        default () {
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
      fileList: {
        type: Array,
        default () {
          return []
        }
      },
      beforeUpload: null,
      onChange: {
        type: Function,
        default () {
          return new Function();
        }
      },
      forceAjax: {
        type: Boolean,
        default: true
      }
    },
    data () {
      return {
        toolName: 'upload'
      }
    },
    components: { AjaxUpload, UploadList },
    beforeCompile () {
      switch (this.accept.toLowerCase()) {
        case 'image':
          this.$set('accept', 'image/*');
        break;
        case 'video':
          this.$set('accept', 'video/*');
        break;
        case 'audio':
          this.$set('accept', 'audio/*');
        break;
      };

      this.$set('fileList', this.fileList || []);
    },
    methods: {      
      onStart (file) {
        let url = createObjectURL(file);
        let targetItem;
        if(!this.multiple) {
          this.fileList = [];
        }
        let nextFileList = this.fileList.concat();
        targetItem = fileToObject(file);
        targetItem.status = 'uploading';
        targetItem.url = url;
        nextFileList.push(targetItem);
        this.change({
          file: targetItem,
          fileList: nextFileList
        });
      },
      onProgress (e, file) {
        let fileList = this.fileList;
        let targetItem = getFileItem(file, fileList);
        targetItem.percent = e.percent;
        if(targetItem) {
          this.change({
            event: e,
            file: file,
            fileList: this.fileList
          });
        }
      },
      onSuccess (response, file) {
        // 服务器端需要返回标准 json 字符串
        // 否则视为失败
        try {
          if (typeof response === 'string') {
            JSON.parse(response)
          }
        } catch (e) {
          this.onError(new Error('No response'), response, file);
          return;
        }
        let fileList = this.fileList;
        let targetItem = getFileItem(file, fileList);
        revokeObjectURL(targetItem.url);

        if(0 !== response.code) {
          alert(response.message);
          this.onError(response.message, response, targetItem);
          return;
        }

        // 之前已经删除
        if (targetItem) {
          targetItem.status = 'done';
          targetItem.response = response;
          targetItem.url = response.data.filePath;
          targetItem.name = response.data.fileName;

          this.change({
            file: targetItem,
            fileList: fileList
          })
        }
      },
      onError (error, response, file) {
        let fileList = this.fileList;
        let targetItem = getFileItem(file, fileList);
        targetItem.error = error;
        targetItem.response = response;
        targetItem.status = 'error';

        this.handleRemove(targetItem);
      },
      onRemove (file) {
        file.status = 'removed';
        this.handleRemove(file);
      },
      handleRemove (file) {
        let fileList = this.removeFile(file);

        if (fileList) {
          this.change({
            file: file,
            fileList: fileList
          })
        }
      },
      removeFile (file) {
        let fileList = this.fileList;
        let targetItem = getFileItem(file, fileList);
        let index = fileList.indexOf(targetItem);
        revokeObjectURL(targetItem.url);
        
        if (index !== -1) {
          fileList.splice(index, 1)
          return fileList;
        }

        return null;
      },
      getFilePlainObject (fileList) {
        let arr = []
        fileList.forEach(item => {
          arr.push({
            name: item.name,
            size: item.size,
            status: item.status,
            type: item.type,
            uid: item.uid,
            response: item.response,
            url: item.url
          })
        })
        return arr;
      },
      change (info) {
        // 1. 有设置外部属性时不改变 fileList
        // 2. 上传中状态（info.event）不改变 fileList
        if (!info.event && info.fileList) {
          let fileList = info.fileList
          // 用纯对象的方式来触发vue的更新
          fileList = this.getFilePlainObject(fileList)
          this.$set('fileList', fileList);
        }
        this.onChange(info);
      }
    }
  }
</script>