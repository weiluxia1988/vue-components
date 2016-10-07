<template>
  <section class="content-header">
    <h1>文件上传<small>Upload</small></h1>
  </section>
  <section class="content">
    <div class="row">
      <div class="col-md-12">
        <div class="box box-solid">
          <div class="box-header with-border">
            <i class="fa fa-text-width"></i>
            <h3 class="box-title">何时使用</h3>
          </div>
          <div class="box-body">
            <p class="text-muted">上传是将信息（网页、文字、图片、视频等）通过网页或者上传工具发布到远程服务器上的过程；</p>
            <pre>
              <code class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"file"</span> /&gt;</span></code>
            </pre>
          </div>
        </div>
      </div>
    </div>
    <h2 class="page-header"><i class="fa fa-code"></i> 代码演示</h2>
    <div class="row">
      <div class="col-md-6">
        <div class="box box-success">
          <div class="box-header">
            <h3 class="box-title">内建样式text</h3>
          </div>
          <div class="box-body">
            <v-upload 
              :name="oFile2.name"
              :action="oFile2.action"
              :max-size="oFile2.maxSize"
              :data="oFile2.data"
              :list-type="oFile2.listType"
              :accept="oFile2.accept"
              :multiple="oFile2.multiple"
              :file-list="oFile2.fileList"
              :before-upload="oFile2.beforeUpload"
              :on-change="oFile2.onChange"
              :on-remove="oFile2.onRemove">
              <span class="tip">600*400,小于200K</span>
            </v-upload>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="box box-success">
          <div class="box-header">
            <h3 class="box-title">禁用上传</h3>
          </div>
          <div class="box-body">
            <v-upload
              disabled
              :name="oFile2.name"
              :action="oFile2.action"
              :max-size="oFile2.maxSize"
              :data="oFile2.data"
              :list-type="oFile2.listType"
              :accept="oFile2.accept"
              :multiple="oFile2.multiple"
              :file-list="oFile2.fileList"
              :before-upload="oFile2.beforeUpload"
              :on-change="oFile2.onChange"
              :on-remove="oFile2.onRemove">
              <span class="tip">600*400,小于200K</span>
            </v-upload>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="box box-success">
          <div class="box-header">
            <h3 class="box-title">内建样式image</h3>
          </div>
          <div class="box-body">
            <v-upload 
              :name="oFile1.name"
              :action="oFile1.action"
              :max-size="oFile1.maxSize"
              :data="oFile1.data"
              :list-type="oFile1.listType"
              :accept="oFile1.accept"
              :multiple="oFile1.multiple"
              :file-list="oFile1.fileList"
              :before-upload="oFile1.beforeUpload"
              :on-change="oFile1.onChange"
              :on-remove="oFile1.onRemove">
              <span class="tip">600*400,小于200K</span>
            </v-upload>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <h3 class="box-title">API</h3>
        <div class="box">
          <div class="box-header">
            <h3 class="box-title">Upload props</h3>
          </div>
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
                  <td>是否禁用上传</td>
                  <td>Boolean</td>
                  <td>false</td>
                </tr>
                <tr>
                  <td>name</td>
                  <td>上传的文件参数</td>
                  <td>String</td>
                  <td>''</td>
                </tr>
                <tr>
                  <td>action</td>
                  <td>上传的地址</td>
                  <td>String</td>
                  <td>''</td>
                </tr>
                <tr>
                  <td>multiple</td>
                  <td>是否支持多选文件</td>
                  <td>Boolean</td>
                  <td>false</td>
                </tr>
                <tr>
                  <td>data</td>
                  <td>上传所需参数</td>
                  <td>Object</td>
                  <td>{}</td>
                </tr>
                <tr>
                  <td>accept</td>
                  <td>接受上传的文件类型</td>
                  <td>String</td>
                  <td>image/*</td>
                </tr>
                <tr>
                  <td>maxSize</td>
                  <td>文件大小, 单位K</td>
                  <td>Number</td>
                  <td>1024</td>
                </tr>
                <tr>
                  <td>fileList</td>
                  <td>已经上传的文件列表</td>
                  <td>Array</td>
                  <td>[]</td>
                </tr>
                <tr>
                  <td>listType</td>
                  <td>上传列表的内建样式，支持两种基本样式 text or image</td>
                  <td>String</td>
                  <td>image</td>
                </tr>
                <tr>
                  <td>forceAjax</td>
                  <td>是否异步提交文件</td>
                  <td>Boolean</td>
                  <td>false</td>
                </tr>
                <tr>
                  <td>onChange</td>
                  <td>上传文件改变时的状态回调(uploading done error removed)</td>
                  <td>Function</td>
                  <td>new Function()</td>
                </tr>
                <tr>
                  <td>beforeUpload</td>
                  <td>上传文件之前的钩子,返回false,则停止上传</td>
                  <td>Function</td>
                  <td>null</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
  import vUpload from "../../../components/upload";
  export default{
    components: { vUpload },
    data () {
      let self = this;
      return {
        oFile1: {
          name: 'file',
          listType: 'image',
          action: './',
          accept: 'image',
          maxSize: 20000, // K为单位
          fileList: [
            {
              name: 'lulu',
              url: '../images/avatar.png',
              status: true
            }
          ],
          multiple: false,
          onChange (info) {
            self.oFile1.fileList = info.fileList;
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
        },
        oFile2: {
          name: 'file',
          listType: 'text',
          action: './',
          accept: '',
          data: {a: 1},
          maxSize: 20000, // K为单位
          fileList: [
            {
              name: 'lulu',
              url: '../images/avatar.png',
              status: true
            }
          ],
          multiple: false,
          beforeUpload () {
            self.oFile2.data = {a: 2};
          },
          onChange (info) {
            self.oFile2.fileList = info.fileList;
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
      }
    }
  }
</script>