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
    toDetail: function (event) {
      const { currentTarget } = event;
      if (currentTarget.dataset.id) {
        wx.navigateTo({
          url: `/pages/detail/index?id=${currentTarget.dataset.id}`
        });
      }
    }
  },
  attached: function () {
    if (this.data.isAll) {
      wx.request({
        url: fetchGoodList,
        success: (res) => {
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
          const info = res.data.data;
          this.setData({
            goodInfoList: info
          });
        }
      });
    }

  },
});
