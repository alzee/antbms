// pages/chart/index.js
var wxCharts = require('../../utils/wxcharts-min.js');
var app = getApp();
var lineChart = null;
Page({
    data: {
    },
    touchHandler: function (e) {
        console.log(lineChart.getCurrentDataIndex(e));
        lineChart.showToolTip(e, {
            // background: '#7cb5ec',
            format: function (item, category) {
                return category + ' ' + item.name + ': ' + item.data 
            }
        });
    },    
    createSimulationData: function () {
        var categories = [];
        var data = [];
        for (var i = 0; i < 10; i++) {
            categories.push('20:0' + i);
            data.push(Math.random()*(20-10)+10);
        }
        // data[4] = null;
        return {
            categories: categories,
            data: data
        }
    },
    onLoad: function (e) {
        var windowWidth = 320;
        try {
            var res = wx.getSystemInfoSync();
            windowWidth = res.windowWidth;
        } catch (e) {
            console.error('getSystemInfoSync failed!');
        }
        
        var simulationData = this.createSimulationData();
        lineChart = new wxCharts({
            canvasId: 'lineCanvas',
            type: 'line',
            categories: simulationData.categories,
            animation: true,
            // background: '#f5f5f5',
            series: [{
                name: '总压',
                //data: simulationData.data,
                data: [4, 2, 3, 1, 2, 1, 3, 1, 0, 2],
                format: function (val, name) {
                    return val.toFixed(2);
                }
            }, {
                name: '最高电压',
                data: [2, 0, 0, 3, null, 4, 0, 0, 2, 0],
                format: function (val, name) {
                    return val.toFixed(2);
                }
            }, {
                name: '最低电压',
                data: [1, 2, 1, 0, 0, 5, 2, 1, 2, 5],
                format: function (val, name) {
                    return val.toFixed(2);
                }
            }, {
                name: '电流',
                data: [0.3, 0.5, 0.4, 0.2, 0.2, 0.3, -0.4, 0.2, -0.1, 0.3],
                format: function (val, name) {
                    return val.toFixed(2);
                }
            }],
            xAxis: {
                disableGrid: true
            },
            yAxis: {
                //title: '电压',
                format: function (val) {
                    return val.toFixed(2);
                },
                min: 0
            },
            width: windowWidth,
            height: 200,
            dataLabel: false,
            dataPointShape: true,
            extra: {
                lineStyle: 'curve'
            }
        });

        this.setData(app.globalData.data);
        var Soc = this.data.Soc;
        this.animate('.circle-bar', [
            {rotate: -225},
            {rotate: -225 + (180 * Soc / 100)},
        ],800);
        console.log(app.globalData.data);
    }
});
