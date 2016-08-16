+function() {

  // 生成指定格式消息
  var setMsg = function(data, message) {
    return {code:0, data:data, message:message};
  };

  $.ajax = function(options) {
    var dfd = $.Deferred()
      , data = {}
      , url = options.url
      , params = options.data
      , code = 0
      , message;

    if(url.indexOf('/baseinfo') > -1) {
      message = 'baseinfo ok';
      var baseinfo = {
        "name": "后台组件库",
        "userInfo": {
          "account": "weiluxia",
          "nickName": "weiluxia"
        },
        "menu": [
          {
            "name": "主页",
            "icon": "fa-home",
            "isHref": false,
            "url": "/home",
            "children": []
          },
          {
            "name": "上手步骤",
            "icon": "fa-tasks",
            "isHref": false,
            "url": "/start",
            "children": []
          },
          {
            "name": "Basic",
            "icon": "fa-table",
            "isHref": false,
            "url": "",
            "children": [
              {
                "name": "布局",
                "icon": "fa-circle-o",
                "isHref": false,
                "url": "/Base/layout"
              },
              {
                "name": "按钮",
                "icon": "fa-circle-o",
                "isHref": false,
                "url": "/Base/button"
              },
              {
                "name": "icon",
                "icon": "fa-circle-o",
                "isHref": false,
                "url": "/Base/icon"
              }
            ]
          },
          {
            "name": "from",
            "icon": "fa-edit",
            "isHref": false,
            "url": "",
            "children": [
              {
                "name": "表单",
                "icon": "fa-circle-o",
                "isHref": false,
                "url": "/Form/form"
              },
              {
                "name": "开关",
                "icon": "fa-circle-o",
                "isHref": false,
                "url": "/Form/switch"
              },
              {
                "name": "文件上传",
                "icon": "fa-circle-o",
                "isHref": false,
                "url": "/Form/upload"
              },
              {
                "name": "日期选择器",
                "icon": "fa-circle-o",
                "isHref": false,
                "url": "/Form/datepicker"
              },
              {
                "name": "单选框",
                "icon": "fa-circle-o",
                "isHref": false,
                "url": "/Form/radio"
              },
              {
                "name": "多选框",
                "icon": "fa-circle-o",
                "isHref": false,
                "url": "/Form/checkbox"
              },
              {
                "name": "下拉选择",
                "icon": "fa-circle-o",
                "isHref": false,
                "url": "/Form/select"
              },
              {
                "name": "级联选择",
                "icon": "fa-circle-o",
                "isHref": false,
                "url": "/Form/select"
              },
              {
                "name": "数字输入框",
                "icon": "fa-circle-o",
                "isHref": false,
                "url": "/Form/numInput"
              }
            ]
          },
          {
            "name": "table",
            "icon": "fa-table",
            "isHref": false,
            "url": "",
            "children": [
              {
                "name": "表格1",
                "icon": "fa-circle-o",
                "isHref": false,
                "url": "/table/table1"
              },
              {
                "name": "表格2",
                "icon": "fa-circle-o",
                "isHref": false,
                "url": "/table/table2"
              }
            ]
          },
          {
            "name": "UI",
            "icon": "fa-laptop",
            "isHref": false,
            "url": "",
            "children": [
              {
                "name": "进度条",
                "icon": "fa-circle-o",
                "isHref": false,
                "url": "/UI/progress"
              },
              {
                "name": "对话框modal",
                "icon": "fa-circle-o",
                "isHref": false,
                "url": "/UI/modal"
              },
              {
                "name": "全局提示notify",
                "icon": "fa-circle-o",
                "isHref": false,
                "url": "/UI/notify"
              },
              {
                "name": "警告提示alert",
                "icon": "fa-circle-o",
                "isHref": false,
                "url": "/UI/alert"
              },
              {
                "name": "通知提醒框message",
                "icon": "fa-circle-o",
                "isHref": false,
                "url": "/UI/message"
              },
              {
                "name": "弹出框popover",
                "icon": "fa-circle-o",
                "isHref": false,
                "url": "/UI/popover"
              },
              {
                "name": "工具提示tooltip",
                "icon": "fa-circle-o",
                "isHref": false,
                "url": "/UI/tooltip"
              },
              {
                "name": "加载中",
                "icon": "fa-circle-o",
                "isHref": false,
                "url": "/UI/loading"
              },
              {
                "name": "下拉菜单",
                "icon": "fa-circle-o",
                "isHref": false,
                "url": "/UI/dropDown"
              },
              {
                "name": "折叠面板",
                "icon": "fa-circle-o",
                "isHref": false,
                "url": "/UI/collapse"
              },
              {
                "name": "动画",
                "icon": "fa-circle-o",
                "isHref": false,
                "url": "/UI/animate"
              },
              {
                "name": "固钉Affix",
                "icon": "fa-circle-o",
                "isHref": false,
                "url": "/UI/affix"
              },
              {
                "name": "标签",
                "icon": "fa-circle-o",
                "isHref": false,
                "url": "/UI/tag"
              },
              {
                "name": "树形控件",
                "icon": "fa-circle-o",
                "isHref": false,
                "url": "/UI/tree"
              },
              {
                "name": "穿梭框",
                "icon": "fa-circle-o",
                "isHref": false,
                "url": "/UI/transfer"
              },
            ]
          },
          {
            "name": "导航",
            "icon": "fa-laptop",
            "isHref": false,
            "url": "",
            "children": [
              {
                "name": "分页",
                "icon": "fa-circle-o",
                "isHref": false,
                "url": "/Navigation/pagination"
              },
              {
                "name": "tab切换",
                "icon": "fa-circle-o",
                "isHref": false,
                "url": "/Navigation/tab"
              },
              {
                "name": "导航菜单",
                "icon": "fa-circle-o",
                "isHref": false,
                "url": "/Navigation/menu"
              },
              {
                "name": "面包屑",
                "icon": "fa-circle-o",
                "isHref": false,
                "url": "/Navigation/breadcrumb"
              }
            ]
          },
          {
            "name": "图形",
            "icon": "fa-laptop",
            "isHref": false,
            "url": "",
            "children": []
          }
        ]
      }
      data = baseinfo;
    }

    if(url.indexOf('/newsType\/list') > -1) {
      message = 'newsType list ok';
      var oType = {
        'id|+1': 1,
        'name|1-3': '分类',
        'sort|+1': 1,
        'createdtime': Mock.mock('@datetime')
      };
      var typeListPager = {
        'list|8-10': [oType],
        'page': {
          'curpage': 0,
          'pcount': 0,
          'rcount': 0
        }
      };
      data = Mock.mock(typeListPager);
    }

    if(url.indexOf('/newsType\/delete') > -1) {
      message = 'newsType delete ok';
    }

    if(url.indexOf('/newsType\/edit') > -1) {
      message = 'newsType edit ok';
    }

    if(url.indexOf('/newsType\/add') > -1) {
      message = 'newsType add ok';
    }

    if(url.indexOf('/newsType\/sort') > -1) {
      message = 'newsType sort ok';
    }

    if(url.indexOf('/news\/list') > -1) {
      message = 'news list ok';
       var oNew = {
        'id|1-10': 1,
        'title|1-3': '中文',
        'author|1-3': '作者',
        'status|0-1': 1,
        'isTop|0-1': 1,
        'createtime': Mock.mock('@datetime')
      };
      var newListPager = {
        'list|8-10': [oNew],
        'page': {
          'curpage|2-4': 1,
          'pcount|5-8': 1,
          'rcount|50-80': 1
        }
      };
      data = Mock.mock(newListPager);
    }

    if(url.indexOf('/news\/delete') > -1) {
      message = 'news delete ok';
    }

    if(url.indexOf('/news\/top') > -1) {
      message = 'news top ok';
    }

    if(url.indexOf('/news\/show') > -1) {
      message = 'news show ok';
    }

    if(url.indexOf('/news\/edit') > -1) {
      message = 'news edit ok';
      data = {
        title: 'wwwww',
        author: 'lulu',
        content: '2222222',
        typeId: '1',
        status: 1,
        bannerName: 'lulu',
        banner: 'http://img1.qpdiy.com/uploads/materials/images/201606/223703cf600715559cbf46583d55cac5.jpg'
      };
    }

    if(url.indexOf('/news\/get') > -1) {
      message = 'news edit ok';
      data = {
        title: 'wwwww',
        author: 'lulu',
        content: '2222222',
        typeId: '1',
        status: 1,
        bannerName: 'lulu',
        banner: 'http://img1.qpdiy.com/uploads/materials/images/201606/223703cf600715559cbf46583d55cac5.jpg'
      };
    }

    console.log('$.ajax', url, options, {code: 0, message: message, data:data});
    setTimeout(function() {
      dfd.resolve({code: code, message: message, data:data});
    }, 0);
    return dfd;
  }
}();