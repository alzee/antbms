export function setup(){
    console.log('click setup');
    wx.showToast({
        icon: 'loading',
    });
    wx.request({
        url: getApp().globalData._url + '/UserLogin',
        data: {},
        method: 'POST',
        success: function(){
            wx.showToast({
                title: '设置完成',
                icon: 'none',
            });
        }
    });
};
