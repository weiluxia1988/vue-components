<template>
<!-- 多选 -->
  <select class="v-select2" id='v-select2-{{sid}}' v-if="multiple==true" multiple="multiple">
    <option></option>
    <template v-for="item in lists">
      <option v-if="item.selected==true" value={{item.id}} selected>{{item.text}}</option>
      <option v-else value={{item.id}}>{{item.text}}</option>
    </template>
  </select>
<!-- 单选 -->
  <select class="v-select2" id='v-select2-{{sid}}' v-else>
    <option></option>
    <template v-for="item in lists" >
      <option v-if="item.selected==true" value={{item.id}} selected>{{item.text}}</option>
      <option v-else value={{item.id}}>{{item.text}}</option>
    </template>
  </select>
</template>
<script>
  import './select.scss';
  import * as ZhTo from "./pinyin";
  import * as Util from "../Util";
  // select2依赖加载jquery
  import $ from 'jquery';
  import 'select2/src/scss/core.scss';
  import select2 from 'select2';

  export default{
    props:['lists','multiple','placeholders','id','ajaxurl','min-l','change','data','ajaxtype'],
    data(){
      return{
        sid:null,
        sminL:null
      }
    },
    watch:{
      'data':function(newval,oldval){
        var self = this;
        var type = this.ajaxtype?this.ajaxtype:'GET';
        console.log(newval,self.ajaxurl);
        Util.loadData(self.ajaxurl,newval,type).then(function(data){
          self.lists = data.items
          self.$nextTick(function () {
            $('#v-select2-'+self.sid).select2({
              placeholder: self.placeholders,
              matcher: ZhTo.oldMatcher(ZhTo.matchStart)
            })
          })
        })
      }
    },
    ready:function(){
      var self = this;
      this.sid = this.id?this.id:(1000*Math.random()+'').replace('.','');
      this.sminL = this.minL?this.minL:0;
      if(self.ajaxurl&&!self.data){
        self.$nextTick(function () {
          $('#v-select2-'+self.sid).select2({
            ajax: {
              url: self.ajaxurl,
              dataType: 'json',
              delay: 250,
              data: function (params) {
                return {
                  q: params.term,
                };
              },
              processResults: function (data, params) {
                return {
                  results: data.data.items,
                };
              },
              cache: true
            },
            escapeMarkup: function (markup) { return markup; }, 
            minimumInputLength: self.sminL,
            templateResult: function (item) { return '<div>'+item.text+'</div>'; },
            templateSelection: function (repo) { return repo.text;}
          });
        })
      }else if(self.ajaxurl&&self.data){
        var type = this.ajaxtype?this.ajaxtype:'GET';
        Util.loadData(self.ajaxurl,self.data,type).then(function(data){
          self.lists = data.items
          self.$nextTick(function () {
            $('#v-select2-'+self.sid).select2({
              placeholder: self.placeholders,
              matcher: ZhTo.oldMatcher(ZhTo.matchStart)
            })
          })
        })
      }else{
        self.$nextTick(function () {
          $('#v-select2-'+self.sid).select2({
            placeholder: self.placeholders,
            matcher: ZhTo.oldMatcher(ZhTo.matchStart)
          })
        })
      }
      self.$nextTick(function () {
        $('#v-select2-'+self.sid).on('change', function (evt) {
          self.change && self.change();
        });
      })
    }
  }
</script>