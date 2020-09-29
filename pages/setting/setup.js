import { setup } from '../../utils/setup';
var pages =  [
    [
        {title: '铁锂参数', value: '55', unit: '℃'},
        {title: '三元参数', value: '55', unit: '℃'},
        {title: '钛酸锂参数', value: '55', unit: '℃'},
        {title: '电池物理容量', value: '55', unit: '℃'},
        {title: '初始SOC', value: '55', unit: '℃'},
        {title: '连接串数', value: '55', unit: '℃'},
        {title: '总循环容量', value: '55', unit: '℃'},
    ],
    [
        {title: '单体过压保护', value: '55', unit: '℃'},
        {title: '单体过压恢复', value: '55', unit: '℃'},
        {title: '单体过压告警', value: '55', unit: '℃'},
        {title: '单体欠压告警', value: '55', unit: '℃'},
        {title: '单体欠压恢复', value: '55', unit: '℃'},
        {title: '单体欠压保护', value: '55', unit: '℃'},
        {title: '单体压差保护', value: '55', unit: '℃'},
        {title: '总压过压保护', value: '55', unit: '℃'},
        {title: '总压欠压保护', value: '55', unit: '℃'},
    ],
    [],
    [
        {title: '充电高温恢复', value: '55', unit: '℃'},
        {title: '放电高温保护', value: '55', unit: '℃'},
        {title: '放电高温恢复', value: '55', unit: '℃'},
        {title: '功率高温保护', value: '55', unit: '℃'},
        {title: '功率高温恢复', value: '55', unit: '℃'},
        {title: '充电低温保护', value: '55', unit: '℃'},
        {title: '充电低温恢复', value: '55', unit: '℃'},
        {title: '放电低温保护', value: '55', unit: '℃'},
        {title: '放电低温恢复', value: '55', unit: '℃'},
    ],
    [
        {title: '蓝牙地址', value: '55', unit: '℃'},
        {title: '自动关机电压', value: '55', unit: '℃'},
        {title: '电流传感量程', value: '55', unit: '℃'},
        {title: '系统基准电压', value: '55', unit: '℃'},
        {title: '功率启动电流', value: '55', unit: '℃'},
        {title: '自动待机时间', value: '55', unit: '℃'},
        {title: '总压调节参数', value: '55', unit: '℃'},
        {title: '静态消耗电流', value: '55', unit: '℃'},
        {title: '欠压内阻补偿', value: '55', unit: '℃'},
    ],
    [
        {title: '均衡开启电压', value: '55', unit: '℃'},
        {title: '均衡电流', value: '55', unit: '℃'},
        {title: '均衡极限电压', value: '55', unit: '℃'},
        {title: '均衡开启压差', value: '55', unit: '℃'},
    ],
    [
        {title: '100% SOC', value: '55', unit: '℃'},
        {title: '90% SOC', value: '55', unit: '℃'},
        {title: '80% SOC', value: '55', unit: '℃'},
        {title: '70% SOC', value: '55', unit: '℃'},
        {title: '60% SOC', value: '55', unit: '℃'},
        {title: '50% SOC', value: '55', unit: '℃'},
        {title: '40% SOC', value: '55', unit: '℃'},
        {title: '30% SOC', value: '55', unit: '℃'},
        {title: '20% SOC', value: '55', unit: '℃'},
    ],
    [
        {title: '连接内阻01', value: '55', unit: '℃'},
        {title: '连接内阻02', value: '55', unit: '℃'},
        {title: '连接内阻03', value: '55', unit: '℃'},
        {title: '连接内阻04', value: '55', unit: '℃'},
        {title: '连接内阻05', value: '55', unit: '℃'},
        {title: '连接内阻06', value: '55', unit: '℃'},
        {title: '连接内阻07', value: '55', unit: '℃'},
        {title: '连接内阻08', value: '55', unit: '℃'},
        {title: '连接内阻09', value: '55', unit: '℃'},
    ],
    [
        {title: '一周脉冲次数', value: '55', unit: '℃'},
        {title: '一周轮胎长度', value: '55', unit: '℃'},
    ],
]

Page({

    data: {
    },

    setup: setup,

    onLoad: function (options) {
        console.log(options);
        wx.setNavigationBarTitle({
            title: options.title
        });
        this.setData({
            list: pages[options.page],
        });
        //const eventChannel = this.getOpenerEventChannel();
        //var that = this;
        //eventChannel.on('acceptDataFromOpenerPage', function(data) {
        //    //console.log(data);
        //    wx.setNavigationBarTitle({
        //        title: data.title
        //    });
        //    that.setData({
        //        list: pages[data.page],
        //    });
        //})

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
