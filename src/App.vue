<template>
  <div class="skin-green">
    <div class="wrapper">
      <head-nav :base-info="baseInfo"></head-nav>
      <sidebar :base-info="baseInfo"></sidebar>
      <div class="content-wrapper">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
  import Sidebar from './components/navigation.vue';
  import HeaderNav from './components/header.vue';
  import * as Util from "./Util";

  export default {
    components: {
      headNav: HeaderNav,
      sidebar: Sidebar
    },
    data: function() {
      return{
        baseInfo: {},
        notify: {}
      }
    },
    methods: {
      doAjax: function(options) {
        var self = this;
        Util.loadData(options.url, options.data, options.method)
            .then(function(data){
                options.sucCallback && options.sucCallback(data);
              }, function(msg) {
                self.$dispatch('lu-notify', {msg: msg.message, duration: 1000, show: true});
                options.failCallback && options.failCallback();
                if(401 == msg.code) {
                  setTimeout(function() {
                    window.location.href = msg.data.url;
                  }, 1500);
                }
              });
      },
      loadData: function() {
        var self = this;
        self.doAjax({
          url: URLConfig('baseInfo'),
          method: 'get',
          sucCallback: function(data) {
            self.baseInfo = data;
          }
        });
      }
    },
    events: {
      'lu-notify': function(obj) {
        for(var e in obj) {
          this.$set('notify.' + e, obj[e]);
        }
      }
    },
    created: function() {
      this.loadData();
    }
  }
</script>

