// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'

/* 全局组件——navbar */
import NavBtn from './components/main/nav/index'
import Pagination from './components/main/pagination/index'

Vue.config.productionTip = false;

/* 注册全局组件 */
Vue.use(NavBtn);
Vue.use(Pagination);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
