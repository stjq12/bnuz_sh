// pages/ask/index/index.js
import {
  request
} from '../../../request.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    apiUrl:'',
    slideShowList:[
      {id:1,pic:'1.PNG'},{id:2,pic:'2.jpg'}
    ],
    row2List:[
      {id:1,name:'全球采购',pic:'global.png'},
      {id:2,name:'正品保证',pic:'real.png'},
      {id:3,name:'售后无忧',pic:'afterSale.png'},
      {id:4,name:'假一赔十',pic:'money.png'},
    ],
    row3List:[
      {id:1,title1:'限时抢购',title2:'SALE',color:'red',mes2:'限时限量 低价疯抢',pic1:'3.JPG',pic2:'4.JPG'},
      {id:2,title1:'潮流圈',title2:'New',color:'olive',mes2:'做潮流圈内人',pic1:'5.JPG',pic2:'6.JPG'},
      {id:1,title1:'福利社',title2:'自营',color:'cornflowerblue',mes2:'顶尖好货￥9.9',pic1:'7.JPG',pic2:'8.JPG'},
      {id:1,title1:'好物说',title2:'Hot',color:'orange',mes2:'达人爱用 新晋好物推荐',pic1:'9.JPG',pic2:'10.JPG'},
    ],
    spList: [],
    spListOdd: [],
    spListEven: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      apiUrl: getApp().globalData.apiUrl
    })
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