import '../components/style/index.scss';
import Vue from 'vue';
import Router from 'vue-router';
import registerRouters from './routers';
import app from './App.vue';

Vue.config.debug = true;

var vue = new Vue(); 
Vue.use(Router);
var router = new Router({
	linkActiveClass: 'active',
});
registerRouters(router);

router.start(app, '#app');