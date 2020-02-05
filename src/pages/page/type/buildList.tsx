import { PageComponentsType } from "@/pages/page/type/pageComponents";
import { createFromIconfontCN } from "@ant-design/icons/lib";
import React from "react";

const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_1627426_9a69kqqcmgw.js"
});

export const buildList = {
  baseList: [
    {
      type: PageComponentsType.Headline,
      title: "标题",
      icon: (<IconFont type="icon-headlines"/>),
    }, {
      type: PageComponentsType.Image,
      title: "图片",
      icon: (<IconFont type="icon-image"/>),
    }, {
      type: PageComponentsType.Carousel,
      title: "走马灯",
      icon: (<IconFont type="icon-carousel"/>),
    }, {
      type: PageComponentsType.ShowCase,
      title: "橱窗",
      icon: (<IconFont type="icon-showcase"/>),
    }, {
      type: PageComponentsType.Notification,
      title: "通知",
      icon: (<IconFont type="icon-notification"/>),
    }, {
      type: PageComponentsType.Nav,
      title: "导航",
      icon: (<IconFont type="icon-nav"/>),
    }, {
      type: PageComponentsType.Affix,
      title: "固钉",
      icon: (<IconFont type="icon-affix"/>)
    },
  ],
  marketList: [
    {
      type: PageComponentsType.Goods,
      title: "商品",
      icon: (<IconFont type="icon-goods"/>),
    }, {
      type: PageComponentsType.MemberCard,
      title: "会员卡",
      icon: (<IconFont type="icon-memberCard"/>),
    }, {
      type: PageComponentsType.Coupon,
      title: "优惠券",
      icon: (<IconFont type="icon-coupon"/>),
    }, {
      type: PageComponentsType.Evaluation,
      title: "评价",
      icon: (<IconFont type="icon-evaluation"/>)
    }
  ]
};
