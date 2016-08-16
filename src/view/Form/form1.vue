<template>
  <div class="publish-content clearfix">
    <div class="head">
      <div class="title">
        <input type="text" v-model="oData.title" v-el:title placeholder="请在这里输入标题"><h4 class="word-count"><span :style="titleCount > maxTitleCount ? 'color:red' : ''">{{titleCount}}</span>/{{maxTitleCount}}</h4>
      </div>
      <div class="author">
        <input type="text" v-model="oData.author" v-el:author placeholder="请输入作者"><h4 class="word-count"><span :style="authorCount > maxAuthorCount ? 'color:red' : ''">{{authorCount}}</span>/{{maxAuthorCount}}</h4>
      </div>
    </div>

    <script id="editor" type="text/plain" style="width:100%;height:400px;"></script>

    <div class="form-group clearfix mt20">
      <label class="col-md-1">封面:</label>
      <div class="col-md-11">
  
        <v-upload 
          :name="oFile.name"
          :action="oFile.action"
          :max-size="oFile.maxSize"
          :data="oFile.data"
          :accept="oFile.accept"
          :multiple="oFile.multiple"
          :file-list="oFile.fileList"
          :before-upload="oFile.beforeUpload"
          :on-change="oFile.onChange"
          :on-remove="oFile.onRemove">
          <span class="tip">600*400,小于200K</span>
        </v-upload>

      </div>
    </div>

    <div class="form-group clearfix mt20">
      <label class="col-md-1">新闻分类:</label>
      <div class="col-md-11">
        <select class="form-control" v-model="oData.typeId">
          <option value="">请选择</option>
          <option v-for="item in typeList" value="{{item.id}}">{{item.name}}</option>
        </select>
      </div>
    </div>

    <div class="form-group clearfix mt20">
      <label class="col-md-1">是否发布:</label>
      <div class="col-md-11 switch">
        <v-switch
          name="status"
          value="1"
          :disabled="isSwitchDisabled"
          :checked="isSwitchChecked"
          :on-change="switchCallback"></v-switch>
      </div>
    </div>

    <v-button type="primary" class-name="pull-right" :loading="btnLoading"
      @click="submitHandle">
      保存
    </v-button>
  </div>
</template>
<script>
  import * as Util from "../../Util";
  import vButton from "../../../components/button/Button.vue";
  import vUpload from "../../../components/upload/Upload.vue";
  import vSwitch from "../../../components/switch/Switch.vue";
  let ue;
  const maxTitleCount = 64;
  const maxAuthorCount = 8;
  export default {
    components: { vButton, vUpload, vSwitch },
    data () {
      var self = this;
      return {
        oData: {id: '', title: '', author: '', content: '', banner: '', bannerName: '', typeId: '', status: 0},
        maxTitleCount: maxTitleCount,
        maxAuthorCount: maxAuthorCount,
        typeList: [],
        btnLoading: false,
        isSwitchChecked: true,
        isSwitchDisabled: false,
        oFile: {
          name: 'file',
          listType: 'image',
          action: URLConfig('fileUpload'),
          accept: 'image',
          maxSize: 20000, // K为单位
          fileList: [],
          multiple: false,
          onChange (info) {
            self.oFile.fileList = info.fileList;
            if('uploading' === info.file.status) {
              console.log('正在上传：' + info.file, info.fileList);
            }
            if('done' === info.file.status) {
              console.log(info.file.name + ' 上传成功.', info.fileList);
            } else if ('error' === info.file.status) {
              console.log(info.file.name + ' 上传失败.', info.fileList);
            } else if ('removed' === info.file.status) {
              console.log(info.file.name + ' 已删除.', info.fileList);
            }
          }
        }
      };
    },
    route: {
      data (transition) {
        this.oData.id = transition.to.query.id;
        this.oData.id && this.loadData(this.oData.id);
        this.loadTypeList();
      },
      canReuse () {
        return false;
      },
      deactivate () {
        ue.destroy();
        ue = null;
      }
    },
    watch: {
      'oData.content' (value) {
        ue.ready(function() {
          //设置编辑器的内容
          ue.setContent(value);
        });
      }
    },
    computed: {
      titleCount () {
        return this.oData.title.length;
      },
      authorCount () {
        return this.oData.author.length;
      }
    },
    methods: {
      // 加载数据
      doAjax (options) {
        var self = this;
        Util.loadData(options.url, options.data, options.method)
            .then(function(data){
                options.sucCallback && options.sucCallback(data);
              }, function(msg) {
                self.$dispatch('lu-notify', {msg: msg.message, duration: 1000, show: true});
                options.failCallback && options.failCallback();
                if(401 == msg.code) {
                  setTimeout(function() {
                    window.location.href = msg.data.url;
                  }, 1500);
                }
              });
      },
      // 加载列表分类
      loadTypeList () {
        var self = this;
        self.doAjax({
          url: URLConfig('newsTypeList'),
          method: 'get',
          sucCallback: function(data) {
            self.typeList = data.list;
          }
        });
      },
      // 取出空格
      trim (str) {
        str = String(str);
        return str.replace(/(^[ \t\n\r]+)|([ \t\n\r]+$)/g, '');
      },
      // 新闻详细
      loadData (id) {
        var self = this;
        self.doAjax({
          url: URLConfig('newsGet'),
          method: 'get',
          data: {id: id},
          sucCallback: function(data) {
            for(var e in data) {
              self.$set('oData.' + e, data[e]);
            }
            self.isSwitchchecked = !!self.oData.status;
            self.oFile.fileList.push({
              status: 'done',
              name: data.bannerName,
              url: data.banner
            });
          }
        });
      },
      // 保存数据
      submitHandle () {
        var self = this;

        if(self.btnLoading) return;
        if('' == self.trim(self.oData.title)) {
          self.$dispatch('lu-notify', {msg: '标题不能为空', duration: 1000, show: true});
          self.oData.title = '';
          self.$els.title.focus();
          return;
        }
        if(self.maxTitleCount < self.titleCount) {
          self.$dispatch('lu-notify', {msg: '标题太长', duration: 1000, show: true});
          self.$els.title.focus();
          return;
        }

        if('' == self.trim(self.oData.author)) {
          self.$dispatch('lu-notify', {msg: '作者不能为空', duration: 1000, show: true});
          self.oData.value = '';
          self.$els.author.focus();
          return;
        }
        if(self.maxAuthorCount < self.authorCount) {
          self.$dispatch('lu-notify', {msg: '作者太长', duration: 1000, show: true});
          self.oData.value = '';
          self.$els.author.focus();
          return;
        }

        self.oData.content = ue.getContent();
        if('' == self.trim(self.oData.content)) {
          self.$dispatch('lu-notify', {msg: '内容不能为空', duration: 1000, show: true});
          ue.focus();
          return;
        }

        if(!self.oFile.fileList.length) {
          self.$dispatch('lu-notify', {msg: '请上传图片', duration: 1000, show: true});
          return;
        }
        if(self.oFile.fileList[0].status !== 'done') {
          self.$dispatch('lu-notify', {msg: '正在上传图片，请稍等', duration: 1000, show: true});
          return;
        }
        self.oData.banner = self.oFile.fileList[0].url;
        self.oData.bannerName = self.oFile.fileList[0].name;

        if(!self.oData.typeId) {
          self.$dispatch('lu-notify', {msg: '请选择新闻分类', duration: 1000, show: true});
          return;
        }

        var url = URLConfig('newsAdd');
        var params = JSON.parse(JSON.stringify(self.oData));
        if(self.oData.id) {
          url = URLConfig('newsEdit');
        } else{
          delete params.id;
        }

        self.btnLoading = true;
        self.doAjax({
          url: url,
          method: 'post',
          data: params,
          sucCallback: function(data) {
            self.btnLoading = false;
            self.$dispatch('lu-notify', {msg: '保存成功', duration: 1000, show: true});
            setTimeout(() => {
              self.$router.go({
                path: '/news/list'
              });
            }, 1000);
          }
        });
      },
      // 开关
      switchCallback (checked) {
        if(checked) {
          this.oData.status = 1;
        } else{
          this.oData.status = 0;
        }
      }
    },
    ready () {
      ue = UE.getEditor('editor',{ 
        toolbars:[['source','|','undo','redo','|', 'bold','italic','underline','fontborder', 'strikethrough', '|','forecolor','backcolor','|','fontfamily','FontSize','|','horizontal','removeformat','formatmatch',,'pasteplain','drafts'],['autotypeset','link','simpleupload', 'insertimage','insertvideo','indent','|','justifyleft','justifycenter','justifyright','justifyjustify','|','rowspacingtop','rowspacingbottom','lineheight','|','insertorderedlist','insertunorderedlist','|','imagenone','imageleft','imageright','imagecenter', 'attachment']],
        wordCount:true, //开启字数统计 
        // serverUrl: '',
        maximumWords:100000, //允许的最大字符数 
        elementPathEnabled : false, //是否启用元素路径，默认是显示
        pasteplain:false, //是否默认为纯文本粘贴。false为不使用纯文本粘贴，true为使用纯文本粘贴 
        focus:false,  //初始化时，是否让编辑器获得焦点true或false
        wordCount:false, //是否保持字数统计功能
        lang:"zh-cn",
        autoHeightEnabled: true,
        iframeCssUrl: '../j/plugins/ueditor/themes/iframe.css'
      });
    }
  }
</script>