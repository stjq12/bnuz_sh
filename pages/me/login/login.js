// pages/me/login/login.js
import {
  request
} from '../../../request.js'
Page({
  data: {
    disabled:true,
    btnstate:"default",
    account:"",
    password:""
  },
  accountInput: function (e) {
    var content = e.detail.value;
    if (content != '') {
      this.setData({
        disabled: false,
        btnstate: "primary",
        account: content
      });
    } else {
      this.setData({
        disabled: true,
        btnstate: "default"
      });
    }
  },
  pwdBlur: function (e) {
    var password = e.detail.value;
    if (password != '') {
      this.setData({
        password: password
      });
    }
  },
  formSubmit: function (e) {
    var that = this;
    var log = e.detail.value.log;
    var pwd = e.detail.value.pwd;

    request({
        url: '/me?method=login',
        data: {
          'stuID' : log,
          'pwd' : pwd
        }
      })
      .then(res => {
        if (res.data.code == 200) {
          console.log('login successfully')
          wx.showToast({
            title: '登录成功',
            icon: 'success',
            duration: 2000,
          })
          wx.setStorageSync('stuID', log),
          wx.switchTab({
            url: '/pages/me/index/index',
          })
        } else {
          wx.showToast({
            title: '账号密码错误',
            icon: 'none',
            duration: 2000
          })
        }
      })
  },
  onLoad: function (options) {
    if(wx.getStorageSync('stuID')){
      wx.switchTab({
        url: '/pages/me/index/index',
      })
    }
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