// pages/control/index.js
Page({

    data: {
        charge: '充电开关',
        discharge: '放电开关',
        reboot: '重启系统',
        shutdown: '关闭系统',
        screen: '屏幕切换',
        balance: '自动均衡',
        zero: '电流归零',
    },

    onLoad: function (options) {

    },

    onReady: function () {

    },

    onShow: function () {

    },

    onHide: function () {

    },

    onUnload: function () {

    },

    onPullDownRefresh: function () {

    },

    onReachBottom: function () {

    },

    onShareAppMessage: function () {

    },

    controlAction: function(e) {
        var act = e.currentTarget.dataset.act;
        var actzh = e.currentTarget.dataset.actzh;
        console.log(e);
        //var actzh = act;
        switch (act) {
            case 'charge':
            case 'discharge':
                wx.showModal({
                    title: actzh,
                    content: '是否确定要进行"' + actzh + '"操作？',
                    icon: 'loading',
                    success(res){
                        if (res.confirm) {
                            wx.showToast({
                                icon: 'loading',
                            });
                            wx.request({
                                url: getApp().globalData._url + '/UserLogin',
                                data: {},
                                method: 'POST',
                                success: function(){
                                    wx.showToast({
                                        title: '"' + actzh + '"操作已完成',
                                        icon: 'none',
                                    });
                                }
                            });
                        }
                    }
                });
                break;
            default:
                wx.showToast({
                    icon: 'loading',
                });
                wx.request({
                    url: getApp().globalData._url + '/UserLogin',
                    data: {},
                    method: 'POST',
                    success: function(){
                        wx.showToast({
                            title: '"' + actzh + '"操作已完成',
                            icon: 'none',
                        });
                    }
                });
        }

    }
})
