import { PageComponentsType } from "@/pages/page/type/pageComponents";
import React from "react";
import IconFont from "@/components/IconFont";


export const buildList = {
  baseList: [
    {
      type: PageComponentsType.Headline,
      title: "标题",
      icon: (<IconFont type="icon-headlines" />),
    }, {
      type: PageComponentsType.Image,
      title: "图片",
      icon: (<IconFont type="icon-image" />),
    }, {
      type: PageComponentsType.Carousel,
      title: "走马灯",
      icon: (<IconFont type="icon-carousel" />),
    }, {
      type: PageComponentsType.ShowCase,
      title: "橱窗",
      icon: (<IconFont type="icon-showcase" />),
    }, {
      type: PageComponentsType.Notification,
      title: "通知",
      icon: (<IconFont type="icon-notification" />),
    }, {
      type: PageComponentsType.Nav,
      title: "导航",
      icon: (<IconFont type="icon-nav" />),
    },
    // {
    //   type: PageComponentsType.Affix,
    //   title: "固钉",
    //   icon: (<IconFont type="icon-affix" />)
    // },
  ],
  marketList: [
    {
      type: PageComponentsType.ShopHeader,
      title: "店头",
      icon: (<IconFont type="icon-evaluation" />)
    }, {
      type: PageComponentsType.Goods,
      title: "商品",
      icon: (<IconFont type="icon-goods" />),
    }, {
      type: PageComponentsType.MemberCard,
      title: "会员卡",
      icon: (<IconFont type="icon-memberCard" />),
    }, {
      type: PageComponentsType.Coupon,
      title: "优惠券",
      icon: (<IconFont type="icon-coupon" />),
    },
  ]
};
