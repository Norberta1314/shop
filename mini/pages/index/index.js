//index.js
//获取应用实例
import { pageList } from '../../service/page';

const app = getApp();

Page({
  data: {
    page: {}
  },
  onLoad: function () {
    wx.request({
      url: pageList,
      success: (res) => {
        const page = res.data.data;
        this.setData({
          page: {
            ...page,
            components: JSON.parse(page.components)
          }
        });
      }
    });
  },
  methods: {},
});
