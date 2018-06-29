/**
 * Created by zmnaer on 2018/5/17.
 */
/* 日期格式化 */
const normalTime = (time)=>{
    if(time){
        var oDate=new Date();
        oDate.setTime(time);

        var y=oDate.getFullYear();
        var m=oDate.getMonth()+1;
        var d=oDate.getDate();

        var h=oDate.getHours();
        var mm=oDate.getMinutes();
        var s=oDate.getSeconds();

        return y+'-'+m+'-'+d+' '+h+':'+mm+':'+s;
    }
}
/* 字符字数限制 */
const charsLengthLimit = (str='',n)=>{
    if(str.length>n){
        return  str.slice(0,n)+'...'
    }else{
        return str
    }
}


module.exports = {
    normalTime,
    charsLengthLimit
}