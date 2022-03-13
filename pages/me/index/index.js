// pages/me/index/index.js
import {
  request
} from '../../../request.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nickName: " ",
    stuID: "",
    rowThirdList: [{
      icon: '/icon/me/member.png',
      title: '成为校园商城会员赢取豪礼',
      url: '/pages/me/memberCenter/menberCenter'
    }, {
      icon: '/icon/me/view.png',
      title: '我的积分',
      url: '/pages/me/viewHistory/viewHistory'
    }, {
      icon: '/icon/me/view.png',
      title: '历史浏览',
      url: '/pages/me/viewHistory/viewHistory'
    }, {
      icon: '/icon/me/rules.png',
      title: '信息发布规范',
      url: '/pages/me/rules/rules'
    }, {
      icon: '/icon/me/map.png',
      title: '查看校内地图',
      url: '/pages/me/map/map'
    }, {
      icon: '/icon/me/map.png',
      title: '我的社区',
      url: '/pages/me/map/map'
    }, {
      icon: '/icon/me/map.png',
      title: '意见反馈',
      url: '/pages/me/map/map'
    }
  ],
  },
  editUserInfo() {
    wx.redirectTo({
      url: '/pages/me/editUserInfo/editUserInfo',
    })
  },
  rowThirdListClick: function (e) {
    var url = e.currentTarget.dataset.url
    wx.navigateTo({
      url: url,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (wx.getStorageSync('stuID')) {
      this.setData({
        stuID: wx.getStorageSync('stuID')
      })
    } else {
      if (wx.getStorageSync('bindState')) {
        wx.redirectTo({
          url: '/pages/me/login/login',
        })
      } else {
        wx.redirectTo({
          url: '/pages/me/binding/binding',
        })
      }
    }

    if (wx.getStorageSync('nickName')) {
      this.setData({
        nickName: wx.getStorageSync('nickName')
      })
    } else {
      request({
        url: '/me?method=getNickName',
        data: {
          'stuID': this.data.stuID
        }
      }).then(res => {
        this.setData({
          nickName: res.data
        })
      })
    }
  },
  ToSelling() {
    wx.navigateTo({
      url: '/pages/me/selling/selling',
    })
  },
  ToSaleOut() {
    wx.redirectTo({
      url: '/pages/me/saleOut/saleOut',
    })
  },
  ToBuying() {
    wx.redirectTo({
      url: '/pages/me/buying/buying',
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