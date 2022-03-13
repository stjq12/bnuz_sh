// pages/me/binding/binding.js
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
    var stuID = e.detail.value.log;
    var pwd = e.detail.value.pwd;
    var openid = wx.getStorageSync('openid');

    request({
        url: '/me?method=binding',
        data: {
          'stuID' : stuID,
          'pwd' : pwd,
          'openid' :openid
        }
      })
      .then(res => {
        if (res.data.code == 200) {
          // console.log(res.data.code + 'login success')
          wx.showToast({
            title: '绑定成功',
            icon: 'success',
            duration: 2000,
          })
          wx.setStorageSync('bindState', true)
          wx.redirectTo({
            url: '/pages/me/login/login',
          })
        } else {
          wx.showToast({
            title: '该微信号已被绑定',
            icon: 'none',
            duration: 2000
          })
        }
      })
  },
  onLoad: function (options) {
    wx.showModal({
      title: '提示',
      content: '请绑定您的真实学号以登入',
      showCancel: false,
    })
    if(wx.getStorageSync('bindState')){
      wx.redirectTo({
        url: '/pages/me/login/login',
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