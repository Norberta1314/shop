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
        console.log(res);
        // wx.setBackgroundColor({
        //   backgroundColor: '#ff00ff',
        //   fail: () => {
        //     console.log('this is fail');
        //   },
        //   success: () => {
        //     console.log('this is success');
        //   },
        //   complete: (res) => {
        //     console.log(res);
        //   },
        //
        // });
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
  onReady: () => {
    // setTimeout(() => {
    //   wx.setBackgroundColor({
    //     backgroundColor: '#ff00ff',
    //     fail: () => {
    //       console.log('this is fail');
    //     },
    //     success: () => {
    //       console.log('this is success');
    //     },
    //     complete: (res) => {
    //       console.log(res);
    //     },
    //
    //   });
    // }, 1000);

  }
});
