<template>
  <section class="content-header">
    <h1>时间选择器<small>Datepicker</small></h1>
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
            <p class="text-muted">日期选择器</p>
            <pre>
              <code class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"time"</span> /&gt;</span></code>
            </pre>
          </div>
        </div>
      </div>
    </div>
    <h2 class="page-header"><i class="fa fa-code"></i> 代码演示</h2>
    <div class="row">
      <div class="col-md-12">
        <div class="box box-success">
          <div class="box-header">
            <h3 class="box-title">内建样式image</h3>
          </div>
          <div class="box-body">
            <div class="col-md-12 filter-bar">
              <div class="form-group col-md-7">
                <label class="col-sm-2 control-label">时间：</label>
                <div class="col-sm-10">
                  <v-date-picker
                    :placeholder="oDate.placeholder"
                    :time-picker="oDate.timePicker"
                    :show-dropdowns="oDate.showDropdowns"
                    :format="oDate.format"
                    :single-date-picker="oDate.singleDatePicker"
                    :start-time="oDate.startTime"
                    :key-start-name="oDate.keyStartName"
                    :end-time="oDate.endTime"
                    :key-end-name="oDate.keyEndName"
                    :on-change="oDate.onChange"
                  ></v-date-picker>
                </div>
              </div>
              <div class="form-group col-md-7">
                <label class="col-sm-2 control-label">时间：</label>
                <div class="col-sm-10">
                  <v-date-picker
                    :placeholder="oDate.placeholder"
                    :time-picker="oDate.timePicker"
                    :ranges="oDate.dateRange"
                    :show-dropdowns="oDate.showDropdowns"
                    :format="oDate.format"
                    :single-date-picker="oDate.singleDatePicker"
                    :start-time="oDate.startTime"
                    :key-start-name="oDate.keyStartName"
                    :end-time="oDate.endTime"
                    :key-end-name="oDate.keyEndName"
                    :on-change="oDate.onChange"
                  ></v-date-picker>
                </div>
              </div>
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
            <h3 class="box-title">datepicker props</h3>
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
                  <td>ranges</td>
                  <td>快捷选择日期，例如昨日 近7日 近30日（[{count: -1, title: '昨日'}]）</td>
                  <td>Array</td>
                  <td>[]</td>
                </tr>
                <tr>
                  <td>keyStartName</td>
                  <td>设置开始时间input属性名称</td>
                  <td>String</td>
                  <td>startTime</td>
                </tr>
                <tr>
                  <td>startTime</td>
                  <td>设置开始时间</td>
                  <td>String</td>
                  <td>''</td>
                </tr>
                <tr>
                  <td>keyEndName</td>
                  <td>设置结束时间input属性名称
                  <td>String</td>
                  <td>endTime</td>
                </tr>
                <tr>
                  <td>endTime</td>
                  <td>设置结束时间</td>
                  <td>String</td>
                  <td>''</td>
                </tr>
                <tr>
                  <td>timePicker</td>
                  <td>是否出现小时</td>
                  <td>Boolean</td>
                  <td>true</td>
                </tr>
                <tr>
                  <td>showDropdowns</td>
                  <td>是否显示年月下拉框</td>
                  <td>Boolean</td>
                  <td>false</td>
                </tr>
                <tr>
                  <td>format</td>
                  <td>日期格式</td>
                  <td>String</td>
                  <td>YYYY-MM-DD hh:mm</td>
                </tr>
                <tr>
                  <td>singleDatePicker</td>
                  <td>是否是单个时间选择器</td>
                  <td>Boolean</td>
                  <td>false</td>
                </tr>
                <tr>
                  <td>minDate</td>
                  <td>可选最早时间</td>
                  <td>String</td>
                  <td></td>
                </tr>
                <tr>
                  <td>maxDate</td>
                  <td>可选最迟时间</td>
                  <td>String</td>
                  <td></td>
                </tr>
                <tr>
                  <td>placeholder</td>
                  <td>设置文本框placeholder</td>
                  <td>String</td>
                  <td>开始日期  ~  结束日期</td>
                </tr>
                <tr>
                  <td>onChange</td>
                  <td>选择日期回调</td>
                  <td>Function</td>
                  <td>new Function()</td>
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
  import vDatePicker from "../../../components/datePicker";

  // 时间
  const dateRange = [
    {
      count: -1,
      title: '昨日'
    },
    {
      count: -6,
      title: '近七日'
    },
    {
      count: -29,
      title: '近30日'
    }
  ];
  export default{
    components: { vDatePicker },
    data () {
      let self = this;
      return {
        oDate: {
          dateRange: dateRange,
          timePicker: false,
          singleDatePicker: false,
          showDropdowns: false,
          format: 'YYYY-MM-DD',
          keyStartName: 'starttime',
          keyEndName: 'endtime',
          startTime: '',
          endTime: '',
          placeholder: '开始日期 ~ 结束日期',
          onChange: function() {
            console.log(arguments);
          }
        }
      }
    }
  }
</script>