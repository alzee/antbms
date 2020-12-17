Page({
    data: {
        winWidth: 0,
        winHeight: 0,
        currentTab: 0,
    },
    onLoad: function() {
        getApp().request({}, 'getEquips');
        getApp().request({
            equid: '1581551721300008'
            //equid: getApp().globalData.equips[1].EQUCODE
        }, 'getParams');
    },
    formSubmit: function(e) {
        console.log(getApp().request({
            username: e.detail.value.Username,
            pass: e.detail.value.Pwd
        }, 'login'));
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
    }
})
