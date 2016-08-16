import Vue from 'vue';
import Router from 'vue-router';
import registerRouters from './routers';
import app from './App.vue';

Vue.config.debug = true;

var vue = new Vue();

// 日期转换
Vue.filter('dateFormat', function (value, fmt) {
  return new Date(value * 1000).Format(fmt);
});

Vue.use(Router);
var router = new Router({
	linkActiveClass: 'active'
});
registerRouters(router);

router.start(app, '#app');