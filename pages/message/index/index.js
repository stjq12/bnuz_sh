// pages/message/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    apiUrl: '',
    tapIndex: 1,
    mesList: [{
        id: 0,
        nickName: 'DEE',
        mesLast: '你好，50出吗',
        time: '昨天',
        headPhoto: '1.JPG',
        srcPhoto: '0007.JPG'
      },
      {
        id: 1,
        nickName: '城爷',
        mesLast: '9999这个是最低价不能再低了',
        time: '一个月前',
        headPhoto: '2.JPG',
        srcPhoto: '0003.JPG'
      },
      {
        id: 2,
        nickName: '小老板',
        mesLast: '你好，我是学生塞200',
        time: '三天前',
        headPhoto: '3.JPG',
        srcPhoto: '0004.JPG'
      },
      {
        id: 3,
        nickName: '城爷',
        mesLast: '66这个是最低价不能再低了',
        time: '一个月前',
        headPhoto: '4.JPG',
        srcPhoto: '0005.JPG'
      },
      {
        id: 4,
        nickName: '城爷',
        mesLast: '不能再低了',
        time: '一个月前',
        headPhoto: '4.JPG',
        srcPhoto: '0006.JPG'
      },
      {
        id: 5,
        nickName: '城爷',
        mesLast: 'hhh不能再低了',
        time: '一个月前',
        headPhoto: '4.JPG',
        srcPhoto: '0006.JPG'
      },
    ],
    noList: [{
        id: 1,
        time: '2020年12月18日 12:00',
        t1: '闲置网络生态治理专项行动公告（十四）',
        t2: '12月9日-12月15日整治公示【点此查看】',
        srcPhoto: '/image/noPhoto.jpg'
      },
      {
        id: 2,
        time: '2020年11月18日 12:00',
        t1: '商品违规处罚通知',
        t2: '您收到了一条处罚【点此查看】',
        srcPhoto: '/image/noErr.jpg'
      },
      {
        id: 3,
        time: '2020年9月22日 13:00',
        t1: '闲置网络生态治理专项行动公告（十二）',
        t2: '12月9日-12月15日整治公示【点此查看】',
        srcPhoto: '/image/noPhoto.jpg'
      }
    ]
  },
  changeTap(e) {
    if(e.currentTarget.dataset.index != this.data.tapIndex){
      this.setData({
        tapIndex: e.currentTarget.dataset.index
      })
    }
  },
  slipTap(e){
    this.setData({
      tapIndex: e.detail.current
    })
  },
  delMes(e) {
    this.data.mesList.splice(e.currentTarget.dataset.mesindex, 1)
    this.setData({
      mesList: this.data.mesList
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      apiUrl: getApp().globalData.apiUrl
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