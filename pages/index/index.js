const app = getApp()
Page({
  data: {
    background: [
      "http://file02.16sucai.com/d/file/2015/0408/779334da99e40adb587d0ba715eca102.jpg",
      "http://file02.16sucai.com/d/file/2015/0128/8b0f093a8edea9f7e7458406f19098af.jpg",
      "http://g.hiphotos.baidu.com/zhidao/pic/item/c83d70cf3bc79f3d6e7bf85db8a1cd11738b29c0.jpg"
    ],
    list:[],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 2000,
    duration: 500,
    itemVal: ''
  },
  onShow() {
    const self = this
    app.http({
      url: '/articles',
    }).then((res) => {
      self.setData({
        list: res.data
      })
    })
  },
  getVal() {
    const self = this
    if (self.data.itemVal) {
      wx.showModal({
        title: '提示',
        content: this.data.itemVal,
        success (res) {
          if (res.confirm) {
            self.setData({
              itemVal: ''
            })
          }
        }
      })
    } else {
      wx.showToast({
        title: '不能为空！！！',
        icon: 'none',
        duration: 2000
      })
    }
  },
  onInputChange(e) {
    this.setData({
      itemVal: e.detail.value
    })
  }
})