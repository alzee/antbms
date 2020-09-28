var appData = getApp().globalData;

Page({
    data: {
        winWidth: 0,
        winHeight: 0,
        currentTab: 0,
    },
    onLoad: function() {
        //wx.setStorageSync("sessionid", "sometoken");
        //console.log(wx.getStorageSync("sessionid"));
        //wx.clearStorage();
        if (wx.getStorageSync("sessionid")) {
            wx.switchTab({
                url: "../status/index"
            });
        }

        var that = this;

        wx.getSystemInfo( {

            success: function( res ) {
                that.setData( {
                    winWidth: res.windowWidth,
                    winHeight: res.windowHeight
                });
            }

        });
    },
    formSubmit: function(e) {
        console.log(e.detail.value);
        var date = new Date();
        var y = date.getFullYear();
        var m = date.getMonth()+1;
        var d = date.getDate();
        var h = date.getHours();
        var min = date.getMinutes();
        var s = date.getSeconds();
        m = m < 10 ? '0' + m : m;
        d = d < 10 ? '0' + d : d;
        h = h < 10 ? '0' + h : h;
        min = min < 10 ? '0' + min : min;
        s = s < 10 ? '0' + s : s;
        var time = y + '' + m + '' + d + '' + h + '' + min + '' + s;
        wx.request({
            url: appData.url + '/UserLogin',
            data: {
                Username: e.detail.value.Username,
                Pwd: e.detail.value.Pwd,
                Time: time,
            },
            header: { 'Content-Type': 'application/x-www-form-urlencoded'},
            method: "POST",
            success: (res) => {
                if (res && res.header && res.header['Set-Cookie']) {
                //if (1) {
                    wx.setStorageSync('sessionid', res.header['Set-Cookie']);
                    wx.showToast({
                        title: '成功',
                        icon: 'success',
                        duration: 2000
                    });
                    setTimeout(() => {
                        wx.switchTab({
                            url: "../status/index"
                        })
                    },500
                    );
                } else {
                    wx.showToast({
                        title: '账号或密码错误',
                        icon: 'none',
                        duration: 2000
                    });
                }
                console.log(res);
            },
        });
    },
      
    swichNav: function( e ) {

        var that = this;

        if( this.data.currentTab === e.target.dataset.current ) {
            return false;
        } else {
            that.setData( {
                currentTab: e.target.dataset.current
            })
        }
    },

    bindChange: function( e ) {

        var that = this;
        that.setData( { currentTab: e.detail.current });

    },
})
