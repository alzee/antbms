// pages/setting/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        list: [
            { num: '1', img: '/img/setting_icon1.png', title: '电芯特性'},
            { num: '2', img: '/img/setting_icon2.png', title: '保护参数'},
            { num: '3', img: '/img/setting_icon3.png', title: '告警参数'},
            { num: '4', img: '/img/setting_icon4.png', title: '温度保护'},
            { num: '5', img: '/img/setting_icon5.png', title: 'BMS硬件参数'},
            { num: '6', img: '/img/setting_icon6.png', title: '均衡控制'},
            { num: '7', img: '/img/setting_icon7.png', title: 'SOC静态表'},
            { num: '8', img: '/img/setting_icon8.png', title: '连接内阻'},
            { num: '9', img: '/img/setting_icon9.png', title: '霍尔测速'},
            { num: '10', img: '/img/setting_icon10.png', title: '系统'},
        ],
    },

    gotoPage: function(e) {
        var page = e.currentTarget.dataset.page;
        wx.navigateTo({
            url: page
        });
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

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
