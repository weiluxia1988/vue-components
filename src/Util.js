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

export{loadData};