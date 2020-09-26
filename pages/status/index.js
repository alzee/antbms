// pages/dash/index.js
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
        var that = this;
        var Soc;
        wx.request({
            url: getApp().globalData.url + '/GetSingleEquipment',
            success(res){
                Soc = res.data.Data.Soc;
                that.animate('.circle-bar', [
                    {rotate: -225},
                    {rotate: -225 + (180 * Soc / 100)},
                ],800);

                var dy = {};
                for (var i in res.data.Data) {
                    if (i.indexOf('DY') == 0) {
                        var j = i.replace('DY', '');
                        dy[j] = res.data.Data[i];
                    }
                };
                res.data.Data.dy = dy;

                var wd = {};
                for (var i in res.data.Data) {
                    if (i.indexOf('Wd') == 0 && i != 'WdZb') wd[i] = res.data.Data[i];
                };
                res.data.Data.wd = wd;
                that.setData(res.data.Data);
                console.log(res.data.Data);
            }
        });
        
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
