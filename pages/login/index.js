import CryptoJS from '../../utils/crypto-js/crypto-js.js'
const key = 'aI4tI6Cq';
const iv = 'aI4tI6Cq';
var appData = getApp().globalData;

function encryptByDES(message, key, iv) {
    var keyHex = CryptoJS.enc.Utf8.parse(key);
    var ivHex = CryptoJS.enc.Utf8.parse(iv);
    var encrypted = CryptoJS.DES.encrypt(message, keyHex, {
        iv: ivHex,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    }
    );
    return encrypted.ciphertext.toString();
}

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

    onReady: function() {
        var username = 'admin';
        var pass = '123456';
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
        var username = encryptByDES(username);
        var pass = encryptByDES(pass);
        var time = encryptByDES(time);
        console.log(username, pass, time);
        var data = '<?xml version="1.0" encoding="utf-8"?> <soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope"> <soap12:Body> <GetUserInfo_ xmlns="http://tempuri.org/"> <uid>string</uid> <pwd>string</pwd> </GetUserInfo_> </soap12:Body> </soap12:Envelope>';
        var data = '<?xml version="1.0" encoding="utf-8"?> <soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope"> <soap12:Body> <getWeatherbyCityName xmlns="http://WebXml.com.cn/"> <theCityName>上海</theCityName> </getWeatherbyCityName> </soap12:Body> </soap12:Envelope>';
        var data = '<?xml version="1.0" encoding="utf-8"?> <soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope"> <soap12:Body> <UserLogin xmlns="http://tempuri.org/"> <username>' + username + '</username> <password>' + pass + '</password> <time>' + time + '</time> </UserLogin> </soap12:Body> </soap12:Envelope>';
        wx.request({
            url: 'http://service2.winic.org/service.asmx',
            url: 'http://www.webxml.com.cn/WebServices/WeatherWebService.asmx',
            url: 'http://www.mayibms.com:8081/AntService.asmx',
            data: data,
            method: 'POST',
            header: {
                'Content-Type': 'application/soap+xml; charset=utf-8',
            },
            success(res){
                console.log(res.data);
            }
        });
    }
})
