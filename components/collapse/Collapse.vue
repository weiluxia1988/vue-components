<template>
  <div class="v-collapse panel-group" role="collapse">
    <slot></slot>
  </div>
</template>
<script>
  import './collapse.scss';
  import * as Util from "../Util";
  export default {
    props: {
      activeKey: null,
      onChange: {
        type: Function,
        default () {
          return new Function();
        }
      },
      accordion: {// 是否同时展开
        type: Boolean,
        coerce: Util.coerceBoolean,
        default: true
      }
    },
    methods: {
      getActivityKey () {
        let activeKey = this.activeKey;
        const accordion = this.accordion;
        if(accordion && Array.isArray(activeKey)) {
          activeKey = activeKey[0];
        }

        if(!accordion && !Array.isArray(activeKey)) {
          activeKey = activeKey ? [activeKey] : [];
        }
        return activeKey;
      },
      setChildActive () {
        const self = this;
        const activeKey = self.getActivityKey();
        const $children = this.$el.querySelectorAll('[role="panel"]');
        [...$children].forEach(($child, index) => {
          const vChild = $child.__vue__;
          const key = vChild.key || index;
          let isActive = false;
          if (self.accordion) {
            isActive = activeKey === key;
          } else {
            isActive = activeKey.includes(key);
          }
          vChild.isActive = isActive;
        })
      },
      handleClickItem (key) {
        const activeKey = this.getActivityKey();
        let isActive = true;
        if (this.accordion) {
          if(key === activeKey) {
            isActive = true;
            this.activeKey = null;
          } else{
            isActive = false;
            this.activeKey = key;
          }
        } else {
          isActive = activeKey.includes(key);
          if (isActive) {
            const index = activeKey.indexOf(key);
            activeKey.splice(index, 1);
          } else {
            activeKey.push(key);
          }
          this.activeKey = activeKey;
        }
        this.setChildActive();
        this.onChange(key, !isActive);
      }
    },
    ready () {
      const self = this;
      const activeKey = self.getActivityKey();
      const $children = self.$el.querySelectorAll('[role="panel"]');
      // $chidren(nodelist) 转为数组
      [...$children].forEach(($child, index) => {
        const vChild = $child.__vue__;
        const key = vChild.key || index;
        let isActive = false;
        if (self.accordion) {
          isActive = activeKey === key;
        } else {
          isActive = activeKey.includes(key);
        }
        vChild.isActive = isActive;
        vChild.onItemClick = self.handleClickItem.bind(this, key);
      });
    }
  }
</script>