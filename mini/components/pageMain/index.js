Component({
  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定
    page: {
      type: Object,
      value: {},
    }
  },
  data: {
    // 这里是一些组件内部数据
    pageComponents: {},
  },
  methods: {
    // 这里是一个自定义方法
    customMethod: function () {
    }
  },
  attached: function () {
    // console.log(this);
    // this.setData({
    //   pageComponents: JSON.parse(this.page.components)
    // });
  }
});
