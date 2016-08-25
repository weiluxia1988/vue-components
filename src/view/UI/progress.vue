<template>
  <article>
    <h1>进度条Progress</h1>
    <section>
      <h3>演示</h3>
      <v-progress 
      :show-info="oProgress.showInfo" 
      :percent="oProgress.percent" 
      :stroke-width="oProgress.strokeWidth"
      :bg-color="oProgress.bgColor">
      </v-progress>
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
                <td>showInfo</td>
                <td>是否显示进度数值</td>
                <td>Boolean</td>
                <td>true</td>
              </tr>
              <tr>
                <td>percent</td>
                <td>进度百分比</td>
                <td>Number</td>
                <td>0</td>
              </tr>
              <tr>
                <td>strokeWidth</td>
                <td>进度条线的宽度</td>
                <td>Number</td>
                <td>10</td>
              </tr>
              <tr>
                <td>bgColor</td>
                <td>进度条的颜色</td>
                <td>String</td>
                <td>rgb(16, 169, 236)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </article>
</template>

<script>
  import vProgress from '../../../components/progress';

  export default{
    components: { vProgress },
    data () {
      let self = this;
      return {
        oProgress: {
          showInfo: true,
          percent: 10,
          strokeWidth: 10
        }
      }
    }
  }
</script>