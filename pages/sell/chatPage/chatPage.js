// pages/sell/chatPage/chatPage.js
import {
  request
} from '../../../request.js'
Page({
  data: {
    apiUrl: '',
    more: false,
    temp: [],
    blockList: [{
        name: '照片',
        icon: 'photo.png',
        operation: 'photo'
      },
      {
        name: '拍摄',
        icon: 'shooting.png',
        operation: 'shooting'
      },
      {
        name: '电话',
        icon: 'phone.png',
        operation: 'phone'
      },
      {
        name: '视频',
        icon: 'video.png'
      },
      {
        name: '见一见',
        icon: 'look.png'
      },
      {
        name: '转账',
        icon: 'money.png'
      },
    ]
  },
  checkTrad() {
    if (wx.checkIsSupportSoterAuthentication) {
      wx.checkIsSupportSoterAuthentication({
        success(res) {
        }
      })
    } else {
      console.log('bad zhiwen work')
    }
    wx.checkIsSoterEnrolledInDevice({
      checkAuthMode: 'fingerPrint',
      success(res) {
      }
    })
    wx.startSoterAuthentication({
      requestAuthModes: ['fingerPrint'],
      challenge: '123456',
      authContent: '请用指纹解锁',
      success(res) {
        wx.redirectTo({
          url: '/pages/sell/tradSuccess/tradSuccess',
        })
      }
    })
  },
  showMore() {
    this.setData({
      more: !this.data.more
    })
  },
  toOperation(e) {
    var method = e.currentTarget.dataset.method
    switch (method) {
      case 'photo':
        wx.chooseImage({
          count: 9,
          sourceType: ['album'],
        })
        break;
      case 'shooting':
        wx.chooseImage({
          count: 9,
          sourceType: ['camera'],
        })
        break;
      case 'phone':
        request({
          url: '/onSell?method=getChatPhone',
          data: {
            'stuID': this.data.temp[0].stuID
          }
        }).then(res => {
          wx.makePhoneCall({
            phoneNumber: res.data[0].phone,
          })
        })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      apiUrl: getApp().globalData.apiUrl
    })
    request({
      url: '/onSell?method=getChatDetail',
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