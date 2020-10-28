//index.js
let app = getApp(),
urlHeader = app.globalData.urlHeader;
// const db = wx.cloud.database({env:'fun-kv2a7'});
// const admin = db.collection('adminlist');
// let name = null;
// let password = null;
Page({
  data: {
    userName:'',
    userPwd:''

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

  register() {
    let userName = this.data.userName
    let userPwd = this.data.userPwd
    //console.log("点击了注册")
    //console.log("userName", userName)
    //console.log("userPwd", userPwd)
    //校验用户名
    if (userName.length < 1) {
      wx.showToast({
        icon: 'none',
        image: '../../images/haha.png',
        title: '用户名不能为空',
      })
      return
    }
    if (userName.length > 10) {
      wx.showToast({
        icon: 'none',
        image: '../../images/haha.png',
        title: '用户名过多',
      })
      return
    }
    //校验密码
    if (userPwd.length != 6 ||userPwd.length == 0) {
      wx.showToast({
        icon: 'none',
        image:'../../images/haha.png',
        title: '密码非空为6位',
      })
      return
    }
    

    //注册功能的实现
    wx.cloud.database().collection('user').add({
      data: {
        userName: userName,
        userPwd: userPwd
      },
      success(res) {
        console.log('注册成功', res)
        wx.showToast({
          title: '注册成功',
        })
        wx.navigateTo({
          url: '../login/login',
        })
      //   wx.switchTab({
      //     url: '../music/music',
      //   })
       },
      fail(res) {
        console.log('注册失败', res)
      }
    })
  }


})
