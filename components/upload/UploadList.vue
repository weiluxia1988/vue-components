<template>
<div class="v-upload-list" :class="className">
  <div class="v-upload-list-item" :class="item.status == 'uploading' ? 'v-upload-list-item-loading': ''" v-for="item in list">
    <div class="v-upload-list-item-info">
      <a v-if="'image' == listType" class="v-upload-list-item-thumbnail" :href="item.url" target="_blank">
        <img :src="item.url" alt="xxx.png">
      </a>
      <i v-else class="fa fa-paperclip"></i>
      <a :href="item.url" target="_blank" class="v-upload-list-item-name">{{item.name}}</a>
      <i class="fa fa-times" @click="closeHandle(item)"></i>
    </div>
    <div class="v-upload-list-item-progress">
      <v-progress 
      :show-info="showInfo" 
      :percent="item.percent" 
      :stroke-width="strokeWidth"
      :bg-color="bgColor">
    </div>
  </div>
</div>
</template>

<script>
import vProgress from '../progress';
export default {
  props: {
    listType: {
      type: String,
      default: 'image'
    },
    list: {
      type: Array,
      default: function() {
        return []
      }
    },
    onRemove: {
      type: Function,
      default: function() {
        return new Function();
      }
    }
  },
  data () {
    return {
      showInfo: false,
      strokeWidth: 6
    }
  },
  computed: {
    className () {
      return this.listType == 'image' ? 'v-upload-list-image' : 'v-upload-list-text';
    }
  },
  components: {vProgress},
  methods: {
    closeHandle (file) {
      this.onRemove(file);
    }
  }
}
</script>
