// pages/sell/spDetail/spDetail.js
import {
  request
} from '../../../request.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    apiUrl:'',
    temp: [],
    operateBtn:[
      {name:'点赞',src:'like.png'},
      {name:'留言',src:'chat.png'},
      {name:'收藏',src:'favourite.png'},
    ],
  },
  toChat(e){
    wx.navigateTo({
      url: '/pages/sell/chatPage/chatPage?SPID='+e.currentTarget.dataset.spid,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      apiUrl:getApp().globalData.apiUrl
    })
    request({
      url: '/onSell?method=getSpDetail',
      data: {
        'SPID': options.SPID
      }
    }).then(res => {
      this.setData({
        temp: res.data,
      })
    })
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