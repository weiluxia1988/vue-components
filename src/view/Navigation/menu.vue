<template>
  <article>
    <h1>导航菜单Menu</h1>
    <section>
      <h3>演示</h3>
      
      <div style="margin-botttom: 20px">
        <span>主题</span>
        <v-switch
          :on-change="horizontal_onChange" checked-txt="暗" un-checked-txt="亮">
        </v-switch>
        <v-menu
          :theme="horizontal_theme"
          mode="horizontal"
          :on-open="onOpen"
          :open-keys="horizontal_openKeys"
          :selected-keys="horizontal_selectedKeys"
          :on-close="onClose"
          :on-click="onClick">
          <v-menu-item key="first">
            <a href="javascript:;"><i class="fa fa-dashboard"></i><span>导航一</span></a>
          </v-menu-item>
          <v-menu-item key="second" disabled>
            <a href="javascript:;"><i class="fa fa-dashboard"></i><span>导航二</span></a>
          </v-menu-item>
          <v-sub-menu 
            title='<i class="fa fa-dashboard"></i><span>导航三</span>' key="nav3">
            <v-menu-item key="setting:1"><a href="javascript:;">选项1</a></v-menu-item>
            <v-menu-item key="setting:2" disabled><a href="javascript:;">选项2</a></v-menu-item>
            <v-menu-item key="setting:3"><a href="javascript:;">选项3</a></v-menu-item>
            <v-menu-item key="setting:4"><a href="javascript:;">选项4</a></v-menu-item>
          </v-sub-menu>
          <v-sub-menu 
            title='<i class="fa fa-dashboard"></i><span>导航四</span>'>
            <v-menu-item key="setting:1"><a href="javascript:;">选项1</a></v-menu-item>
            <v-sub-menu 
              title='<i class="fa fa-dashboard"></i><span>导航三</span>'
            >
              <v-menu-item key="setting:1"><a href="javascript:;">选项1</a></v-menu-item>
              <v-menu-item key="setting:2"><a href="javascript:;">选项2</a></v-menu-item>
              <v-menu-item key="setting:3"><a href="javascript:;">选项3</a></v-menu-item>
              <v-menu-item key="setting:4"><a href="javascript:;">选项4</a></v-menu-item>
            </v-sub-menu>
          </v-sub-menu>
        </v-menu>
      </div>
      
      <div style="margin-botttom: 20px;width:240px">
        <span>主题</span>
        <v-switch
          :on-change="vertical_onChange" checked-txt="暗" un-checked-txt="亮">
        </v-switch>
        <v-menu
          :theme="vertical_theme"
          mode="vertical"
          :on-open="onOpen"
          :on-close="onClose"
          :on-click="onClick">
          <v-menu-item key="setting:1"><a href="javascript:;">导航一</a></v-menu-item>
          <v-menu-item key="setting:1"><a href="javascript:;">导航二</a></v-menu-item>
          <v-sub-menu 
            title='<i class="fa fa-dashboard"></i><span>导航三</span>'
          >
            <v-menu-item><a href="javascript:;">选项1</a></v-menu-item>
            <v-menu-item><a href="javascript:;">选项2</a></v-menu-item>
            <v-menu-item><a href="javascript:;">选项3</a></v-menu-item>
            <v-sub-menu 
              title='<i class="fa fa-dashboard"></i><span>导航四</span>'
            >
              <v-menu-item key="setting:1"><a href="javascript:;">选项1</a></v-menu-item>
            </v-sub-menu>
          </v-sub-menu>
          <v-sub-menu 
            title='<i class="fa fa-dashboard"></i><span>导航四</span>'
          >
            <v-menu-item key="setting:1"><a href="javascript:;">选项1</a></v-menu-item>
          </v-sub-menu>
        </v-menu>
      </div>
      
      <div style="margin-botttom: 20px;width:240px">
        <span>主题</span>
        <v-switch
          :on-change="inline_onChange" checked-txt="暗" un-checked-txt="亮">
        </v-switch>
        <v-menu
          :theme="inline_theme"
          mode="inline"
          :on-open="onOpen"
          :on-close="onClose"
          :on-click="onClick">
          <v-menu-item key="setting:1"><a href="javascript:;">导航一</a></v-menu-item>
          <v-menu-item key="setting:1"><a href="javascript:;">导航二</a></v-menu-item>
          <v-sub-menu 
            title='<i class="fa fa-dashboard"></i><span>导航三</span>'
          >
            <v-menu-item key="setting:1"><a href="javascript:;">选项1</a></v-menu-item>
            <v-menu-item key="setting:2"><a href="javascript:;">选项2</a></v-menu-item>
            <v-menu-item key="setting:3"><a href="javascript:;">选项3</a></v-menu-item>
            <v-sub-menu 
              title='选项4'
            >
              <v-menu-item key="setting:1"><a href="javascript:;">选项4-1</a></v-menu-item>
            </v-sub-menu>
            <v-sub-menu 
              title='选项5'
            >
              <v-menu-item key="setting:1"><a href="javascript:;">选项5-1</a></v-menu-item>
              <v-sub-menu title='submenu5'>
                <v-menu-item key="setting:1"><a href="javascript:;">submenu5-1</a></v-menu-item>
              </v-sub-menu>
            </v-sub-menu>
          </v-sub-menu>
          <v-sub-menu 
            title='<i class="fa fa-dashboard"></i><span>导航四</span>'
          >
            <v-menu-item key="setting:1"><a href="javascript:;">选项1</a></v-menu-item>
          </v-sub-menu>
        </v-menu>
      </div>

    </section>
    <section>
      <h3>使用</h3>
      <div class="box">
        <div class="box-header">Menu</div>
        <div class="box-body">
          <table class="table table-bordered table-hover dataTable">
            <thead>
              <tr>
                <th>属性</th>
                <th>说明</th>
                <th>类型</th>
                <th>默认值</th>
              </tr>
            </thead>
            <tbody>  
              <tr>
                <td>theme</td>
                <td>主题颜色</td>
                <td>String: light dark</td>
                <td>light</td>
              </tr>
              <tr>
                <td>mode</td>
                <td>菜单类型，现在支持垂直、水平、和内嵌模式三种</td>
                <td>String: vertical horizontal inline</td>
                <td>vertical</td>
              </tr>
              <tr>
                <td>openKeys</td>
                <td>当前展开的 SubMenu 菜单项 key 数组</td>
                <td>Array</td>
                <td>[]</td>
              </tr>
              <tr>
                <td>selectedKeys</td>
                <td>当前选中的菜单项 key 数组</td>
                <td>Array</td>
                <td>[]</td>
              </tr>
              <tr>
                <td>onOpen</td>
                <td>SubMenu 展开回调</td>
                <td>Function</td>
                <td>/</td>
              </tr>
              <tr>
                <td>onClose</td>
                <td>SubMenu 收起回调</td>
                <td>Function</td>
                <td>/</td>
              </tr>
              <tr>
                <td>onClick</td>
                <td>点击 menuitem 调用此函数，参数为 {item, key, keyPath}</td>
                <td>Function</td>
                <td>/</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="box">
        <div class="box-header">Menu.Item</div>
        <div class="box-body">
          <table class="table table-bordered table-hover dataTable">
            <thead>
              <tr>
                <th>属性</th>
                <th>说明</th>
                <th>类型</th>
                <th>默认值</th>
              </tr>
            </thead>
            <tbody>  
              <tr>
                <td>disabled</td>
                <td>是否禁用</td>
                <td>Boolean</td>
                <td>false</td>
              </tr>
              <tr>
                <td>key</td>
                <td>item 的唯一标志</td>
                <td>String</td>
                <td>vertical</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="box">
        <div class="box-header">Menu.SubMenu</div>
        <div class="box-body">
          <table class="table table-bordered table-hover dataTable">
            <thead>
              <tr>
                <th>属性</th>
                <th>说明</th>
                <th>类型</th>
                <th>默认值</th>
              </tr>
            </thead>
            <tbody>  
              <tr>
                <td>disabled</td>
                <td>是否禁用</td>
                <td>Boolean</td>
                <td>false</td>
              </tr>
              <tr>
                <td>mode</td>
                <td>子菜单类型，现在支持垂直、水平、和内嵌模式三种</td>
                <td>String: vertical horizontal inline</td>
                <td>vertical</td>
              </tr>
              <tr>
                <td>key</td>
                <td>item 的唯一标志</td>
                <td>String</td>
                <td>vertical</td>
              </tr>
              <tr>
                <td>children</td>
                <td>子菜单的菜单项</td>
                <td>(MenuItem or SubMenu)[]</td>
                <td>/</td>
              </tr>
              <tr>
                <td>title</td>
                <td>子菜单项值</td>
                <td>String</td>
                <td>/</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </article>
</template>
<script>
  import vSwitch from "../../../components/switch";
  import { vMenu, vSubMenu, vMenuItem } from "../../../components/menu";
  export default{
    components: { vSwitch, vMenu, vSubMenu, vMenuItem },
    data () {
      let self = this;
      return {
        horizontal_theme: 'light',
        vertical_theme: 'light',
        inline_theme: 'light',
        horizontal_openKeys: [],
        horizontal_selectedKeys: ['first'],
        subMenus: [
          {
            key: '1',
            title: '2'
          }
        ]
      }
    },
    methods: {
      onOpen(params) {
        console.log('open: ' + params);
      },
      onClose(params) {
        console.log('close: ' + params);
      },
      onClick(params) {
        console.log(params);
      },
      horizontal_onChange (checked) {
        this.horizontal_theme = (checked ? 'dark' : 'light');
      },
      vertical_onChange (checked) {
        this.vertical_theme = (checked ? 'dark' : 'light');
      },
      inline_onChange (checked) {
        this.inline_theme = (checked ? 'dark' : 'light');
      }
    }
  }
</script>