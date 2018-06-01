// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* npm modules */
import Vue from 'vue'
import axios from 'axios'

/* 主组件 */
import App from './App'
/* 公共配置、方法 */
import router from './common/router'
import store from './store'

import { Alert } from  './common/bus'
import Util from './common/util'
import Api from './common/api'
import Filter from './common/filter'
/* 公共组件 */
import Model from './components/model'
import Loading from './components/loading'

/* load public and static files */
//import './assets/css/swiper.min.css'
require('./assets/css/animate.css')
//require('./assets/css/swiper.min.css')
require('./assets/css/style.styl')

/* 全局组件、方法注册 */
Vue.use(Model)
Vue.use(Loading)
Vue.use(Util)
Vue.prototype.$api = Api
Vue.prototype.$alert = Alert

/* 添加全局的自定义过滤器 */
Object.keys(Filter).forEach(key => Vue.filter(key, Filter[key]))
/*Object.keys(Filter).forEach(function(key){
    return Vue.filler(key,Filter[key])
})*/

//axios的一些配置，比如发送请求显示loading，请求回来loading消失之类的
axios.interceptors.request.use(function (req) {  //配置发送请求的信息
    store.dispatch('showLoading')
    return req
}, function (error) {
    return Promise.reject(error)
})
axios.interceptors.response.use(function (res) { //配置请求回来的信息
    store.dispatch('hideLoading')
    return res
}, function (error) {
    return Promise.reject(error)
})

/* axios 配置 */
let baseUrl
//console.log(process.env.NODE_ENV)
/*if(process.env.NODE_ENV == 'production'){
    // 部署服务调用正式地址
    baseUrl = 'https://www.beifu58.com/'
    //baseUrl = 'http://test.beifu58.com/'
}else{
    // 开发测试地址
    baseUrl = 'http://test.beifu58.com/'
}*/
baseUrl = 'http://test.beifu58.com/'
axios.defaults.timeout = 5000
axios.baseURL = baseUrl
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
//axios.defaults.baseURL='http://localhost:8082/'
Vue.prototype.$http = axios  //其他页面在使用axios的时候直接  this.$http就可以了

Vue.config.productionTip = false

/* eslint-disable no-new */
var vm = new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})
