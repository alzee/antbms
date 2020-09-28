//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    lat: 32.649136,
    lon: 110.830931,
    //markers: [{
    //  //iconPath: "/resources/others.png",
    //  id: 0,
    //  latitude: 32.649136,
    //  longitude: 110.830931,
    //  width: 50,
    //  height: 50
    //}],
    polyline: [{
      points: [{
        longitude: 113.324520,
        latitude: 23.099994
      }, {
        longitude: 113.324520,
        latitude: 23.21229
      }],
      color:"#FF0000DD",
      width: 2,
      dottedLine: true
    }],
    controls: [{
      id: 1,
      //iconPath: '/resources/location.png',
      position: {
        left: 0,
        top: 300 - 50,
        width: 50,
        height: 50
      },
      clickable: true
    }]
  },
  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    console.log(e.detail.markerId)
  },
  controltap(e) {
    console.log(e.detail.controlId)
  }
})
