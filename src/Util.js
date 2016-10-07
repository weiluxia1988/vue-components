// ajax
function doAjax({url, data = {}, method, sucCallback, failCallback}) {
  return new window.Promise(function(resolve, reject){
    $.ajax({
      url: url,
      data: data,
      type: method,
      dataType: 'json',
    }).done(function(msg) {
      if(msg.code !== 0) {
        Shield && Shield.vNotify.error(msg.message);
        if(401 == msg.code) {
          setTimeout(function() {
            window.location.href = msg.data.url;
          }, 1500);
        } 
        failCallback && failCallback(msg);
        return reject({code: msg.code, data: msg.data, message: msg.message});
      } else {
        sucCallback && sucCallback(msg.data);
        return resolve(msg.data);
      }
    }).fail(function(error) {
      Shield && Shield.vNotify.error('服务器返回错误，数据无法加载。');
      failCallback && failCallback();
      return reject({code: 503, message: '服务器返回错误，数据无法加载。'});
    });
  });
}

// fix height
function fix() {
  var neg = $('.main-header').outerHeight() + $('.main-footer').outerHeight();
  var window_height = $(window).height();
  $(".sidebar").height(window_height - $('.main-header').outerHeight());
  var sidebar_height = $(".sidebar").height();
  if($("body").hasClass("fixed")) {
    $(".content-wrapper, .right-side").css('min-height', window_height - $('.main-footer').outerHeight());
  } else{
    if (window_height >= sidebar_height) {
      $(".content-wrapper, .right-side").css('min-height', window_height - neg);
    } else {
      $(".content-wrapper, .right-side").css('min-height', sidebar_height);
    }
  }
}

// 初始化操作
function init() {
  fix();
  $(window, ".wrapper").resize(function () {
    fix();
  });
}

export{ doAjax, init };