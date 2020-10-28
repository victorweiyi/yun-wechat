// pages/login/login.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userName: '',
    userPwd: '',
    animation:''
  },
  inputName(event) {
    this.setData({
      userName: event.detail.value
    })
  },
  //获取用户账号
  inputPassword(event) {
    this.setData({
      userPwd: event.detail.value
    })
  },
  login:function(e){
    let userName = this.data.userName
    let userPwd = this.data.userPwd
    console.log("点击登录")
   // console.log("userName", userName)
   // console.log("userPwd", userPwd)
    //校验用户名
    if (userName.length < 1) {
      wx.showToast({
        icon: 'none',
        image: '../../images/wind.png',
        title: '用户名不能为空',
      })
      return
    }
    if (userName.length > 10) {
      wx.showToast({
        icon: 'none',
        image: '../../images/wind.png',
        title: '用户名最多10位',
      })
      return
    }
    //校验密码
    if (userPwd.length != 6 || userPwd.length == 0) {
      wx.showToast({
        icon: 'none',
        image: '../../images/wind.png',
        title: '密码非空为6位',
      })
      return
    }


    //注册功能的实现
    wx.cloud.database().collection('user').where({
      userName: userName
    }).get({
      success(res) {
        console.log("获取数据成功", res)
        let user = res.data[0]
        console.log("user", user)
        if(user==undefined){
          wx.showToast({
            icon: 'none',
            image: '../../images/cry.png',
            title: '用户不存在',
          })
        }
        if (userPwd == user.userPwd && userName== user.userName) {
          //console.log('登陆成功')
          wx.showToast({
            title: '登陆成功',
          })
          wx.switchTab({
            url: '../music/music',
          })
          //保存用户登陆状态
          //wx.setStorageSync('user', user)
        } 
        if (userPwd != user.userPwd )
         {
          //console.log('登陆失败')
          wx.showToast({
            icon: 'none',
            image:'../../images/cry.png',
            title: '用户不存在',
          })
        }
      },
      fail(res) {
        console.log("获取数据失败", res)
      }
    })
  },

  
    // wx.navigateTo({
    //   url: '../music/music',
    // })
  


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {


  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {



  },
  rotateAni: function (n) {

  },

  /**


  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})