//获取应用实例
var app = getApp()
Page({
  data: {
    logoUrl:"../../images/1.png",
    title:"八斗金服",
    desc:"八斗金服（www.badoufax.com）是一家专业的网络借贷信息中介平台，于2016年7月正式上线，目前八斗金服运营方为八斗金服（北京）信息技术有限公司。八斗金服于金融科技为核心，以严格专业的风控体系为基础，致力于为有融资、投资需求的客户提供高效、便捷、专业、安全的借贷撮合服务。",
    contact:"400-168-8885",
    site:"北京市丰台区外环西路26号院28号楼4层",
    website:"www.badoufax.com"
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  }
})
