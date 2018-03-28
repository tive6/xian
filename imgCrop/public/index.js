/**
 * Created by zmnaer on 2018/1/19.
 */
window.onload = function(){

    var body = document.getElementsByTagName('body')[0]
    var oBase64 = getByClass('crop-base64')
    var oOuter = getByClass('crop-outer')
    var oContent = getByClass('crop-content')
    var oImg = getByClass('outer-img')
    var oShow = getByClass('crop-show')
    var oMr = getByClass('crop-mr')
    var oLr = getByClass('crop-ml')
    var oTm = getByClass('crop-tm')
    var oBm = getByClass('crop-bm')
    var oBr = getByClass('crop-br')
    var oCreate = getByClass('crop-btn-create')
    var oSave = getByClass('crop-btn-save')
    var contW = parseInt(getStyle(oContent,'width'))
    var contH = parseInt(getStyle(oContent,'height'))
    var contX = pageX(oContent)
    var contY = pageY(oContent)
    var targetImgSrc = oImg.src

    // 主体区 拖拽
    oOuter.onmousedown = function(e){
        e.stopPropagation()
        e = window.e || e
        let that = this
        var oOuterX = e.clientX - that.offsetLeft
        var oOuterY = e.clientY - that.offsetTop
        document.onmousemove = function(e){
            e = window.e || e
            e.preventDefault()
            var left = e.clientX - oOuterX
            var top = e.clientY - oOuterY
            var maxLeft = contW - parseInt(getStyle(that,'width'))
            var maxTop = contH - parseInt(getStyle(that,'height'))
            left<=0 && (left=0)
            left>= maxLeft && (left = maxLeft)
            top<=0 && (top=0)
            top>= maxTop && (top = maxTop)
            setStyle(that,'left',left + 'px')
            setStyle(that,'top',top + 'px')
            createCanvas(function (data) {
                // console.log(data)
            })
        }
        setNull()
    }
    // 中右 边
    oMr.onmousedown = function(e){
        e = window.e || e
        e.stopPropagation()
        document.onmousemove = function(e){
            e = window.e || e
            e.preventDefault()
            var width = e.clientX - pageX(oOuter)
            var maxW = contX + contW
            if( e.clientX >= maxW ) {
                width = maxW - pageX(oOuter)
            }
            setStyle(oOuter,'width',width + 'px')
            createCanvas(function (data) {
                // console.log(data)
            })
        }
        setNull()
    }
    // 中左 边
    oLr.onmousedown = function(e){
        e = window.e || e
        e.stopPropagation()
        document.onmousemove = function(e){
            e = window.e || e
            e.preventDefault()
            var width = e.clientX - pageX(oOuter)
            var left = e.clientX - pageX(oContent)
            if(width<0){
                width = Math.abs(width) + parseInt(getStyle(oOuter,'width'))
            }else{
                width = parseInt(getStyle(oOuter,'width')) - width
            }
            if(left<=0){
                width = left + width
                left = 0
            }
            setStyle(oOuter,'left',left + 'px')
            setStyle(oOuter,'width',width + 'px')
            createCanvas(function (data) {
                // console.log(data)
            })
        }
        setNull()
    }
    // 下中 边
    oBm.onmousedown = function(e){
        e = window.e || e
        e.stopPropagation()
        document.onmousemove = function(e){
            e = window.e || e
            e.preventDefault()
            var height = e.clientY - pageY(oOuter)
            var maxH = contY + contH
            if(e.clientY>= maxH){
                height = maxH - pageY(oOuter)
            }
            setStyle(oOuter,'height',height + 'px')
            createCanvas(function (data) {
                // console.log(data)
            })
        }
        setNull()
    }
    // 上中 边
    oTm.onmousedown = function(e){
        e = window.e || e
        e.stopPropagation()
        document.onmousemove = function(e){
            e = window.e || e
            e.preventDefault()
            var height = e.clientY - pageY(oOuter)
            var top = e.clientY - contY
            if(height<0){
                height = Math.abs(height) + parseInt(getStyle(oOuter,'height'))
            }else{
                height = parseInt(getStyle(oOuter,'height')) - height
            }
            if(top<=0){
                height = top + height
                top = 0
            }
            setStyle(oOuter,'height',height + 'px')
            setStyle(oOuter,'top',top + 'px')
            createCanvas(function (data) {
                // console.log(data)
            })
        }
        setNull()
    }
    // 下右 边
    oBr.onmousedown = function(e){
        e = window.e || e
        e.stopPropagation()
        document.onmousemove = function(e){
            e = window.e || e
            e.preventDefault()
            var width = e.clientX - pageX(oOuter)
            var height = e.clientY - pageY(oOuter)
            var maxW = contX + contW
            if( e.clientX >= maxW ) {
                width = maxW - pageX(oOuter)
            }
            var maxH = contY + contH
            if(e.clientY>= maxH){
                height = maxH - pageY(oOuter)
            }
            setStyle(oOuter,'width',width + 'px')
            setStyle(oOuter,'height',height + 'px')
            createCanvas(function (data) {
                // console.log(data)
            })
        }
        setNull()
    }
    /* onmouseup清空 */
    function setNull(){
        document.onmouseup = function(){
            document.onmousemove = null
            document.onmouseup = null
        }
    }
    /* 获取选取框参数 */
    function getArgs(){
        var opts = {
            x: parseInt(getStyle(oOuter,'left')),
            y: parseInt(getStyle(oOuter,'top')),
            w: parseInt(getStyle(oOuter,'width')),
            h: parseInt(getStyle(oOuter,'height'))
        }
        return opts
    }
    /* 生成canvas */
    function createCanvas(cb){
        oShow.innerHTML = ''
        var cvs = document.createElement('canvas')
        var ctx = cvs.getContext('2d')
        cvs.className = 'crop-canvas'
        var cvsImg = new Image()
        var opts = getArgs()
//      extent(opts,defaultOpts)
        log(opts)
        var oldW = oImg.naturalWidth
        var imgW = parseInt(getStyle(oImg,'width'))
        var scale = oldW / imgW
        cvs.width =  opts.w*scale
        cvs.height =  opts.h*scale
        cvsImg.src = targetImgSrc
        cvsImg.style.display = 'block'
        cvsImg.style.width = '100%'
        cvsImg.onload = function(){
            ctx.drawImage(cvsImg,opts.x*scale,opts.y*scale,cvs.width,cvs.height,0,0,cvs.width,cvs.height)
            var imgSrc = cvs.toDataURL("image/png",1.0)
            var newImg = new Image()
            newImg.src = imgSrc;
            newImg.style.display = 'block'
            newImg.style.width = '80%'
            oShow.appendChild(newImg)
            cb(imgSrc)
        }
    }
    /* 生成查看 并返回 base64 */
    oCreate.onclick = function(){
        createCanvas(function(data){
        oBase64.innerHTML = data
        })
    }
    oSave.onclick = function(){
        createCanvas(function(data){
            ajax({
                method: 'POST',
                url: '/upload',
                data: {
                    base64: data
                },
                success: function (res){
                    console.log(res)
                }
            });
        })
    }

    var toString = Object.prototype.toString
    function getType(o){
        return toString.call(o).slice(8,-1)
    }
    /* 根据class获取元素 */
    function getByClass(sClass,oParent){
        var oPar;
        if(oParent && getType(oParent)===Object ) {
            oPar = oParent
        }else{
            oPar = document.body || document
        }
        var aEle = oPar.getElementsByTagName('*')
        var aResult = []
        var i = 0
        for(;i<aEle.length;i++){
            var item = aEle[i].className
            var oArr = item.split(' ')
            for(var j=0;j<oArr.length;j++){
                oArr[j] == sClass && aResult.push(aEle[i])
            }
        }
        if(aResult.length==1){
            return aResult[0]
        }else{
            return aResult
        }
    }
    /* css混合属性变驼峰 */
    function stringToHump(str){
        var oArr = str.split("-")
        var nArr = oArr[0]
        for(var i=1;i<oArr.length;i++){
            nArr = nArr + oArr[i].slice(0,1).toUpperCase() + oArr[i].slice(1)
        }
        return nArr;
    }
    /* log打印输出 */
    function log(val){
        console.log(val)
    }
    /* 设置css样式 */
    function setStyle(obj,key,val){
        key = stringToHump(key)
        if(getType(obj) === Array){
            for(var i=0;i<obj.length;i++){
                return obj[i].style[key] = val
            }
        }else{
            return obj.style[key] = val
        }
    }
    /* 获取css样式 */
    function getStyle(obj,attr){
        return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj)[attr]
    }
    /* 获取元素在页面中的具体位置 */
    function pageX(elem){
        return elem.offsetParent?(elem.offsetLeft+pageX(elem.offsetParent)):elem.offsetLeft
    }
    function pageY(elem){
        return elem.offsetParent?(elem.offsetTop+pageY(elem.offsetParent)):elem.offsetTop
    }

    /* 封装ajax函数
     * @param {string}opt.type http连接的方式，包括POST和GET两种方式
     * @param {string}opt.url 发送请求的url
     * @param {boolean}opt.async 是否为异步请求，true为异步的，false为同步的
     * @param {object}opt.data 发送的参数，格式为对象类型
     * @param {function}opt.success ajax发送并接收成功调用的回调函数
     */
    function ajax(opt) {
        opt = opt || {};
        opt.method = opt.method.toUpperCase() || 'POST';
        opt.url = opt.url || '';
        opt.async = opt.async || true;
        opt.data = opt.data || null;
        opt.success = opt.success || function () {};
        var xmlHttp = null;
        if (XMLHttpRequest) {
            xmlHttp = new XMLHttpRequest();
        }
        else {
            xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');
        }var params = [];
        for (var key in opt.data){
            params.push(key + '=' + opt.data[key]);
        }
        var postData = params.join('&');
        if (opt.method.toUpperCase() === 'POST') {
            xmlHttp.open(opt.method, opt.url, opt.async);
            xmlHttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
            xmlHttp.send(postData);
        }
        else if (opt.method.toUpperCase() === 'GET') {
            xmlHttp.open(opt.method, opt.url + '?' + postData, opt.async);
            xmlHttp.send(null);
        }
        xmlHttp.onreadystatechange = function () {
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
                opt.success(xmlHttp.responseText);
            }
        };
    }

}
