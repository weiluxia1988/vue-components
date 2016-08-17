<template>
  <label class="v-radio">
    <template v-if="type=='ele'||type==undefined" >
      <span class="v-radio"  v-bind:class="{ 'v-radio-checked v-radio-checked-1': checked, 'v-radio-disabled': disabled }" v-on:click="radioF(index)">
        <span class="v-radio-inner"></span>
        <input type="radio" value="{{value}}" disabled="{{disabled}}" checked="{{checked}}" class="v-radio-input">
      </span>
      <span>{{text}}</span>
    </template>
    <template v-if="type=='blue'">
      <span class="v-radio v-radio-blue"  v-bind:class="{ 'v-radio-blue-check': checked, 'v-radio-blue-disabled': disabled,'v-radio-blue-disabled-check':checked&&disabled }" v-on:click="radioF(index)">
        <input type="radio" value="{{value}}" disabled="{{disabled}}" checked="{{checked}}" class="v-radio-input">
      </span>
      <span>{{text}}</span>
    </template>
    <template v-if="type=='green'">
      <span  class="v-radio v-radio-green"  v-bind:class="{ 'v-radio-green-check': checked, 'v-radio-green-disabled': disabled, 'v-radio-green-disabled-check':checked&&disabled}" v-on:click="radioF(index)">
        <input type="radio" value="{{value}}" disabled="{{disabled}}" checked="{{checked}}" class="v-radio-input">
      </span>
      <span>{{text}}</span>
    </template>
  </label>
</template>
<script>
  export default {
    props:['checked','disabled','type','index','text','value'],
    methods:{
      radioF: function(index){
        if(this.index==undefined){this.checked = !this.checked;}
        this.$dispatch('groupRadio',index)
      }
    }
  }
</script>