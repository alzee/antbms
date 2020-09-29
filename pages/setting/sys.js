Page({

    data: {

    },

    gotoPage: function(e) {
        var page = e.currentTarget.dataset.page;
        wx.navigateTo({
            url: page
        });
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
