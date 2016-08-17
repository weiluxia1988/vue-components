<template>
  <article>
    <h1>上传文件Upload</h1>
    <section>
      <h3>演示</h3>
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
    </section>
    <section>
      <h3>使用</h3>
      <div class="box">
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
    </section>
  </article>
</template>
<style>
  h1{
    color: #3c8dbc;
    font-weight: 700;
  }
</style>
<script>
  import vUpload from "../../../components/upload/Upload.vue";

  export default{
    components: { vUpload },
    data () {
      let self = this;
      return {
        oFile: {
          name: 'file',
          listType: 'text',
          action: './',
          accept: 'text',
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
      }
    }
  }
</script>