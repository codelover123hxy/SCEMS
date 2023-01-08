// pages/personal-center/personal-center.js
const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'




Page({

  /**
   * 页面的初始数据
   */
  data: {
    avatarUrl: defaultAvatarUrl,
    functionList:['修改密码','查看综测详情','建议箱'],
    grade:'',
    college:''
  },
  onChooseAvatar(e) {
    const { avatarUrl } = e.detail 
    this.setData({
      avatarUrl,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  
  onLoad(options) {
    var app = getApp();
    this.setData({
      grade:app.globalData.student.grade,
      college:app.globalData.student.profession,
    })
  },
  navigate(e){
    let index=Number(e.target.dataset.index);
    if (index==0){
      wx.navigateTo({
        url: '../change-password/change-password',
      })
    }
    else if (index==1){
      wx.navigateTo({
        url: '../details/details',
      })
    }
    else if (index==2){
      wx.navigateTo({
        url: '../suggestion-box/suggestion-box',
      })
    }     
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