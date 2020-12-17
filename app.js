//app.js
import CryptoJS from './utils/crypto-js/crypto-js.js'
const key = 'aI4tI6Cq';
const iv = 'aI4tI6Cq';

App({
  onLaunch: function () {
    var logs = wx.getStorageSync('logs') || [];
    logs.unshift(Date.now());
    wx.setStorageSync('logs', logs);

    //wx.clearStorageSync();
    var Token = wx.getStorageSync('Token');
    //console.log('Token is: ' + Token)
    if (Token !== '') {
        wx.switchTab({
        //wx.navigateTo({
            url: "../status/index"
        });
    }

    wx.login({
      success: res => {
      }
    })
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: res => {
              this.globalData.userInfo = res.userInfo

              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  onShow: function(){
        //this.request({}, 'getEquips');
        //this.request({
        //    equid: '1581551721300008'
        //}, 'getParams');
  },
  globalData: {
    userInfo: null,
    //url: "https://api.itove.com/antbms",
    //url: "http://mayibms.com:8081/AntService.asmx"
    url: "https://mayibms.com:88/AntService.asmx"
    //url: "https://mayibms.com/AntService.asmx"
  },
  encryptByDES: function (message, key, iv) {
    var keyHex = CryptoJS.enc.Utf8.parse(key);
    var ivHex = CryptoJS.enc.Utf8.parse(iv);
    var encrypted = CryptoJS.DES.encrypt(message, keyHex, {
        iv: ivHex,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    }
    );
    return encrypted.ciphertext.toString();
  },
  
    sha1_to_base64: function (sha1) {
    var digits = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    var base64_rep = "";
    var cnt = 0;
    var bit_arr = 0;
    var bit_num = 0;
    var ascv;
    for (var n = 0; n < sha1.length; ++n) {
        if (sha1[n] >= 'A' && sha1[n] <= 'Z') {
            ascv = sha1.charCodeAt(n) - 55;
        }
        else if (sha1[n] >= 'a' && sha1[n] <= 'z') {
            ascv = sha1.charCodeAt(n) - 87;
        }
        else {
            ascv = sha1.charCodeAt(n) - 48;
        }
        bit_arr = (bit_arr << 4) | ascv;
        bit_num += 4;
        if (bit_num >= 6) {
            bit_num -= 6;
            base64_rep += digits[bit_arr >>> bit_num];
            bit_arr &= ~(-1 << bit_num);
        }
    }
    if (bit_num > 0) {
        bit_arr <<= 6 - bit_num;
        base64_rep += digits[bit_arr];
    }
    var padding = base64_rep.length % 4;
    if (padding > 0) {
        for (var n = 0; n < 4 - padding; ++n) {
            base64_rep += "=";
        }
    }
    return base64_rep;
},
    request: function(args, action) {
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
        var Searchtime = '';
        var time = y + '' + m + '' + d + '' + h + '' + min + '' + s;
        time = this.sha1_to_base64(this.encryptByDES(time, key, iv));
        var UserId = wx.getStorageSync('UserId');
        UserId = this.sha1_to_base64(this.encryptByDES(UserId, key, iv));
        var Token = wx.getStorageSync('Token');
        var data;

        switch(action){
            case 'login':
                // UserLogin
                var username = args.username;
                var pass = args.pass;
                username = this.sha1_to_base64(this.encryptByDES(username, key, iv));
                pass = this.sha1_to_base64(this.encryptByDES(pass, key, iv));
                data = '<?xml version="1.0" encoding="utf-8"?> <soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope"> <soap12:Body> <UserLogin xmlns="http://tempuri.org/"> <username>' + username + '</username> <password>' + pass + '</password> <time>' + time + '</time> </UserLogin> </soap12:Body> </soap12:Envelope>';
                break;
            case 'getParams':
                var Equid = this.sha1_to_base64(this.encryptByDES(args.equid, key, iv));
                // GetEquipmentDetils
                //data = '<?xml version="1.0" encoding="utf-8"?> <soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope"> <soap12:Body> <GetEquipmentDetils xmlns="http://tempuri.org/"> <userid>'+ UserId +'</userid> <equid>'+ Equid +'</equid> <searchtime>'+ Searchtime +'</searchtime> <time>'+ time +'</time> <token>'+ Token +'</token> </GetEquipmentDetils> </soap12:Body> </soap12:Envelope>';
                // GetSingleEquipment
                data = '<?xml version="1.0" encoding="utf-8"?> <soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope"> <soap12:Body> <GetSingleEquipment xmlns="http://tempuri.org/"> <userid>'+ UserId +'</userid> <equid>'+ Equid +'</equid> <time>' + time + '</time> <token>' + Token + '</token> </GetSingleEquipment> </soap12:Body> </soap12:Envelope>';
                break;
            case 'getEquips':
                // GetUserEuipment
                data = '<?xml version="1.0" encoding="utf-8"?> <soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope"> <soap12:Body> <GetUserEuipment xmlns="http://tempuri.org/"> <userid>'+ UserId +'</userid> <equcode></equcode> <pageindex>1</pageindex> <pagesize>5</pagesize> <time>'+ time +'</time> <token>'+ Token+'</token> </GetUserEuipment> </soap12:Body> </soap12:Envelope>';
                break;

        }
        var that = this;
        wx.request({
            url: this.globalData.url,
            data: data,
            method: 'POST',
            header: {
                'Content-Type': 'application/soap+xml; charset=utf-8',
            },
            success(res){
                var d = res.data.match(/{(.*)}/g)[0];   // Extact json from xml
                // Remove quotes in Data: "{..}" and Data: "[...]"
                d = d.replace('"{', '{'); 
                d = d.replace('}"', '}'); 
                d = d.replace('"[', '['); 
                d = d.replace(']"', ']'); 
                d = d.replace(/\\/g, '');   // Remove \
                d = JSON.parse(d);
                //console.log(d.Data);
                //console.log(d);
                switch(action){
                    case 'getParams':
                        that.globalData.params = d.Data;
                        break;
                    case 'getEquips':
                        that.globalData.equips = d.Data;
                        break;
                    case 'login':
                        //if (1) {
                        if (d.Code === '0') {
                            wx.setStorageSync('Token', d.Token);
                            wx.setStorageSync('UserId', d.Data.UserId);
                            wx.setStorageSync('RoleId', d.Data.RoleId);

                            getApp().request({}, 'getEquips');
                            getApp().request({
                                equid: '1581551721300008'
                                //equid: getApp().globalData.equips[1].EQUCODE
                            }, 'getParams');

                            wx.showToast({
                                title: '成功',
                                icon: 'success',
                                duration: 2000,
                                success: () => {
                                    wx.switchTab({
                                        url: "../status/index"
                                    })
                                }
                            });
                            //setTimeout(() => {
                            //    wx.switchTab({
                            //        url: "../status/index"
                            //    })
                            //},500
                            //);
                        } else {
                            wx.showToast({
                                title: '账号或密码错误',
                                icon: 'none',
                                duration: 2000
                            });
                        }
                        break;
                }
            },
            fail(res){
                console.log(res);
                wx.showToast({
                    title: 'failed',
                    icon: 'none',
                    duration: 2000
                });
            }
        });
        return this.globalData;
    }
})
