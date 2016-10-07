<template>
  <article>
    <h1>标签Tag</h1>
    <section>
      <h3>演示</h3>
      <div>
        <v-tag 
          v-for="item in tags"
          :key="item.key"
          :on-close="closeHandle" 
          :theme="item.theme" 
          :closable="item.closable"
        >{{item.name}}</v-tag>
        <v-button theme="primary" @click="addHandle"><span>+ 添加标签</span></v-button>
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
                <td>key</td>
                <td>唯一标识</td>
                <td>String</td>
                <td>/</td>
              </tr>
              <tr>
                <td>closable</td>
                <td>标签是否可以关闭</td>
                <td>boolean</td>
                <td>false</td>
              </tr>
              <tr>
                <td>onClose</td>
                <td>关闭时的回调</td>
                <td>Function</td>
                <td>/</td>
              </tr>
              <tr>
                <td>theme</td>
                <td>标签的主题</td>
                <td>String</td>
                <td>default</td>
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
  import vTag from "../../../components/tag";
  export default{
    components: { vButton, vTag },
    data () {
      return {
        tags: [
          { key: 1, name: '不可移除', theme:'danger',  closable: false},
          { key: 2, name: '标签二', theme:'info', closable: true},
          { key: 3, name: '标签三', theme:'info', closable: true},
        ]
      }
    },
    methods: {
      addHandle () {
        const tags = [...this.tags];
        const index = tags.length + 1;
        tags.push({ key: index, name: `新标签${index}`, closable: true});
        this.$set('tags', tags);
      },
      closeHandle (key) {
        const tags = [...this.tags].filter(tag => (tag.key !== key) && tag);
        this.$set('tags', tags);
      }
    }
  }
</script>