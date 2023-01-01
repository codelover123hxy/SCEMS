// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    wx.login({
      success(res){
        if(res.code!=''){
          wx.request({
            url: '',
            method:'GET',
            header:{
              'content-type':'application/json',
              'Cookie':wx.getStorageSync('cookiekey')
            },
            success:(r) =>{
              var code=r.data.code
              if (code==200){
                console.log("登录成功")
                wx.showToast({
                  title: '登录成功',
                })
                wx.setStorageSync('cookieKey', r.header["Set-Cookie"])
              }
              else{
                console.log("登陆失败");
              }
            }
            
          })
          console.log("登录失败");
          wx.navigateTo({
            url: '../login/login',
          })
        }
     
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {
   
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})