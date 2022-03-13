// pages/me/selling/selling.js
import {
  request
} from '../../../request.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    apiUrl:'',
    spList:[
      {title:'转让双肩包，电脑包包重新未用',price:'100',ly:'9',ll:'129',bg:'1231',pic:'0003.JPG'},
      {title:'适马35 1.4art尼康口',price:'2700',ly:'10',ll:'129',bg:'1231',pic:'0004.JPG'},
      {title:'转让东西',price:'100',ly:'9',ll:'129',bg:'1231',pic:'0005.JPG'},
      {title:'转让新未用过，的东西',price:'100',ly:'9',ll:'129',bg:'1231',pic:'0006.JPG'},
      {title:'转让片是是在的东西',price:'100',ly:'9',ll:'129',bg:'1231',pic:'0007.JPG'},
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      apiUrl:getApp().globalData.apiUrl
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