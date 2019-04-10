var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置

Page({
  data: {
    showTopTips: false,
    tabs: ["产品简介", "在线购买", "订单查询提卡"],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,
    kucunValue:''
  },
  onLoad: function () {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });
      }
    })
    this.setData({
      kucunValue: '333'
    })
    wx.request({
      url: 'https://www.izhaolei.com/bitqiu/info.json?goodId=1', // 仅为示例，并非真实的接口地址
      data: {
        x: '',
        y: ''
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data)
      }
    });
    wx.setNavigationBarTitle({
      title: '比特球优惠券'
    });
  },
  tabClick: function (e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  },
  handleClick:  function (e)  {   
    this.triggerEvent('navbarevent')
  },
  formSubmit(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
  }
});