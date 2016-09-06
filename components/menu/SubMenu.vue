<template>
  <li class="v-menu-submenu" 
    :class="className"
    v-el:submenu
  >
    <div class="v-menu-submenu-title"
      v-el:title
    >
      {{{ title }}}
      <i v-show="iconShow" class="fa fa-angle-right"></i>
    </div>
    <ul class="v-menu-submenu-menu"
      :class="menuClassName" 
      v-show="show"
      v-el:menu
    >
      <template v-if="0 !== children.length">
        <v-menu-item v-for="item in children" :key="item.key">
          <a href="javascript:;"><span>{{{ item.title }}}</span></a>
        </v-menu-item>
      </template>
      <template v-else>
        <slot></slot>
      </template>
    </ul>
  </li>
</template>
<script>
  const mouseEnterDelay = 0;
  const mouseLeaveDelay = 0.1;
  let seed = 0
  const now = Date.now();
  function getUid () {
    return 'submenu_' + now + '_' + (seed++);
  }

  const paddingLeft = 20;

  // 子菜单样式
  const oSubMenuStyle = {
    'disabled': 'v-menu-submenu-disabled',
    'horizontal': 'v-menu-submenu-horizontal',
    'inline': 'v-menu-submenu-inline',
    'vertical': 'v-menu-submenu-vertical',
    'active': 'v-menu-submenu-active'
  };
  const oMenuStyle = {
    'inline': 'v-submenu-inline',
    'horizontal': 'v-submenu-vertical',
    'vertical': 'v-submenu-vertical'
  };

  import * as Util from "../Util";
  import $ from "jquery";
  import vMenuItem from "./MenuItem.vue";
  export default{
    components: { vMenuItem },
    props: {
      title: {
        type: String,
        default: ''
      },
      mode: {
        type: String,
        default: ''
      },
      disabled: {
        type: Boolean,
        coerce: Util.coerceBoolean,
        default: false
      },
      key: {
        type: String,
        default: ''
      },
      children: {
        type: Array,
        default () {
          return [];
        }
      }
    },
    data () {
      return {
        toolName: 'subMenu',
        show: false
      };
    },
    beforeCompile () {
      this.mainMenu = this.getMain();
      this.mainMode = this.mainMenu.mode;
      this.mode = this.mode || this.mainMode;
      this.$set('key', this.key || getUid());
    },
    computed: {
      className () {
        var arr = [];
        if('horizontal' === this.mainMode) {
          if('subMenu' === this.$parent.toolName) {
            arr.push(oSubMenuStyle['vertical']);
          } else{
            arr.push(oSubMenuStyle['horizontal']);
          }
        } else{
          arr.push(oSubMenuStyle[this.mainMode]);
        }
        if(this.disabled) arr.push(oSubMenuStyle['disabled']);
        return arr.join(" ");
      },
      iconShow () {
        return this.mainMode == 'horizontal' ? false : true;
      },
      menuClassName () {
        return oMenuStyle[this.mode];
      }
    },
    methods: {
      // 获得主Menu
      getMain () {
        let mode;
        let main = this.$parent;
        while ('menu' !== main.toolName) {
          main = main.$parent;
        }
        return main;
      },
      // 获得当前菜单在一级菜单的序号
      getIndex () {
        let i = 0;
        let cur = this;
        while ('subMenu' === cur.toolName) {
          cur = cur.$parent;
          i++;
        }
        return i;
      },
      onMouseEnter () {
        if(this.disabled) return;
        this.delaySetPopupVisible(true, mouseEnterDelay);
      },
      onMouseLeave () {
        this.delaySetPopupVisible(false, mouseLeaveDelay);
      },
      delaySetPopupVisible (visible, delayS) {
        const delay = delayS * 1000;
        if (this.delayTimer) {
          clearTimeout(this.delayTimer);
          this.delayTimer = null;
        }
        if(delay) {
          this.delayTimer = setTimeout(() => {
            this.setPopupVisible(visible);
            this.delayTimer = null;
          }, delay);
        } else{
          this.setPopupVisible(visible);
        }
      },
      setPopupVisible (visible) {
        this.show = visible;
        this.$dispatch('menu:toggleSubMenu', {show: visible, props: {item: this, key: this.key}});
      }
    },
    events: {
      'menu:openKeys' (arr) {
        this.show = arr.includes(this.key);
      }
    },
    ready () {
      let self = this;
      let $subMenu = $(self.$els.submenu);
      let $title = $(self.$els.title);
      let $menu = $(self.$els.menu);

      if('inline' == self.mainMode) {
        if(!self.disabled) {
          $title.on('click', function() {
            let visible = false;
            let $this = $(this);
            let $menus = $subMenu.siblings('.v-menu-submenu-open').find('.v-menu-submenu-menu').slideUp('normal');
            if($menu.is(':visible')) {
              $subMenu.removeClass('v-menu-submenu-open');
              $menu.slideUp('normal', function() {
                $menus.closest('.v-menu-submenu').removeClass('v-menu-submenu-open');
              });
            } else{
              visible = true;
              $subMenu.addClass('v-menu-submenu-open');
              $menu.slideDown('normal', function() {
                $menus.closest('.v-menu-submenu').removeClass('v-menu-submenu-open');
              });
            }
            self.$dispatch('menu:toggleSubMenu', {show: visible, props: {item: self, key: self.key}});
          });
          const index = self.getIndex();
          $title.css('paddingLeft', index * paddingLeft + 'px');
          $menu.children('.v-menu-item').css('paddingLeft', (index + 1) * paddingLeft + 'px');
        }
      } else{
        $title
        .on('mouseenter', function(e) {
          self.onMouseEnter();
        })
        .on('mouseleave', function(e) {
          self.onMouseLeave();
        });
        $menu
        .on('mouseenter', function(e) {
          self.onMouseEnter();
        })
        .on('mouseleave', function(e) {
          self.onMouseLeave();
        });
      }
    }
  }
</script>