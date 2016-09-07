<template>
  <article>
    <h1>穿梭框Transfer</h1>
    <section>
      <h3>演示</h3>
      <div>
        <v-button type="primary" @click="refresh">刷新</v-button>
        <v-transfer 
          show-search
          :data-source="dataSource" 
          :target-keys="targetKeys"
          :list-style="listStyle"
          :render="render"
          :on-change="onChange"></v-transfer>
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
                <td>rowKey</td>
                <td>指定数据列的主键</td>
                <td>String</td>
                <td>key</td>
              </tr>
              <tr>
                <td>filterKey</td>
                <td>指定搜索的键</td>
                <td>String</td>
                <td>title</td>
              </tr>
              <tr>
                <td>dataSource</td>
                <td>数据源</td>
                <td>Array</td>
                <td>[]</td>
              </tr>
              <tr>
                <td>targetKeys</td>
                <td>显示在右侧框数据的key集合</td>
                <td>Array</td>
                <td>[]</td>
              </tr>
              <tr>
                <td>onChange</td>
                <td>变化时回调函数</td>
                <td>Function(targetList, direction, moveList)</td>
                <td>/</td>
              </tr>
              <tr>
                <td>render</td>
                <td>每行数据渲染函数</td>
                <td>Function</td>
                <td>/</td>
              </tr>
              <tr>
                <td>listStyle</td>
                <td>两个穿梭框的自定义样式</td>
                <td>Object</td>
                <td>/</td>
              </tr>
              <tr>
                <td>className</td>
                <td>自定义类</td>
                <td>String</td>
                <td>/</td>
              </tr>
              <tr>
                <td>titles</td>
                <td>标题集合,顺序从左至右</td>
                <td>Array</td>
                <td>['源列表', '目的列表']</td>
              </tr>
              <tr>
                <td>showSearch</td>
                <td>是否显示搜索框</td>
                <td>Boolean</td>
                <td>false</td>
              </tr>
              <tr>
                <td>searchPlaceholder</td>
                <td>搜索框的默认值</td>
                <td>String</td>
                <td>请输入搜索内容</td>
              </tr>
              <tr>
                <td>notFoundContent</td>
                <td>当列表为空时显示的内容</td>
                <td>String</td>
                <td>列表为空</td>
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
  import vButton from "../../../components/button";
  import vTransfer from "../../../components/transfer";

  export default{
    components: { vTransfer, vButton },
    data () {
      return {
        dataSource: [],
        targetKeys: []
      }
    },
    created () {
      this.getDataSource();
    },
    methods: {
      refresh () {
        this.getDataSource();
      },
      render (item) {
        return item.title;
      },
      getDataSource() {
        const targetKeys = [];
        const dataSource = [];
        for (let i = 0; i < 20; i++) {
          const data = {
            key: i,
            title: `内容${i + 1}`,
            description: `内容${i + 1}的描述`,
            chosen: Math.random() * 2 > 1,
          };
          if (data.chosen) {
            targetKeys.push(data.key);
          }
          dataSource.push(data);
        }
        this.targetKeys = targetKeys;
        this.dataSource = dataSource;
      },
      onChange (target, direction, move) {
        console.log(target, direction, move);
      }
    }
  }
</script>