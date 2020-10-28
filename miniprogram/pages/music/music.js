// pages/music/music.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    src:'/images/gaobai.mp3',
    name:'周杰伦',
    movie: [
      { url: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2604248949,3688293747&fm=26&gp=0.jpg' },
      { url: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3039128430,3810659344&fm=26&gp=0.jpg' },
      { url: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3477091606,3095069081&fm=26&gp=0.jpg' },
      { url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2545362103,4241181990&fm=26&gp=0.jpg' }
    ],
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.ct = wx.createAudioContext("myaudio")
  },
  audioplay(){
    this.ct.play()
    console.log('开始播了')
  },
  audiopause(){
    this.ct.pause()
    console.log('已暂停')
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