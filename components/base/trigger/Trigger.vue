<template>
  <slot name="trigger"></slot>
</template>
<script>
  import * as Util from "../../utils"; 
  import oPlacements from "./placements"; 
  import slotMixin from "./slotMixin";
  import vPopup from "./Popup.vue"; 

  function isPointsEq (a1, a2) {
    return a1[0] === a2[0] && a1[1] === a2[1];
  }
  const mouseEnterDelay = 0; // 设置鼠标延迟打开时间
  const mouseLeaveDelay = 0.1; // 设置鼠标延迟关闭时间
  const template = `<v-popup 
                      :align="align" :on-align="onAlign" :show.sync="show" :class-name="currentClassName"
                      :get-target="_getTriggerTarget.bind($parent)" 
                      :on-mouse-enter="_onMouseEnter.bind($parent)" 
                      :on-mouse-leave="_onMouseLeave.bind($parent)">
                      <slot name="popup"></slot>
                    </v-popup>`;

  export default{
    components: { vPopup },
    props: {
      prefixCls: {
        type: String,
        default: 'v-'
      },
      placement: {
        type: String,
        default: 'left'
      },
      trigger: {
        type: String,
        default: 'click'
      },
      show: {
        type: Boolean,
        coerce: Util.coerceBoolean,
        default: false
      },
      disabled: {
        type: Boolean,
        coerce: Util.coerceBoolean,
        default: false
      },
      onVisibleChange: {
        type: Function,
        default () {
          return new Function();
        }
      }
    },
    data () {
      return {
        currentClassName: ''
      }
    },
    computed: {
      align () {
        return oPlacements[this.placement];
      }
    },
    mixins: [slotMixin], // 混合后的钩子按它们出现顺序调用，并且是在调用组件自己的钩子之前调用
    methods: {
      // 插入popup
      insertPopup () {
        if (!this.popupContainer) {
          this.currentClassName = this.currentClassName || this.getClassNameFromAlign(oPlacements, this.prefixCls, this.align);
          this.popupContainer = document.createElement('div');
          this.popupContainer.innerHTML = template;
          document.body.appendChild(this.popupContainer);
          this.$compile(this.popupContainer);
        }
      },
      // popup插入文档回调
      onAlign (sourceNode, align) {
        const currentClassName = this.currentClassName;
        const alignClassName = this.getClassNameFromAlign(oPlacements, this.prefixCls, align);
        if(alignClassName !== this.currentClassName) {
          currentClassName && sourceNode.classList.remove(currentClassName);
          sourceNode.classList.add(alignClassName);
          this.currentClassName = alignClassName;
        }
      },
      // 获得placement对应的class
      getClassNameFromAlign (oPlacements, prefixCls, align) {
        const placement = this.placement;
        const points = align.points;
        for (const placement in oPlacements) {
          if (oPlacements.hasOwnProperty(placement)) {
            if (isPointsEq(oPlacements[placement].points, points)) {
              return `${prefixCls}-${placement}`;
            }
          }
        }
        return '';
      },
      // trigger是否为click
      isClickAction () {
        if (this.trigger.indexOf('click') !== -1) {
          return true
        }
        return false
      },
      // trigger是否为hover
      isHoverAction () {
        if (this.trigger.indexOf('hover') !== -1) {
          return true
        }
        return false
      },
      // trigger是否为focus
      isFocusAction () {
        if (this.trigger.indexOf('focus') !== -1) {
          return true
        }
        return false
      },
      _onBlur () {
        if(!this.isFocusAction() || this.disabled) return;
        this.setPopupVisible(false);
      },
      _onFocus () {
        if(!this.isFocusAction() || this.disabled) return;
        this.insertPopup();
        this.setPopupVisible(true);
      },
      _onClick () {
        if(!this.isClickAction() || this.disabled) return;
        event.preventDefault();
        event.stopPropagation();
        this.insertPopup();
        this.setPopupVisible(!this.show);
      },
      _onMouseEnter () {
        if(!this.isHoverAction() || this.disabled) return;
        this.insertPopup();
        this.delaySetPopupVisible(true, mouseEnterDelay);
      },
      _onMouseLeave () {
        if(!this.isHoverAction() || this.disabled) return;
        this.delaySetPopupVisible(false, mouseLeaveDelay);
      },
      delaySetPopupVisible (visible, delayS) {
        const delay = delayS * 1000;
        if (this.delayTimer) {
          clearTimeout(this.delayTimer)
          this.delayTimer = null;
        }
        if (delay) {
          this.delayTimer = setTimeout(() => {
            this.setPopupVisible(visible)
            this.delayTimer = null;
          }, delay)
        } else {
          this.setPopupVisible(visible)
        }
      },
      // 设置popup是否显示/隐藏
      setPopupVisible (visible) {
        if (this.show !== visible) {
          this.show = visible;
        }
        this.onVisibleChange(visible);
      }
    },
    ready () {
      const self = this;
      document.body.addEventListener('click', function() {
        self.setPopupVisible(false);
      }, false);
      if(this.show) {
        this.insertPopup();
        this.setPopupVisible(true);
      }
    }
  }
</script>