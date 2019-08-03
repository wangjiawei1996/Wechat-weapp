var postsData = require('../../data/post-data')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      post_key: postsData.postList
    })
  },
  onPostTap: function(event) {
    var postId = event.currentTarget.dataset.postid;
    wx.navigateTo({
      url: './post-detail/post-detail?id=' + postId
    })
  },
  onSwiperTap: function(event) {
    var postId = event.target.dataset.postid;
    wx.navigateTo({
      url: './post-detail/post-detail?id=' + postId
    })
  }
})