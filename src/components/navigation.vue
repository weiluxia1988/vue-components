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
  <aside class="main-sidebar">
    <section class="sidebar">
      <div class="user-panel">
        <div class="pull-left image">
          <img src="../../images/user2-160x160.jpg" class="img-circle" alt="User Image">
        </div>
        <div class="pull-left info">
          <p>{{nickName}}</p>
        </div>
      </div>
      <v-menu
        theme="dark"
        mode="inline"
        :menus="menus"
      > 
        <!-- <template v-for="item in menus">
          <template v-if="0 == item.children.length">
            <v-menu-item :key="item.url">
              <a v-if="item.isHref" :href="item.url">{{{item.title}}}</a>
              <a v-else v-link="{ path:item.url }">{{{item.title}}}</a>
            </v-menu-item>
          </template>
          <template v-else>
            <v-sub-menu 
              :title='item.title'>
              <template v-for="childitem in item.children">
                <template v-if="!childitem.children || 0 == childitem.children.length">
                  <v-menu-item :key="childitem.url">
                    <a v-if="childitem.isHref" :href="childitem.url">{{{ childitem.title }}}</a>
                    <a v-else v-link="{ path:childitem.url }">{{{ childitem.title }}}</a>
                  </v-menu-item>
                </template>
                <template v-else>
                  <v-sub-menu 
                    :title='item.title'>
                    <template v-for="subChilditem in childitem.children">
                      <template v-if="!subChilditem.children || 0 == subChilditem.children.length">
                        <v-menu-item :key="subChilditem.url">
                          <a v-if="subChilditem.isHref" :href="subChilditem.url">{{{ subChilditem.title }}}</a>
                          <a v-else v-link="{ path:subChilditem.url }">{{{ subChilditem.title }}}</a>
                        </v-menu-item>
                      </template>
                    </template>
                  </v-sub-menu>
                </template>
              </template>
            </v-sub-menu>
          </template>
        </template> -->
      </v-menu>
    </section>
  </aside>
</template>
<style>
  .main-sidebar .v-menu{
    box-shadow:none;
  }
</style>
<script>
  import vMenu from "../../components/menu";
  const vMenuItem = vMenu.MenuItem;
  const vSubMenu = vMenu.SubMenu;
  export default {
    components: { vMenu, vMenuItem, vSubMenu },
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