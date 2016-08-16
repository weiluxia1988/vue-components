import home from './view/home.vue';
import start from './view/start.vue';

import button from './view/Base/button.vue';

import form1 from './view/Form/form1.vue';
import _switch from './view/Form/switch.vue';
import datepicker from './view/Form/datepicker.vue';
import upload from './view/Form/upload.vue';
import radio from './view/Form/radio.vue';
import checkbox from './view/Form/checkbox.vue';
import numInput from './view/Form/numInput.vue';

import table1 from './view/Table/table1.vue';
import table2 from './view/Table/table2.vue';

import progress from './view/UI/progress.vue';
import loading from './view/UI/loading.vue';
import modal from './view/UI/modal.vue';
import notify from './view/UI/notify.vue';
import dropDown from './view/UI/dropDown.vue';
import collapse from './view/UI/collapse.vue';
import animate from './view/UI/animate.vue';
import alert from './view/UI/alert.vue';
import popover from './view/UI/popover.vue';
import tooltip from './view/UI/tooltip.vue';
import message from './view/UI/message.vue';
import affix from './view/UI/affix.vue';
import tag from './view/UI/tag.vue';
import tree from './view/UI/tree.vue';

import pagination from './view/Navigation/pagination.vue';
import tab from './view/Navigation/tab.vue';
import menu from './view/Navigation/menu.vue';
export default function(router) {
  router.map({
    '/': {
      component: home // 主页
    },
    '/home': {
      component: home // 主页
    },
    '/start': {
      component: start // 上手步骤
    },



    '/Base/button': {
      component: button // 按钮
    },


    '/Form/form': {
      component: form1 // form
    },
    '/Form/radio':{
      component:radio//单选
    },
    '/Form/checkbox':{
      component:checkbox//多选
    },
    '/Form/switch': {
      component: _switch // 开关
    },
    '/Form/datepicker': {
      component: datepicker // 时间选择器
    },
    '/Form/upload': {
      component: upload // 上传文件
    },
    '/Form/numInput':{
      component: numInput // 数字输入框
    },


    '/table/table1': {
      component: table1 // table1
    },
    '/table/table2': {
      component: table2 // table2
    },


    '/UI/progress': {
      component: progress // 进度条
    },
    '/UI/loading': {
      component: loading // 加载中
    },
    '/UI/modal': {
      component: modal // 弹窗
    },
    '/UI/notify': {
      component: notify // 全局提示
    },
    '/UI/alert': {
      component: alert // 警告提示
    },
    '/UI/popover': {
      component: popover // 弹出框
    },
    '/UI/tooltip': {
      component: tooltip // 工具提示
    },
    '/UI/message': {
      component: message // 通知提醒框
    },
    '/UI/dropDown': {
      component: dropDown // 下拉菜单
    },
    '/UI/collapse': {
      component: collapse // 折叠菜单
    },
    '/UI/animate': {
      component: animate // 动画
    },
    '/UI/affix': {
      component: affix // 固钉
    },
    '/UI/tag': {
      component: tag // 标签
    },
    '/UI/tree': {
      component: tree // 树形控件
    },

    '/Navigation/pagination': {
      component: pagination // 分页
    },
    '/Navigation/tab': {
      component: tab // tab切换
    },
    '/Navigation/menu': {
      component: menu // 导航菜单
    }
  });
};