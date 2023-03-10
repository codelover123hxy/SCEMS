// pages/login/login.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    identity:'',   // 标注学生或辅导员
    username:'',
    password:'',
    userInfo:'',
    student:{
      grade:'',
      profession:''
    }
  },
  getUserInfo:function (){
    wx.getUserProfile({
      desc: '用于完善个人信息',
      success:(res)=>{
        console.log(res.userInfo);
        this.setData({
          userInfo:res.userInfo
        })
      }
    })
  },
  login(){
    let username=this.data.username;
    let pwd=this.data.password;
    let identity=this.data.identity;
  
    if (identity==''){
      wx.showToast({
        title: '请选择身份',
        icon:'error'
      })
    }
    else if(identity=="学生") {
      let obj={};
      const app = getApp();
      obj.grade=username.substring(0,4);
      obj.profession="计算机";
      this.setData({
        student:obj
      })
      app.globalData.student=obj;
      console.log(app.globalData.student)
      wx.request({
        url: 'url',
        method:'POST',
        success:(res)=>{

        },
        complete:()=>{
          this.getUserInfo();
          wx.switchTab({
            url: '../index/index',
          })
        }
      })
    }
    else if(identity=="辅导员"){
      wx.request({
        url: 'url',
        method:'POST',
        success:(res)=>{

        },
        complete:()=>{
          this.getUserInfo();
          wx.switchTab({
            url: '../index/index',
          })
        }
      })
    }
  },

//  双向绑定
  inputUsername(e){
    var name=e.detail.value;
    this.setData({
      username:name
    })
  },

  inputPwd(e){
    var pwd=e.detail.value;
    this.setData({
      password:pwd
    })
  },

  radioChange(e){
    var identity=e.detail.value;
    this.setData({
      identity:identity
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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