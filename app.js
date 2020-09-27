//app.js
App({
  onLaunch: function () {
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    wx.login({
      success: res => {
          if (res.code) {
              wx.request({
                  url: 'https://api.itove.com/antbms/UserLogin',
                  data: {
                      code: res.code
                  },
                  success (res) {
                      console.log(res.data.Data);
                  }
              })
          }
      }
    })
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: res => {
              this.globalData.userInfo = res.userInfo

              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    url: "https://api.itove.com/antbms",
    //url: "http://www.mayibms.com:8081/AntService.asmx"
  }
})
