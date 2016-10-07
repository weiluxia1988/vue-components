//ajax配置
var BASE_URL = '/';
function URLConfig (which , data){
  switch(which){
    case 'baseInfo':
    return BASE_URL+'baseinfo'; // 菜单列表 
    case 'table':
    return BASE_URL+'table';
    case 'fileUpload':
    return BASE_URL+ 'file/upload'; // 图片上传 参数: file,  type (picture)
  }
}