//index.js
//获取应用实例
import { findGoodById } from '../../service/good';
import { imgUrlBase } from '../../service/common';

const app = getApp();

Page({
  data: {
    good: {},
    imgUrl: ''
  },
  toSuccess: function () {
    wx.navigateTo({
      url: '/pages/success/index'
    });
  },
  onLoad: function () {
    wx.request({
      url: findGoodById(this.options.id),
      success: res => {
        const data = res.data.data;
        console.log(data, data.imgUrl);
        this.setData({
          good: data,
          imgUrl: `${imgUrlBase}/${data.imgUrl}`
        });
      }
    });
  }
});
