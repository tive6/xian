/**
 * Created by zmnaer on 2018/5/9.
 */
const Api = {
    /* common */
    regaction:'/mobile/common/regaction', //注册
    actlogin:'/mobile/common/actlogin', //登录
    sendphone:'/mobile/common/sendphone', //注册发送手机验证码
    findpwdsendphone:'/mobile/common/findpwdsendphone', //找回密码发送手机验证码
    dofindpwd:'/mobile/common/dofindpwd', //找回密码提交操作
    indexDataInfo:'/mobile/common/indexDataInfo', //首页数据
    notice:'/mobile/common/notice', //网站公告
    arealist:'/mobile/common/arealist', //地区列表获取
    articlelist:'/mobile/article/articlelist', //资讯列表
    articledetail:'/mobile/article/articledetail', //资讯详情
    activitylist:'/mobile/article/activitylist', //活动列表
    activitydetail:'/mobile/article/activitydetail', //活动详情
    newnotice:'/mobile/article/newnotice', //最新公告
    //111:'111', //

    /* user */
    userinfo:'/mobile/mcenter/userinfo', //会员中心首页数据
    getinvestlist:'/mobile/mcenter/investlist', //会员投资记录
    inner_msg:'/mobile/mcenter/inner_msg', //站内信
    setUserHead:'/mobile/mcenter/setUserHead', //上传头像
    setbanksendphone:'/mobile/mcenter/setbanksendphone', //绑定银行卡发送手机验证码
    setUserbank:'/mobile/mcenter/setUserbank', //绑定银行卡
    getuserbank:'/mobile/mcenter/getuserbank', //获取银行卡信息
    setUserRealname:'/mobile/mcenter/setUserRealname', //实名认证
    setLoginpwdbyold:'/mobile/mcenter/setLoginpwdbyold', //修改登录密码-根据老密码验证
    setPaypwdbyold:'/mobile/mcenter/setPaypwdbyold', //修改支付密码-根据老密码验证
    paypwdsendphone:'/mobile/mcenter/paypwdsendphone', //找回支付密码发送手机验证码
    checkpaypwdcode:'/mobile/mcenter/checkpaypwdcode', //找回支付密码检测手机验证码
    setPaypwdbyphone:'/mobile/mcenter/setPaypwdbyphone', //找回支付密码提交修改
    card:'/mobile/mcenter/card', //卡券列表
    promotion:'/mobile/mcenter/promotion', //邀请会员列表
    withdrawinfo:'/mobile/mcenter/withdrawinfo', //会员提现信息
    actwithdraw:'/mobile/mcenter/actwithdraw', //会员提现提交
    userrealinfo:'/mobile/mcenter/userrealinfo', //会员真实姓名信息获取
    evaluationdo:'/mobile/mcenter/evaluationdo', //测评提交
    111:'111', //

    /* bid */
    borrowlist:'/mobile/tinvest/borrowlist', //投资列表
    borrowdetail:'/mobile/tinvest/borrowdetail', //项目详情
    investlist:'/mobile/tinvest/investlist', //标的投资记录
    tinvestmoney:'/mobile/tinvest/tinvestmoney', //会员投资提交
    //111:'111', //
}

/*
 1000	Token失效
 1001	返回成功
 1002	操作成功
 1003	参数有误
 1004	操作失败
 1005	操作对象不允许
 1006	账户余额不足
 1007	支付密码错误
 1008	手机格式错误
 1009	暂无更多数据
 1010	操作对象不存在
 1011	验证码错误/失效
 1012	违法链接不可操作
 1013	账号被冻结
 * */

export default Api