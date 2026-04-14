Page({
  data: {
    result: null,
    radarData: null
  },

  onLoad() {
    const testResult = getApp().globalData.testResult;
    if (testResult) {
      this.setData({
        result: testResult.result,
        radarData: testResult.radarData
      });
    } else {
      wx.redirectTo({
        url: '/pages/index/index'
      });
    }
  },

  restartTest() {
    wx.reLaunch({
      url: '/pages/index/index'
    });
  }
});
