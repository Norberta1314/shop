Component({
  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定
    nav: {
      type: Object,
      value: {},
    }
  },
  data: {
    // 这里是一些组件内部数据
    NavStyleMode: {
      char: 0,
      image: 1
    }
  },
  methods: {
    // 这里是一个自定义方法
    toDetail: function (event) {
      const {currentTarget} = event
      console.log(currentTarget.dataset)
      if (currentTarget.dataset.linkId) {
        wx.navigateTo({
          url: `/pages/page/index?id=${currentTarget.dataset.linkId}`
        });
      }
    }
  }
});
