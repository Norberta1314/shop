import { fetchGoodList, getGoodListByIds } from '../../service/good';

Component({
  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定
    goods: {
      type: Object,
      value: {
        goodList: [],
        backgroundColor: '',
        isBorder: false,
        isBorderRadius: false
      },
    },
    isAll: {
      type: Boolean,
      value: false
    }
  },
  data: {
    // 这里是一些组件内部数据
    someData: {}
  },
  methods: {
    // 这里是一个自定义方法
    customMethod: function () {
    }
  },
  attached: function () {
    console.log('this is created', this);
    if (this.data.isAll) {
      wx.request({
        url: fetchGoodList,
        success: (res) => {
          console.log(res);
          const info = res.data.data;
          this.setData({
            goodInfoList: info
          });
        }
      });
    } else {
      wx.request({
        url: getGoodListByIds,
        method: 'POST',
        data: this.data.goods.goodList,
        success: (res) => {
          console.log(res);
          const info = res.data.data;
          this.setData({
            goodInfoList: info
          });
        }
      });
    }

  },
});
