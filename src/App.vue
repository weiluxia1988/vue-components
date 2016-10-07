<template>
  <div class="skin-green">
    <div class="wrapper">
      <head-nav :base-info="baseInfo"></head-nav>
      <sidebar :base-info="baseInfo"></sidebar>
      <div class="content-wrapper">
        <router-view></router-view>
      </div>
      <footer-nav></footer-nav>
    </div>
  </div>
</template>
<script>
  import sidebar from './components/navigation.vue';
  import headNav from './components/header.vue';
  import footerNav from './components/footer.vue';
  import * as Util from "./Util";
  export default {
    components: { headNav, sidebar, footerNav },
    data: function() {
      return{
        baseInfo: {},
        notify: {}
      }
    },
    methods: {
      loadData: function() {
        var self = this;
        Util.doAjax({
          url: URLConfig('baseInfo'),
          method: 'get',
          sucCallback: function(data) {
            self.baseInfo = data;
          }
        });
      }
    },
    created () {
      this.loadData();
    },
    ready () {
      Util.init();
    }
  }
</script>

