// 同时发送异步代码的次数
let ajaxTimes = 0;
export const request = (params) => {
  ajaxTimes++;

  // 显示加载中 效果
  wx.showLoading({
    title: "加载中",
    mask: true
  });

  // 定义公共的url
  const baseUrl = getApp().globalData.apiUrl
  // const baseUrl = "http://172.20.10.13:8080/WEBPRO_18"
  // const baseUrl = "http://10.19.172.202:8080/WEBPRO_18"
  return new Promise((resolve, reject) => {
    wx.request({
      // ...params,
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: params.data,
      url: baseUrl + params.url,
      method: 'POST',
      success: (res) => {
        resolve(res);
      },
      fail: (err) => {
        reject(err);
      },
      complete: () => {
        ajaxTimes--;
        if (ajaxTimes === 0) {
          //  关闭正在等待的图标
          wx.hideLoading();
        }
      }
    });
  })
}