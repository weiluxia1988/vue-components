<template>
<div class="v-upload-list">
  <div class="v-upload-list-item" v-for="item in list">
    <div class="v-upload-list-mask" v-if="item.status=='uploading'">
      <v-progress 
      :show-info="showInfo" 
      :percent="item.percent" 
      :stroke-width="strokeWidth"
      :bg-color="bgColor">
      </v-progress>
    </div>
    <img width="140px" height="140px" border="1px solid #fff" :src="item.url">
    <i class="fa fa-times" @click="closeHandle(item)"></i>
  </div>
</div>
</template>

<script>
import vProgress from '../progress/Progress.vue';
export default {
  props: {
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
  components: {vProgress},
  methods: {
    closeHandle (file) {
      this.onRemove(file);
    }
  }
}
</script>
