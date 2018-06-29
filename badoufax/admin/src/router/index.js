import Vue from 'vue'
import Router from 'vue-router'
import FirstView from '../components/main/first/First.vue'
import SecondView from '../components/main/second/Second.vue'


Vue.use(Router)

export default new Router({
    mode: 'history',
    scrollBehavior: ()=>({y: 0}),
    routes: [
        {
            path: '/first',
            component: FirstView
        },
        {
            path: '/second',
            component: SecondView
        },
        {
            path: '/',
            redirect: '/first'
        },
        {
            path: '*',
            redirect: '/first'
        }
    ]
})
