/**
 * Created by zmnaer on 2018/5/8.
 */
export default function (Vue, options) {
    /* cookie 相关操作 */
    Vue.prototype.getCookie = function (name) {
        var v = window.document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)')
        return v ? v[2] : null
    }
    Vue.prototype.setCookie =  function (name, value, days) {
        var d = new Date
        d.setTime(d.getTime() + 24*60*60*1000*days)
        window.document.cookie = name + "=" + value + ";path=/;expires=" + d.toGMTString()
    }
    Vue.prototype.delCookie = function (name='user') {
        this.setCookie(name, '', -1)
    }
    Vue.prototype.encodeUrl = function (val) {
        return encodeURIComponent(encodeURIComponent(val.split('').reverse().join('')))
    }
    Vue.prototype.decodeUrl = function (val) {
        return decodeURIComponent(decodeURIComponent(val)).split('').reverse().join('')
    }
    Vue.prototype.setLocationData = function(name,val,days=30){
        this.setCookie(name,this.encodeUrl(JSON.stringify(val)),days)
    }
    Vue.prototype.getLocationData = function(name='user',key='token'){
        let data = ''
        try{
            data = JSON.parse(this.decodeUrl(this.getCookie(name)))
        }catch (err){
            data = ''
        }
        if(data){
            return key?data[key]:data
        }else{
            return ''
        }
    }
    Vue.prototype.getLocationDataObj = function(name='user'){
        let data = {}
        try{
            data = JSON.parse(this.decodeUrl(this.getCookie(name)))
        }catch (err){
            data = {}
        }
        return data
    }
    /* url 相关操作 */
    Vue.prototype.setBackUrl = function (url){
        return url
    }
    Vue.prototype.getBackUrl = function (url){
        return url
    }
    /* 加backUrl去登录 */
    Vue.prototype.toLoginAddBackUrl = function(){
        let url = encodeURIComponent(window.location.href)
        this.$router.push({path:'/login?backUrl='+url})
    }
    /* url返回链接跳转 */
    Vue.prototype.toTargetUrl = function(){
        let targetUrl = window.location.href.split('?').length>=2?
            window.location.href.split('?')[1]:
            window.location.href.split('?')[0]
        if(targetUrl.indexOf('backUrl')!==-1 && targetUrl){
            let search = targetUrl.split('=')[1]
            let deUrl = decodeURIComponent(search)
            if(deUrl.indexOf('#')!==-1){
                window.location.href = deUrl
            }else{
                this.$router.push({path:'/'})
            }
        }else{
            this.$router.push({path:'/'})
        }
    }
    /* url 参数解析 */
    Vue.prototype.getUrlParams = function(key){
        let url = window.location.href
        let search = ''
        let paramsObj = {}
        if(url.indexOf('?')!=-1){
            search = url.split('?')[1]
        }
        let paramsArr = search.split('&')
        paramsArr.forEach(function(val,i){
            paramsObj[val.split('=')[0]] = val.split('=')[1]
        })
        return paramsObj[key]?paramsObj[key]:''
    }
    /* android、ios判断 */
    Vue.prototype.getPhoneType = function(){
        let u = navigator.userAgent
        let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1 //android终端
        let isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) //ios终端
        return isAndroid
    }
    /* img加载失败调用 */
    Vue.prototype.imgLoadFailed = function(e){
        //console.log(e.currentTarget)
        e.target.src=require('./../assets/img/other/img-error.png')
    }
    /* 正则验证-手机号 */
    Vue.prototype.regPhone = function(val){
        let reg = /^[1][3,4,5,7,8][0-9]{9}$/
        return reg.test(val)
    }
}