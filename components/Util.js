// ajax
function loadData(url, data = {}, type) {
  return new window.Promise(function(resolve, reject){
    $.ajax({
      url: url,
      data: data,
      type: type,
      dataType: 'json',
    }).done(function(data) {
      if (data.code !== 0) {
        return reject({code: data.code, data: data.data, message: data.message});
      } else {
        return resolve(data.data);
      }
    }).fail(function(error) {
      return reject({code: 503, message: '服务器返回错误，数据无法加载。'});
    });
  });
}

// 转boolean
function coerceBoolean(val) {
  if(typeof val !== "string") {
    return val;
  } else if(val === "true") {
    return true;
  } else if(val === "false") {
    return false;
  } else if(val === "null") {
    return false;
  } else if(val === "undefined") {
    return false;
  } 
}

// 转数字
function coerceNumber(val) {
  if (typeof val !== 'string') {
    return val;
  } else {
    var parsed = Number(val);
    return isNaN(parsed) ? val : parsed;
  }
}

// 日期转换器
Date.prototype.Format = function(format) { //author: meizz
  var o = {
      "Y+": this.getFullYear(), // 年
      "M+": this.getMonth() + 1, //月份
      "d+": this.getDate(), //日 
      "h+": this.getHours(), //小时
      "m+": this.getMinutes(), //分
      "s+": this.getSeconds(), //秒
      "q+": Math.floor((this.getMonth() + 3) / 3), //季度
      "S": this.getMilliseconds() //毫秒
  };
  if(/(Y+)/.test(format)) {  
    format = format.replace(RegExp.$1, this.getFullYear());  
  }  
    
  for(var k in o) {  
    if(new RegExp("("+ k +")").test(format)) {  
    format = format.replace(RegExp.$1, RegExp.$1.length==1 ? o[k] : ("00"+ o[k]).substr((""+ o[k]).length));  
    }  
  } 
  return format;
}
function getRelativeDate(timestampstr) {
  var timestamp = parseInt(timestampstr);
  timestamp = isNaN(timestamp) ? 0 : timestamp;
  var thenT = new Date(timestamp);
  var thenY = thenT.getFullYear();
  thenT.setHours(0);
  thenT.setMinutes(0);
  thenT.setSeconds(0);
  var nowtime = new Date();
  var nowtimeY = nowtime.getFullYear();
  nowtime.setHours(0);
  nowtime.setMinutes(0);
  nowtime.setSeconds(0);
  var delt = Math.round((nowtime.getTime() - thenT.getTime()) / 1000 / 86400);
  var day_def = {
    '0': '今天',
    '1': '昨天',
    '2': '前天'
  };
  if(delt == 0) {
    return new Date(timestamp).Format('hh:mm');
  } else if(delt > 0 && delt <= 2){
    return day_def[delt] + ' ' + (new Date(timestamp).Format('hh:mm'));
  } else if(thenY == nowtimeY) {
    return new Date(timestamp).Format('MM月dd日 hh:mm');
  } else{
    return new Date(timestamp).Format('YY年MM月dd日');
  }
}

// 浏览器
function browserName() {
  window.oBrowser = {};   
  if(navigator.userAgent.indexOf("MSIE") > 0) {  
    oBrowser.name = 'MSIE';
    oBrowser.ie = true;  
  } else if(navigator.userAgent.indexOf("Firefox") > 0){ 
    oBrowser.name = 'Firefox'; 
    oBrowser.firefox = true;  
  } else if(navigator.userAgent.indexOf("Chrome") > 0) {
    oBrowser.name = 'Chrome'; 
    oBrowser.chrome = true;  
  } else if(navigator.userAgent.indexOf("Safari") > 0) {
    oBrowser.name = 'Safari';
    oBrowser.safari = true;
  } else if(navigator.userAgent.indexOf("Opera") >= 0) {
    oBrowser.name = 'Opera';
    oBrowser.opera = true;
  } else {
    oBrowser.name = 'unknow';
  }  
}

// 获得字符长度 一个汉字等于2个字符
function getLen (s){
  var l = 0;
  var a = s.split("");
  for (var i = 0; i < a.length; i++) {
    if(a[i].charCodeAt(0)<299) {
      l++;
    } else {
      l+=2;
    }
  }
  return l;
}

// 去除空格
function trim (str) {
  str = String(str);
  return str.replace(/(^[ \t\n\r]+)|([ \t\n\r]+$)/g, '');
}

// 元素相对于页面位置(bottom)
function getElementPos($obj) {
  var box = $obj.getBoundingClientRect();
  var body = document.body;
  var pageX = (box.left + box.right) / 2 + (body.scrollLeft || 0)  - ( body.clientLeft || 0);
  var pageY = box.bottom + (body.scrollTop  || 0) - (body.clientTop  || 0);
  var pos = {
    top: pageY,
    left: pageX
  };
  return pos;
}

// 获得触发对象的位置
function getTargetPos ($obj) {
  const pos = $obj.getBoundingClientRect();
  const _pos = {
    left: pos.left,
    top: pos.top,
    right: pos.right,
    bottom: pos.bottom,
    width: pos.width,
    height: pos.height
  }
  return _pos;
}

// 获得slot的节点
function getTrustSlotNode (node) {
  let childNode = node.nextSibling;
  if (childNode.nodeType !== 1) {
    return getTrustSlotNode(childNode)
  }
  return childNode;
}

export{ 
  loadData, 
  coerceBoolean,
  coerceNumber,
  getRelativeDate, 
  getElementPos, 
  browserName, 
  getLen,
  trim,
  getTargetPos,
  getTrustSlotNode
};