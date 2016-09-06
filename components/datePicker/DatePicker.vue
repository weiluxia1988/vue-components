<!--
  时间选择器
  weiluxia 2016.07.20
-->
<template>
  <div class="form-group col-md-7 padding-none">
    <label class="control-label">时间：</label>
    <div class="col-md-4 padding-none btn-group" v-if="ranges.length">
      <button type="button" class="btn btn-info" v-for="item in ranges" v-if="$index < 3" @click="selectHandle(item)">{{ item.title }}</button>
    </div>
    <div class="col-sm-6 input-group">
      <div class="input-group-addon">
        <i class="fa fa-calendar"></i>
      </div>
      <input type="hidden" value="{{ startTime }}" name="{{keyStartName}}">
      <input type="hidden" value="{{ endTime }}" name="{{keyEndName}}">
      <input v-el:reservationtime type="text" :value="time" class="form-control pull-right" placeholder="{{placeholder}}">
    </div>
  </div>
</template>
<script>
  import $ from 'jquery';
  import moment from 'moment';
  import 'bootstrap-daterangepicker/daterangepicker.scss';
  import 'bootstrap-daterangepicker';
  export default{
    props: {
      ranges: {
        type: Array,
        default () {
          return [];
        }
      },
      keyStartName: {
        type: String,
        default: 'startTime'
      },
      keyEndName: {
        type: String,
        default: 'endTime'
      },
      timePicker: {
        type: Boolean,
        default: false 
      },
      showDropdowns: {
        type: Boolean,
        default: false 
      },
      format: {
        type: String,
        default: 'YYYY-MM-DD hh:mm'
      },
      singleDatePicker: {
        type: Boolean,
        default: false 
      },
      startTime: {
        type: String,
        default: ''
      },
      endTime: {
        type: String,
        default: ''
      },
      minDate: {
        type: String,
        default: ''
      },
      maxDate: {
        type: String,
        default: ''
      },
      onChange: {
        type: Function,
        default () {
          return new Function();
        }
      },
      placeholder: {
        type: String,
        default: '开始日期   ~  结束日期'
      }
    },
    computed: {
      time () {
        if(this.singleDatePicker) {
          return this.startTime;
        } else if('' != this.startTime && '' != this.endTime){
          return this.startTime + ' ~ ' + this.endTime;
        } else{
          return '';
        }
      }
    },
    methods: {
      selectHandle (item) {
        var self = this;
        var s = self.getDateStr(item.count);
        var e = new Date();
        if(1 == Math.abs(item.count)) {
          e = s;
        }
        self.startTime = (moment(s).format(self.format));
        self.endTime = (moment(e).format(self.format));
        self.time = self.startTime + ' ~ ' + self.endTime;
        self.setDate(self.startTime, self.endTime);
        self.onChange(self.startTime, self.endTime);
      },
      getDateStr (count) { 
        var dd = new Date(); 
        dd.setDate( dd.getDate() + count);
        return dd; 
      },
      setDate (startTime, endTime) {
        var o = $(this.$els.reservationtime).data('daterangepicker');
        startTime && o.setStartDate(startTime);
        endTime && o.setEndDate(endTime);
      }
    },
    ready () {
      var self = this;

      var startTime = ( self.startTime == '' ? new Date() : self.startTime );
      var endTime = ( self.endTime == '' ? new Date() : self.endTime );
      var options = {
        startDate: startTime,
        endDate: endTime,
        timePicker: self.timePicker, // 显示小时
        autoUpdateInput: false, // 自动更新
        singleDatePicker: self.singleDatePicker,
        showDropdowns: self.showDropdowns, // 年月的下拉框
        locale: { 
          cancelLabel: '清除',
          applyLabel: '确定',
          format: self.format
        }
      };
      if("" != self.minDate) {
        options.minDate = self.minDate;
      }
      if("" != self.maxDate) {
        options.maxDate = self.maxDate;
      }

      $(self.$els.reservationtime).daterangepicker(options);

      $(self.$els.reservationtime).on('apply.daterangepicker', function(ev, picker) {
        self.startTime = picker.startDate.format(self.format);
        self.endTime = picker.endDate.format(self.format);
        self.onChange(self.startTime, self.endTime);
      });

      $(self.$els.reservationtime).on('cancel.daterangepicker', function(ev, picker) {
        self.startTime = '';
        self.endTime = '';
        self.onChange();
      });
    }
  }
</script>