
Page({

  scanCode() {
    wx.scanCode({
      success (res) {
        console.log(res)
        wx.showModal({
          title: '提示',
          content: res.result
        })
      }
    })
  },
})
