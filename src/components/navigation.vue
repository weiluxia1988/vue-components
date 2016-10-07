<!--
  菜单栏既可以路由跳转也可以链接跳转
  "name": "from", // 父级名称
  "icon": "fa-edit", // 父级icon
  "isHref": false, // 父级是否链接形式
  "url": "", // 父级地址
  "children": [ // 父级的子集
    {
      "name": "表单",
      "icon": "",
      "isHref": false,
      "url": "/form/form"
    }
  ]
-->
<template>
  <aside class="main-sidebar hideScroll">
    <v-affix offset-top="50">
      <section class="sidebar">
        <v-menu
          theme="dark"
          mode="inline"
        > 
          <template v-for="item in menus">
            <v-menu-item v-if="!item.children || 0 == item.children.length" :key="item.url">
              <a v-if="item.isHref" :href="item.url">{{{item.title}}}</a>
              <a v-else v-link="{ path:item.url }">{{{item.title}}}</a>
            </v-menu-item>
            <v-sub-menu 
              v-else
              :title='item.title'>
              <template v-for="childitem in item.children">
                <v-menu-item v-if="!childitem.children || 0 == childitem.children.length" :key="childitem.url">
                  <a v-if="childitem.isHref" :href="childitem.url">{{{ childitem.title }}}</a>
                  <a v-else v-link="{ path:childitem.url }">{{{ childitem.title }}}</a>
                </v-menu-item>
                <v-sub-menu
                  v-else
                  :title='item.title'>
                  <template v-for="subChilditem in childitem.children">
                    <v-menu-item v-if="!subChilditem.children || 0 == subChilditem.children.length" :key="subChilditem.url">
                      <a v-if="subChilditem.isHref" :href="subChilditem.url">{{{ subChilditem.title }}}</a>
                      <a v-else v-link="{ path:subChilditem.url }">{{{ subChilditem.title }}}</a>
                    </v-menu-item>
                  </template>
                </v-sub-menu>
              </template>
            </v-sub-menu>
          </template>
        </v-menu>
      </section>
    </v-affix>
  </aside>
</template>
<style>
  .main-sidebar .v-menu{
    box-shadow:none;
  }
</style>
<script>
  import vAffix from "../../components/affix";
  import {vMenu, vSubMenu, vMenuItem} from "../../components/menu";
  export default {
    components: { vAffix, vMenu, vMenuItem, vSubMenu },
    props: ['baseInfo'],
    computed: {
      nickName: function() {
        if(this.baseInfo.userInfo) {
          return this.baseInfo.userInfo.nickname;
        }
      },
      menus: function() {
        if(!this.baseInfo.menu) return [];
        this.baseInfo.menu.forEach( one => {
          one.title = `<i class="fa ${one.icon}"></i><span>${one.name}</span>`;
          while (one.children && one.children.length ) {
            one.children.forEach( item => {
              item.title = `<i class="fa ${item.icon}"></i><span>${item.name}</span>`;
            });
            one = one.children;
          }
        });
        return this.baseInfo.menu;
      }
    }
  }
</script>