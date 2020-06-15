//index.js
//获取应用实例
import { pageById } from '../../service/page';

const app = getApp();

Page({
  data: {
    page: {}
  },
  onLoad: function () {
    wx.request({
      url: pageById(this.options.id),
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
