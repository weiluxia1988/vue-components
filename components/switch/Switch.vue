<!--
  开关
  weiluxia 2016.07.26
  name checkbox的名称
  value checkbox的属性值
  checked 指定当前是否选中
  disabled 开关是否可用
  onChange 变化时回调函数
-->
<template>
  <span class="v-switch"
    :class="wrapClasses" 
    @click="toggleHandle">
    <span class="v-switch-inner">
      <input type="checkbox" style="display:none" :name="name" :value="value" :checked="checked">
      <template v-if="checked">{{{checkedTxt}}}</template>
      <template v-else>{{{unCheckedTxt}}}</template>
    </span>
  </span>
</template>
<script>
  import "./switch.scss";
  export default{
    props: {
      name: {
        type: String,
        default: ''
      },
      value: null,
      checked: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      checkedTxt: {
        type: String,
        default: ''
      },
      unCheckedTxt: {
        type: String,
        default: ''
      },
      onChange: {
        type: Function,
        default () {
          return new Function();
        }
      }
    },
    computed: {
      wrapClasses () {
        var a = [];
        if(this.checked) {
          a.push('v-switch-checked');
        } 
        if(this.disabled) {
          a.push('v-switch-disabled');
        }
        return a.join(' ');
      }
    },
    methods: {
      toggleHandle () {
        if(this.disabled) return;
        this.checked = !this.checked;
        this.onChange(this.checked);
      }
    }
  }
</script>