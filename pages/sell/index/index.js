// pages/sell/index/index.js
import {
  request
} from '../../../request.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    apiUrl:'',
    arrange: false,
    spList: [],
    spListOdd: [],
    spListEven: []
  },
  arrangeChange() {
    if (this.data.arrange == true) {
      this.setData({
        arrange: false
      })
    } else {
      this.setData({
        arrange: true
      })
    }
  },
  addSell() {
    wx.showActionSheet({
      itemList: ["发布闲置", "求购"],
      success: function (res) {
        // console.log(res.tapIndex)
        if (res.tapIndex == 0) {
          wx.redirectTo({
            url: '/pages/',
          })
        } else if (res.tapIndex == 1) {
          wx.redirectTo({
            url: '/pages/sell/',
          })
        }
      },
      fail: function () {}
    })
  },
  toSpDetail(e){
    wx.navigateTo({
      url: '/pages/sell/spDetail/spDetail?SPID='+e.currentTarget.dataset.spid,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      apiUrl:getApp().globalData.apiUrl
    })
    var that = this
    request({
      url: '/onSell?method=getSpList',
    }).then(res => {
      this.setData({
        spList: res.data
      })
      for (var i = 0; i < this.data.spList.length; i++) {
        if (i % 2 != 0) {
          this.data.spListEven.push(this.data.spList[i])
        } else {
          this.data.spListOdd.push(this.data.spList[i])
        }
      }
      this.setData({
        spListOdd: this.data.spListOdd,
        spListEven: this.data.spListEven
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