<template>
  <section class="content-header">
    <h1>进度条<small>Progress</small></h1>
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
            <p class="text-muted">在操作需要较长时间才能完成时，为用户显示该操作的当前进度和状态。</p>
            <pre>
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
            <h3 class="box-title">基本使用</h3>
          </div>
          <div class="box-body">
            <div class="col-md-12">
              <div class="row">
                <div class="col-md-9">
                  <v-progress
                    :percent="oProgress1.percent" 
                  >
                  </v-progress>
                </div>
                <div class="col-md-3">
                  <div class="btn-group" style="margin-top:20px;">
                    <button type="button" class="btn btn-default" @click="minusHandle1"><i class="fa fa-minus"></i></button>
                    <button type="button" class="btn btn-default" @click="plusHandle1"><i class="fa fa-plus"></i></button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-12">
              <v-progress
                percent="40" 
                :format="formatError"
                status="error"
              >
              </v-progress>
            </div>
            <div class="col-md-12">
              <v-progress
                percent="100" 
                :format="formatSuccess"
                status="success"
              >
              </v-progress>
            </div>
            <div class="col-md-12">
              <v-progress
                percent="60" 
                :format="formatCustom"
                stroke-width="20"
              >
              </v-progress>
            </div>
          </div>
        </div>
        <div class="box box-success">
          <div class="box-header">
            <h3 class="box-title">自定义文字格式</h3>
          </div>
          <div class="box-body">
            <div class="col-md-6">
              <v-progress
                :percent="oProgress3.percent" 
                :format="oProgress3.format"
              ></v-progress>
            </div>
            <div class="col-md-6">
              <v-progress
                type="circle"
                percent="10"
                :format="oProgress4.format"
              ></v-progress>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-6">
        <div class="box box-success">
          <div class="box-header">
            <h3 class="box-title">进度圈</h3>
          </div>
          <div class="box-body">
            <div class="col-md-4">
              <v-progress
                type="circle"
                :percent="oProgress2.percent" 
              ></v-progress>
              <div class="btn-group" style="margin-top:20px;">
                <button type="button" class="btn btn-default" @click="minusHandle2"><i class="fa fa-minus"></i></button>
                <button type="button" class="btn btn-default" @click="plusHandle2"><i class="fa fa-plus"></i></button>
              </div>
            </div>
            <div class="col-md-4">
              <v-progress
                type="circle"
                percent="100"
                status="success"
              ></v-progress>
            </div>
            <div class="col-md-4">
              <v-progress
                type="circle"
                percent="20"
                status="error"
              ></v-progress>
            </div>
            <div class="col-md-4">
              <v-progress
                type="circle"
                percent="50"
                stroke-width="10"
              ></v-progress>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <h3 class="box-title">API</h3>
        <div class="box">
          <div class="box-header">
            <h3 class="box-title">progressLine props</h3>
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
                  <td>进度条线的宽度，单位 px</td>
                  <td>Number</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>status</td>
                  <td>状态，可选：success(成功) error(失败) normal(正常)</td>
                  <td>String</td>
                  <td>normal</td>
                </tr>
                <tr>
                  <td>format</td>
                  <td>内容的模板函数</td>
                  <td>function</td>
                  <td>/</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="box">
          <div class="box-header">
            <h3 class="box-title">progressCircle props</h3>
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
                  <td>圆形进度条线的宽度，单位是进度条画布宽度的百分比</td>
                  <td>Number</td>
                  <td>6</td>
                </tr>
                <tr>
                  <td>width</td>
                  <td>圆形进度条画布宽度，单位 px</td>
                  <td>Number</td>
                  <td>132</td>
                </tr>
                <tr>
                  <td>status</td>
                  <td>状态，可选：success(成功) error(失败) normal(正常)</td>
                  <td>String</td>
                  <td>normal</td>
                </tr>
                <tr>
                  <td>format</td>
                  <td>内容的模板函数</td>
                  <td>function</td>
                  <td>/</td>
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
  import vProgress from '../../../components/progress';

  export default{
    components: { vProgress },
    data () {
      let self = this;
      return {
        oProgress1: {
          percent: 10,
          strokeWidth: 10
        },
        oProgress2: {
          percent: 10,
          strokeWidth: 10,
          format (percent) {
            return percent + '% 备注备注';
          }
        },
        oProgress3: {
          percent: 10,
          format (percent) {
            return percent + '% 备注备注备注备注备注备注备注备注备注备注备注备注备注备注';
          }
        },
        oProgress4: {
          percent: 10,
          format (percent) {
            return percent + '% 备注备注';
          }
        },
      }
    },
    methods: {
      formatSuccess (percent) {
        return '成功'; 
      },
      formatError (percent) {
        return '失败'; 
      },
      formatCustom (percent) {
        return '自定义strokeWidth为20';
      },
      plusHandle1 () {
        let percent = this.oProgress1.percent + 10;
        if (percent > 100) {
          percent = 100;
        }
        this.oProgress1.percent = percent;
      },
      minusHandle1 () {
        let percent = this.oProgress1.percent - 10;
        if (percent < 0) {
          percent = 0;
        }
        this.oProgress1.percent = percent;
      },
      plusHandle2 () {
        let percent = this.oProgress2.percent + 10;
        if (percent > 100) {
          percent = 100;
        }
        this.oProgress2.percent = percent;
      },
      minusHandle2 () {
        let percent = this.oProgress2.percent - 10;
        if (percent < 0) {
          percent = 0;
        }
        this.oProgress2.percent = percent;
      }
    }
  }
</script>