//ajax配置
var BASE_URL = 'http://local.boss.iqiyi.com/admin/';
// var BASE_URL = '/';
function URLConfig (which , data){
  switch(which){
    case 'baseInfo':
    return BASE_URL+'baseinfo'; // 菜单列表 
    case 'newsAdd':
    return BASE_URL+'news/add'; // 新闻添加 参数: typeId,title，author，content，banner，covers（封面图）
    case 'newsDelete':
    return BASE_URL+'news/delete'; // 删除新闻 参数: id
    case 'newsEdit':
    return BASE_URL+'news/edit'; // 编辑新闻 参数: id,typeId,title，author，content，banner，covers（封面图）
    case 'newsList':
    return BASE_URL+'news/list'; // 新闻列表 参数: typeId,status,createtime，page
    case 'newsGet':
    return BASE_URL+'news/get'; // 新闻详情 参数: id
    case 'newsTop':
    return BASE_URL+'news/top'; // 新闻列表排序 参数: id top 1置顶 0取消置顶
    case 'newsShow':
    return BASE_URL+'news/show'; // 新闻发布 参数: id show 1发布 0取消发布
    /*************新闻分类***************/
    case 'newsTypeAdd':
    return BASE_URL+'newsType/add'; // 新闻分类添加 参数: name
    case 'newsTypeDelete':
    return BASE_URL+'newsType/delete'; // 删除新闻分类 参数: id,name
    case 'newsTypeList':
    return BASE_URL+'newsType/list'; // 新闻分类列表 参数: 
    case 'newsTypeEdit':
    return BASE_URL+'newsType/edit'; // 编辑新闻分类 参数: id,name
    case 'newsTypeSort':
    return BASE_URL+'newsType/sort'; // 新闻分类排序 参数:  list  [1,2,3] id 数组
    case 'fileUpload':
    return BASE_URL+ 'file/upload'; // 图片上传 参数: file,  type (picture)
  }
}