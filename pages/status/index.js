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

    /**
     * 页面的初始数据
     */
    data: {

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        //var that = this;
        //var Soc;
        //wx.request({
        //    url: getApp().globalData.url + '/GetSingleEquipment',
        //    success(res){
        //        Soc = res.data.Data.Soc;
        //        that.animate('.circle-bar', [
        //            {rotate: -225},
        //            {rotate: -225 + (180 * Soc / 100)},
        //        ],800);

        //        var dy = {};
        //        for (var i in res.data.Data) {
        //            if (i.indexOf('DY') == 0) {
        //                var j = i.replace('DY', '');
        //                dy[j] = res.data.Data[i];
        //            }
        //        };
        //        res.data.Data.dy = dy;

        //        var wd = {};
        //        for (var i in res.data.Data) {
        //            if (i.indexOf('Wd') == 0 && i != 'WdZb') wd[i] = res.data.Data[i];
        //        };
        //        res.data.Data.wd = wd;
        //        //getApp().globalData.data = res.data.Data;
        //        that.setData(res.data.Data);
        //    }
        //});
        
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
        var d = getApp().globalData.data;

        var dy = [];
        for(var i in d.DyList[0]) {
            dy.push(d.DyList[0][i]);
        }
        d.dy = dy;
        d.wd = d.WdList[0];
        d.AllTimerMs = d.AllTimerMs.toDDHHMMSS();

        d.PackSoc = 57; 
        this.animate('.circle-bar', [
            {rotate: -225},
            {rotate: -225 + (180 * d.PackSoc / 100)},
        ],800);
        
        this.setData(d);
        console.log(this.data);
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
