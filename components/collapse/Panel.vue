<template>
  <div class="v-collapse-panel panel" role="panel" :class="className">
    <div class="panel-heading" @click="handleItemClick">
      <h4 class="panel-title">
        <a href="javascript:;">{{{ header }}}</a>
      </h4>
    </div>
    <Animate 
      :show="isActive" 
      transition-name="slide" 
      :on-enter="onEnter" 
      :on-leave="onLeave"
    >
      <div class="panel-collapse" v-el:panel-body>
        <div class="panel-body">
          <slot></slot>
        </div>
      </div>
    </Animate>
  </div>
</template>
<script>
  const oTheme = {
    'default': 'panel-default',
    'primary': 'panel-primary',
    'danger': 'panel-danger',
    'success': 'panel-success',
    'warning': 'panel-warning',
  };

  import './collapse.scss';
  import Animate from '../animate';
  import anim from 'css-animation';
  export default {
    components: { Animate },
    props: {
      header: {
        type: String,
        default: ''
      }, 
      key: {
        type: String,
        default: ''
      },
      isActive: {
        type: Boolean,
        default: false
      },
      theme: {
        type: String,
        default: 'default'
      },
      onItemClick: {
        type: Function,
        default () {
          return new Function();
        }
      }
    },
    computed: {
      className () {
        return oTheme[this.theme];
      }
    },
    methods: {
      onEnter () {
        console.log('onEnter');
      },
      onLeave () {
        console.log('onLeave');
      },
      handleItemClick () {
        this.onItemClick();
      }
    }
  }
</script>