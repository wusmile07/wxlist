const app = getApp()

Page({
  data: {
    article: {},
    isEdit: false,
    objectId: null
  },
  onInputChange(e) {
    const {type} = e.currentTarget.dataset
    // this.data.itemVal = e.detail.value
    this.setData({
      [`article.${type}`]: e.detail.value
    })
  },
  onLoad: function (e) {
    const {objectId} = e
    const self = this
    self.setData({objectId})
    app.http({
      url: `/articles/${objectId}`
    }).then(res => {
      self.setData({
        article: res.data
      })
    })
  },
  onEdit() {
    console.log('3456789')
    if (this.data.isEdit) {
      // console.log(this.data.article)
      app.http({
        url: `/articles/${this.data.objectId}`,
        method: 'PUT',
        data: this.data.article
      }).then(res => {
        console.log(res)
      })

    } else {
      this.setData({
        isEdit: true
      })
    }
  }
})

