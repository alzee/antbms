// pages/dash/index.js
String.prototype.toDDHHMMSS = function () {
    var sec_num = parseInt(this, 10); // don't forget the second param
    var days = Math.floor(sec_num / 3600 /24);
    var hours   = Math.floor((sec_num - (days * 24 * 3600)) / 3600);
    var minutes = Math.floor((sec_num - (days * 24 * 3600) - (hours * 3600)) / 60);
    var seconds = sec_num - (days * 24 * 3600) - (hours * 3600) - (minutes * 60);

    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    return days + '天'+ hours+'小时'+minutes+'分'+seconds+'秒';
}

Page({

    data: {
    },

    onLoad: function (options) {
    },
    onShow: function (options) {

    },

    onReady: function () {
        var d = getApp().globalData.params;

        var dy = [];
        for(var i in d.DyList[0]) {
            dy.push(d.DyList[0][i]);
        }
        d.dy = dy;
        d.wd = d.WdList[0];
        d.AllTimerMs = d.AllTimerMs.toDDHHMMSS();

        this.animate('.circle-bar', [
            {rotate: -225},
            {rotate: -225 + (180 * d.PackSoc / 100)},
        ],800);

        this.setData(d);
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
