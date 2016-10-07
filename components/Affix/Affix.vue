<template>
  <div>
    <div v-el:affix :class="className" :style="affixStyle">
      <slot></slot>
    </div>
  </div>
</template>
<script>
  import './affix.scss';
  import * as Util from "../utils";
  // 元素相对于页面左上角的位置
  function getOffset (element) {
    const rect = element.getBoundingClientRect();
    return {
      top: rect.top,
      left: rect.left,
      width: rect.width,
      height: rect.height
    }
  }
  export default{
    name: 'v-affix',
    props: {
      prefixCls: {
        type: String,
        default: 'v-affix'
      },
      offsetTop: {
        type: Number,
        coerce: Util.coerceNumber,
        default: 0
      },
      offsetBottom: null,
      onChange: {
        type: Function,
        default () {
          return new Function();
        }
      },
      className: {
        type: String,
        default: ''
      },
    },
    data () {
      return {
        affix: false,
        affixStyle: {}
      }
    },
    computed: {
      className () {
        return this.affix ? this.prefixCls : '';
      }
    },
    methods: {
      handleScroll () {
        if(Util.inDoc(this.$el)) this.move();
      },
      move () {
        const affix = this.affix;
        const elemOffset = getOffset(this.$el);
        if(!this.offsetBottom) {
          if(Number(this.offsetTop) >= 0) {
            if(elemOffset.top < Number(this.offsetTop)) {
              this.affix = true;
              this.affixStyle = {
                top: this.offsetTop + 'px',
                left: elemOffset.left + 'px',
                width: this.$el.offsetWidth + 'px'
              };
            } else{
              this.affix = false;
              this.affixStyle = null;
            }
          }
        } else {
          if(Number(this.offsetBottom) >= 0) {
            if((window.innerHeight - elemOffset.top - elemOffset.height) < Number(this.offsetBottom)) {
              this.affix = true;
              this.affixStyle = {
                bottom: this.offsetBottom + 'px',
                left: elemOffset.left + 'px',
                width: this.$el.offsetWidth + 'px'
              };
            } else {
              this.affix = false;
              this.affixStyle = null;
            }
          } 
        }
      }
    },
    ready () {
      /*
        高度还需要包含margin
        宽度跟父元素的宽度一样
      */
      const elemOffset = getOffset(this.$el);
      // this.$el.style.width = elemOffset.width + 'px';
      this.$el.style.height = elemOffset.height + 'px';
      this.handleScroll();
      window.addEventListener('scroll', this.handleScroll, false);
      window.addEventListener('resize', this.handleScroll, false);
    },
    beforeDestory () {
      window.removeEventListener('scroll', this.handleScroll, false);
      window.removeEventListener('resize', this.handleScroll, false);
    }
  }
</script>