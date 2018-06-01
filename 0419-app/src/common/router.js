import Vue from 'vue'
import Router from 'vue-router'

/* 全部加载 */
//import Index from '@/pages/Index'
//import TouZi from '@/pages/TouZi'
//import FaXian from '@/pages/FaXian'
//import My from '@/pages/My'
//import BidDetail from '@/pages/BidDetail'
//import Settings from '@/pages/Settings'

/* activity */
//import XinShouAct from '@/act/XinShouAct'

/* 异步加载 */
/* index */
const Index = () => import('@/pages/Index')
const Register = () => import('@/pages/Register')
const Login = () => import('@/pages/Login')
const FindPwd = () => import('@/pages/FindPwd')

/* touzi */
const TouZi = () => import('@/pages/TouZi')
const BidDetail = () => import('@/pages/BidDetail')
const BidDetailLogined = () => import('@/pages/BidDetailLogined')
const TzDetail = () => import('@/pages/TzDetail')
const BidSuccess = () => import('@/pages/BidSuccess')
const BankQuota = () => import('@/pages/BankQuota')

/* faxian */
const FaXian = () => import('@/pages/FaXian')
const FxDetail = () => import('@/pages/FxDetail')

/* my */
const My = () => import('@/pages/My')
const MyInfo = () => import('@/pages/MyInfo')
const Settings = () => import('@/pages/Settings')
const RiskCePing = () => import('@/pages/RiskCePing')
const ChangeLoginPwd = () => import('@/pages/ChangeLoginPwd')
const SetLoginPwd = () => import('@/pages/SetLoginPwd')
const LoginPwd = () => import('@/pages/LoginPwd')
const ChangePayPwd = () => import('@/pages/ChangePayPwd')
const SetPayPwd = () => import('@/pages/SetPayPwd')
const PayPwd = () => import('@/pages/PayPwd')
const NameAuth = () => import('@/pages/NameAuth')
const BindCard = () => import('@/pages/BindCard')
const Recharge = () => import('@/pages/Recharge')
const RechargeRecord = () => import('@/pages/RechargeRecord')
const TouZiRecord = () => import('@/pages/TouZiRecord')
const Recommend = () => import('@/pages/Recommend')
const RecommendRecord = () => import('@/pages/RecommendRecord')

/* news */
const Trends = () => import('@/pages/Trends')
const Affiche = () => import('@/pages/Affiche')

/* other */
const Hint = () => import('@/pages/Hint')

/* activity */
const XinShouAct = () => import('@/act/XinShouAct')

Vue.use(Router)

export default new Router({
    linkActiveClass: '',
    linkExactActiveClass: 'nav-link-active',
    //mode: 'history',
    scrollBehavior:()=>{ return{y: 0, x: 0}},
    routes: [
        {
            path: '/',
            name: 'index',
            component: Index,
            meta: { title: '首页',requireAuth: false }
        },
        {
            path: '/touzi',
            name: 'touzi',
            component: TouZi,
            meta: { title: '投资',requireAuth: false }
        },
        {
            path: '/faxian',
            name: 'faxian',
            component: FaXian,
            meta: { title: '发现',requireAuth: false }
        },
        {
            path: '/fxdetail/:id',
            name: 'fxdetail',
            component: FxDetail,
            meta: { title: '资讯详情',requireAuth: false }
        },
        {
            path: '/my',
            name: 'my',
            component: My,
            meta: { title: '个人中心',requireAuth: false }
        },
        {
            path: '/myinfo',
            name: 'myinfo',
            component: MyInfo,
            meta: { title: '我的信息',requireAuth: true }
        },
        {
            path: '/changeloginpwd',
            name: 'changeloginpwd',
            component: ChangeLoginPwd,
            meta: { title: '修改登录密码',requireAuth: true }
        },
        {
            path: '/setloginpwd',
            name: 'setloginpwd',
            component: SetLoginPwd,
            meta: { title: '设置登录密码',requireAuth: true }
        },
        {
            path: '/loginpwd',
            name: 'loginpwd',
            component: LoginPwd,
            meta: { title: '登录密码',requireAuth: false }
        },
        {
            path: '/changepaypwd',
            name: 'changepaypwd',
            component: ChangePayPwd,
            meta: { title: '修改支付密码',requireAuth: true }
        },
        {
            path: '/setpaypwd',
            name: 'setpaypwd',
            component: SetPayPwd,
            meta: { title: '设置支付密码',requireAuth: true }
        },
        {
            path: '/paypwd',
            name: 'paypwd',
            component: PayPwd,
            meta: { title: '支付密码',requireAuth: false }
        },
        {
            path: '/nameauth',
            name: 'nameauth',
            component: NameAuth,
            meta: { title: '实名认证',requireAuth: true }
        },
        {
            path: '/bindcard',
            name: 'bindcard',
            component: BindCard,
            meta: { title: '绑定银行卡',requireAuth: true }
        },
        {
            path: '/recharge',
            name: 'recharge',
            component: Recharge,
            meta: { title: '充值',requireAuth: true }
        },
        {
            path: '/rechargerecord',
            name: 'rechargerecord',
            component: RechargeRecord,
            meta: { title: '充值记录',requireAuth: true }
        },
        {
            path: '/touzirecord',
            name: 'touzirecord',
            component: TouZiRecord,
            meta: { title: '投资记录',requireAuth: true }
        },
        {
            path: '/recommend',
            name: 'recommend',
            component: Recommend,
            meta: { title: '推荐管理',requireAuth: false }
        },
        {
            path: '/recommendrecord',
            name: 'recommendrecord',
            component: RecommendRecord,
            meta: { title: '推荐记录',requireAuth: true }
        },



        {
            path: '/trends',
            name: 'trends',
            component: Trends,
            meta: { title: '平台动态',requireAuth: true }
        },
        {
            path: '/affiche',
            name: 'affiche',
            component: Affiche,
            meta: { title: '平台公告',requireAuth: true }
        },



        {
            path: '/biddetail/:id',
            name: 'biddetail',
            component: BidDetail,
            meta: { title: '投资详情',requireAuth: false }
        },
        {
            path: '/biddetaillogined/:id',
            name: 'biddetaillogined',
            component: BidDetailLogined,
            meta: { title: '投资详情',requireAuth: true }
        },
        {
            path: '/tzdetail/:id',
            name: 'tzdetail',
            component: TzDetail,
            meta: { title: '投资详情',requireAuth: false }
        },
        {
            path: '/bidsuccess',
            name: 'bidsuccess',
            component: BidSuccess,
            meta: { title: '投资成功',requireAuth: true }
        },
        {
            path: '/bankquota',
            name: 'bankquota',
            component: BankQuota,
            meta: { title: '限额说明',requireAuth: false }
        },
        {
            path: '/settings',
            name: 'settings',
            component: Settings,
            meta: { title: '系统设置',requireAuth: true }
        },
        {
            path: '/register',
            name: 'register',
            component: Register,
            meta: { title: '注册',requireAuth: false }
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
            meta: { title: '登录',requireAuth: false }
        },
        {
            path: '/findpwd',
            name: 'findpwd',
            component: FindPwd,
            meta: { title: '找回密码',requireAuth: false }
        },
        {
            path: '/hint',
            name: 'hint',
            component: Hint,
            meta: { title: '404提示',requireAuth: false }
        },
        {
            path: '/riskceping',
            name: 'riskceping',
            component: RiskCePing,
            meta: { title: '风险测评',requireAuth: false }
        },
        /* activity */
        {
            path: '/act/xinshouact',
            name: 'xinshouact',
            component: XinShouAct,
            meta: { title: '活动',requireAuth: false }
        },
        {
            path: '*',
            redirect: '/'
        },
    ]
})
