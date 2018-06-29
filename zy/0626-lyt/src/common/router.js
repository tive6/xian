import Vue from 'vue'
import Router from 'vue-router'

/* 异步加载 */
/* index */
const Home = () => import('@/pages/Home')
const My = () => import('@/pages/My')
const Faxian = () => import('@/pages/Faxian')



//const Nav = () => import('@/components/Navbar')

Vue.use(Router)

export default new Router({
    linkActiveClass: '',
    linkExactActiveClass: 'nav-list-active',
    //mode: 'history',
    scrollBehavior:()=>{ return{y: 0, x: 0}},
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            meta: { title: '首页',requireAuth: false }
        },
        {
            path: '/my',
            name: 'my',
            component: My,
            meta: { title: '我的',requireAuth: false }
        },
        {
            path: '/faxian',
            name: 'faxian',
            component: Faxian,
            meta: { title: '发现',requireAuth: false }
        },
        {
            path: '*',
            redirect: '/'
        }
    ]
})
