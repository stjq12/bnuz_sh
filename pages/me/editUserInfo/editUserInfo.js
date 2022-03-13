// pages/me/editUserInfo/editUserInfo.js
import {
  request
} from '../../../request.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    rowListFirst: [{
      id: '0',
      title: '昵称',
      name: 'nickName',
      ifInput: true,
      data: '未设置'
    }, {
      id: '1',
      title: '真实姓名',
      name: 'realName',
      ifInput: true,
      data: '未设置'
    }, {
      id: '2',
      title: '学院',
      name: 'academy',
      ifInput: false,
      pickerMode: "selector",
      array: [
        '未设置', '信息技术学院', '国际商学院', '文学院'
      ],
      index: 0,
      data: ''
    }, {
      id: '3',
      title: '专业',
      name: 'major',
      ifInput: false,
      pickerMode: "selector",
      array: [
        '未设置'
      ],
      index: 0,
      data: ''
    }, {
      id: '4',
      title: '自我介绍',
      name: 'introduction',
      ifInput: true,
      data: '未设置'
    }, {
      id: '5',
      title: '性别',
      name: 'sex',
      ifInput: false,
      pickerMode: "selector",
      array: [
        '未设置', '男', '女'
      ],
      index: 0,
      data: ''
    }, {
      id: '6',
      title: '生日',
      name: 'birthday',
      ifInput: false,
      pickerMode: "date",
      data: '未设置'
    }],

    addressList: [
      ['未设置', '海华苑', '燕华苑', '京华苑', '粤华苑'],
      ['未设置']
    ],
    addressIndex: [0, 0],

    academyData: '未设置',
    majorData: '未设置',
    sexData: '未设置',
    addressData: '未设置',
    phone: '未设置'
  },
  inputChange: function (e) {
    var type = e.currentTarget.dataset.type
    if (type == "nickName") {
      var data = 'rowListFirst[' + 0 + '].data'
      this.setData({
        [data]: e.detail.value
      })
    } else if (type == "realName") {
      var data = 'rowListFirst[' + 1 + '].data'
      this.setData({
        [data]: e.detail.value
      })
    } else if (type == "introduction") {
      var data = 'rowListFirst[' + 4 + '].data'
      this.setData({
        [data]: e.detail.value
      })
    } else if (type == "phone") {
      this.setData({
        phone: e.detail.value
      })
    }
  },
  academyChange: function (e) {
    var index = 'rowListFirst[' + 2 + '].index'
    var data = 'rowListFirst[' + 2 + '].data'
    this.setData({
      [index]: e.detail.value
    })
    var array = this.data.rowListFirst[2].array
    var i = this.data.rowListFirst[2].index
    var value = array[i]
    this.setData({
      [data]: value,
      academyData:value
    })

    var changeMajor = 'rowListFirst[' + 3 + '].array'
    var chooseValue = parseInt(e.detail.value)
    switch (chooseValue) {
      case 0:
        this.setData({
          [changeMajor]: ['未设置']
        })
        break;
      case 1:
        this.setData({
          [changeMajor]: ['数字媒体技术', '计算机科学与技术', '软件工程']
        })
        break;
      case 2:
        this.setData({
          [changeMajor]: ['会计学', '国际金融与贸易']
        })
        break;
      case 3:
        this.setData({
          [changeMajor]: ['汉语言文学']
        })
        break;
    }
    var defalutChangeMajor = 'rowListFirst[' + 3 + '].data'
    this.setData({
      [defalutChangeMajor]: this.data.rowListFirst[3].array[0],
      majorData: this.data.rowListFirst[3].array[0],
    })
  },
  majorChange: function (e) {
    var index = 'rowListFirst[' + 3 + '].index'
    var data = 'rowListFirst[' + 3 + '].data'
    this.setData({
      [index]: e.detail.value
    })
    var array = this.data.rowListFirst[3].array
    var i = this.data.rowListFirst[3].index
    var value = array[i]
    this.setData({
      [data]: value,
      majorData: value
    })
  },
  sexChange: function (e) {
    var index = 'rowListFirst[' + 5 + '].index'
    var data = 'rowListFirst[' + 5 + '].data'
    this.setData({
      [index]: e.detail.value
    })
    var array = this.data.rowListFirst[5].array
    var i = this.data.rowListFirst[5].index
    var value = array[i]
    this.setData({
      [data]: value,
      sexData: value
    })
  },
  birChange: function (e) {
    var data = 'rowListFirst[' + 6 + '].data'
    this.setData({
      [data]: e.detail.value
    })
  },
  areaChange: function (e) {
    var data = {
      addressList: this.data.addressList,
      addressIndex: this.data.addressIndex
    };
    var addressList = 'addressList[' + 1 + ']'
    if (e.detail.column == 0) {
      switch (e.detail.value) {
        case 0:
          this.setData({
            [addressList]: ['未设置']
          })
          break;
        case 1:
          this.setData({
            [addressList]: ['海华1栋', '海华2栋', '海华3栋', '海华6栋', '海华7栋', '海华8栋', '海华9栋', '海华10栋', '海华11栋', '海华12栋', '海华13栋', '海华14栋', '海华15栋']
          })
          break;

        case 2:
          this.setData({
            [addressList]: ['燕华1栋', '燕华2栋', '燕华3栋', '燕华6栋', '燕华7栋', '燕华8栋']
          })
          break;

        case 3:
          this.setData({
            [addressList]: ['京华1栋', '京华2栋', '京华3栋', '京华6栋', '京华7栋', '京华8栋']
          })
          break;

        case 4:
          this.setData({
            [addressList]: ['粤华1栋', '粤华2栋', '粤华3栋', '粤华4栋', '粤华5栋', '粤华6栋', '粤华7栋', '粤华8栋', '粤华9栋', '粤华10栋', '粤华11栋', '粤华12栋', '粤华13栋', '粤华14栋', '粤华15栋', '粤华16栋', '粤华17栋', '粤华18栋', '粤华19栋', '粤华20栋', '粤华21栋', '粤华22栋']
          })
          break;
      }
      data.addressIndex[0] = e.detail.value;
    } else {
      data.addressIndex[1] = e.detail.value;
    }
    this.setData(data);
    this.setData({
      addressData: this.data.addressList[1][this.data.addressIndex[1]]
    })
  },
  // addressChange
  saveUserInfo() {
    var stuID = wx.getStorageSync('stuID')

    var nickName = this.data.rowListFirst[0].data
    var realName = this.data.rowListFirst[1].data
    var academy = this.data.academyData
    var major = this.data.majorData
    var introduction = this.data.rowListFirst[4].data
    var sex = this.data.sexData
    var birth = this.data.rowListFirst[6].data
    var address = this.data.addressList[1][this.data.addressIndex[1]]
    var phone = this.data.phone

    request({
      url: '/me?method=saveUserInfo',
      data: {
        'stuID': stuID,
        'nickName': nickName,
        'realName': realName,
        'academy': academy,
        'major': major,
        'introduction': introduction,
        'sex': sex,
        'birth': birth,
        'address': address,
        'phone': phone
      }
    }).then(res => {
      if (res.data.code == 200) {
        wx.showToast({
          title: '保存成功',
          icon: 'success',
          duration: 2000
        })
        wx.switchTab({
          url: '/pages/me/index/index',
        })
      } else {
        wx.showToast({
          title: '保存失败',
          icon: 'none',
          duration: 2000
        })
      }
    })
    wx.setStorageSync('nickName', nickName)
  },
  doNotSave() {
    wx.switchTab({
      url: '/pages/me/index/index',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    request({
      url: '/me?method=getUserInfo',
      data: {
        'stuID': wx.getStorageSync('stuID')
      }
    }).then(res => {
      // console.log(res.data[0].birth)
      var nickName = 'rowListFirst[' + 0 + '].data'
      var realName = 'rowListFirst[' + 1 + '].data'
      var academy = 'rowListFirst[' + 2 + '].data'
      var major = 'rowListFirst[' + 3 + '].data'
      var introduction = 'rowListFirst[' + 4 + '].data'
      var sex = 'rowListFirst[' + 5 + '].data'
      var birth = 'rowListFirst[' + 6 + '].data'

      this.setData({
        [nickName]: res.data[0].nickName,
        [realName]: res.data[0].realName,
        academyData: res.data[0].academy,
        majorData: res.data[0].major,
        [introduction]: res.data[0].introduction,
        sexData: res.data[0].sex,
        [birth]: res.data[0].birth,
        addressData: res.data[0].address,
        phone: res.data[0].phone
      })
      wx.setStorageSync('nickName', res.data[0].nickName)
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