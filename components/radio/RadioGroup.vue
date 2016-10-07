<template>
  <div class="v-radio-group">
      <v-radio
      v-for="item in groupdata"
      :checked="item.checked"
      :disabled="item.disabled"
      :type="item.type"
      :text = "item.text"
      :index = '$index'
      :value = "item.value"
      ></v-radio>
  </div>
</template>
<script>
  import vRadio from './Radio.vue';
  import './radio.scss';
  export default {
    components: {vRadio},
    data:function(){
      return{
      }
    },
    props:['groupdata','changef'],
    events: {
      'groupRadio': function(index){
        for(var i=0;i<this.groupdata.length;i++){
          this.groupdata[i].checked = false
          if(i==index){
            this.groupdata[i].checked = true
            this.changef(this.groupdata[i]);
          }
        }
      }
    }
  }
</script>