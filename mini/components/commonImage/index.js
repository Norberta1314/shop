import { imgUrlBase } from '../../service/common';

Component({
  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定
    src: {
      type: String,
      value: '',
    },
    width: {
      type: String,
      value: '375px'
    },
    widthView: {
      type: Number,
      height: ''
    }
  },
  data: {
    // 这里是一些组件内部数据
    imgUrlBase: imgUrlBase,
    imgSrc: '',
  },
  attached: function () {
    const { imgUrlBase, src, width, widthView } = this.data;
    if (this.data.widthView) {
      this.setData({
        imgSrc: `${imgUrlBase}/${src}?imageView2/1/w/${widthView * 2}/h/${widthView * 2}`
      });
    } else {
      this.setData({
        imgSrc: `${imgUrlBase}/${src}`
      });
    }

  },
});
