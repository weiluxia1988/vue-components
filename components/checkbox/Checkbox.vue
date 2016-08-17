<template>
  <label class="v-label">
    <span v-if="type=='ele'||type==undefined" class="v-checkbox"  v-bind:class="{ 'v-checkbox-checked v-checkbox-checked-1': checked, 'v-checkbox-disabled': disabled }" v-on:click="checkboxF">
      <span class="v-checkbox-inner"></span>
      <input type="checkbox" value="{{value}}" disabled="{{disabled}}" checked="{{checked}}" class="v-checkbox-input">
    </span>
    <span v-if="type=='blue'" class="v-checkbox v-checkbox-blue"  v-bind:class="{ 'v-checkbox-blue-check': checked, 'v-checkbox-blue-disabled': disabled,'v-checkbox-blue-disabled-check':checked&&disabled }" v-on:click="checkboxF">
      <input type="checkbox" value="{{value}}" disabled="{{disabled}}" checked="{{checked}}" class="v-checkbox-input">
    </span>
    <span v-if="type=='green'" class="v-checkbox v-checkbox-green"  v-bind:class="{ 'v-checkbox-green-check': checked, 'v-checkbox-green-disabled': disabled, 'v-checkbox-green-disabled-check':checked&&disabled  }" v-on:click="checkboxF">
      <input type="checkbox" value="{{value}}" disabled="{{disabled}}" checked="{{checked}}" class="v-checkbox-input">
    </span>
    <span v-if="text">{{text}}</span>
  </label>
</template>
<script>
  import './checkbox.scss';
  export default {
    props:['checked','disabled','type','text','value'],
    methods:{
      checkboxF: function(){
        this.checked = !this.checked;
      }
    }
  }
</script>