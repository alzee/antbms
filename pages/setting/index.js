// pages/setting/index.js
Page({

    data: {
        list: [
            { page: '0', img: '/img/setting_icon1.png', title: '电芯特性'},
            { page: '1', img: '/img/setting_icon2.png', title: '保护参数'},
            { page: '2', img: '/img/setting_icon3.png', title: '告警参数'},
            { page: '3', img: '/img/setting_icon4.png', title: '温度保护'},
            { page: '4', img: '/img/setting_icon5.png', title: 'BMS硬件参数'},
            { page: '5', img: '/img/setting_icon6.png', title: '均衡控制'},
            { page: '6', img: '/img/setting_icon7.png', title: 'SOC静态表'},
            { page: '7', img: '/img/setting_icon8.png', title: '连接内阻'},
            { page: '8', img: '/img/setting_icon9.png', title: '霍尔测速'},
            { page: '9', img: '/img/setting_icon10.png', title: '系统'},
        ],
    },

    gotoPage: function(e) {
        var page = e.currentTarget.dataset.page;
        if (page == '9') {
            wx.navigateTo({
                url: 'sys',
            });
        } else {
            wx.navigateTo({
                url: 'setup',
                success: function(res) {
                    res.eventChannel.emit('acceptDataFromOpenerPage', { page: page })
                }
            });
        }
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

    }
})
