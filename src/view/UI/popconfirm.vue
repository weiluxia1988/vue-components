<template>
  <article>
    <h1>气泡确认框Popconfirm</h1>
    <section>
      <h3>演示</h3>
      <div>
        <v-popconfirm title="确定要删除这个任务吗？" :on-confirm="onConfirm" :on-cancel="onCancel">
          <v-button type="primary">删除</v-button>
        </v-popconfirm>
      </div>
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
                <td>placement</td>
                <td>气泡框位置，可选 top/topLeft/topRight/left/leftTop/leftBottom/right/rightTop/rightBottom/bottom/bottomLeft/bottomRight</td>
                <td>String</td>
                <td>bottom</td>
              </tr>
              <tr>
                <td>title</td>
                <td>确认框的描述</td>
                <td>String</td>
                <td>/</td>
              </tr>
              <tr>
                <td>onConfirm</td>
                <td>点击确认的回调</td>
                <td>function</td>
                <td>/</td>
              </tr>
              <tr>
                <td>onCancel</td>
                <td>点击取消的回调</td>
                <td>function</td>
                <td>/</td>
              </tr>
              <tr>
                <td>onVisibleChange</td>
                <td>显示隐藏的回调</td>
                <td>function</td>
                <td>/</td>
              </tr>
              <tr>
                <td>okText</td>
                <td>确认按钮文字</td>
                <td>String</td>
                <td>确定</td>
              </tr>
               <tr>
                <td>cancelText</td>
                <td>取消按钮文字</td>
                <td>String</td>
                <td>取消</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </article>
</template>
<script>
  import vButton from "../../../components/button";
  import vPopconfirm from "../../../components/popconfirm";

  export default{
    components: { vButton, vPopconfirm },
    data () {
      return {
      }
    },
    methods: {
      onConfirm () {
        console.log('确定');
      },
      onCancel () {
        console.log('取消');
      }
    }
  }
</script>