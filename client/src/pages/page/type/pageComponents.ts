import { Headline, newHeadline } from "@/pages/page/type/component/Headline";
import { Image, newImage } from "@/pages/page/type/component/Image";
import { Carousel, newCarousel } from "@/pages/page/type/component/Carousel";
import { ShowCase, newShowCase } from "@/pages/page/type/component/ShowCase";
import { Notification, newNotification } from "@/pages/page/type/component/Notification";
import { Nav, newNav } from "@/pages/page/type/component/Nav";
import { Affix, newAffix } from "@/pages/page/type/component/Affix";
import { Goods, newGoods } from "@/pages/page/type/component/Goods";
import { MemberCard, newMemberCard } from "@/pages/page/type/component/MemberCard";
import { Coupon, newCoupon } from "@/pages/page/type/component/Coupon";
import { Evaluation, newEvaluation } from "@/pages/page/type/component/Evaluation";

export enum PageComponentsType {
  // eslint-disable-next-line no-shadow
  Headline, Image, Carousel, ShowCase, Notification, Nav, Affix,
  // eslint-disable-next-line no-shadow
  Goods, MemberCard, Coupon, Evaluation,
}

export interface PageComponents {
  type: number;
  headline?: Headline;
  image?: Image;
  carousel?: Carousel;
  showCase?: ShowCase;
  notification?: Notification;
  nav?: Nav;
  affix?: Affix;
  goods?: Goods;
  memberCard?: MemberCard;
  coupon?: Coupon;
  evaluation?: Evaluation;
}

export const newPageComponents: (type: number) => (PageComponents | null) = (type: number) => {
  switch (type) {
    case PageComponentsType.Headline:
      return {
        type,
        headline: newHeadline
      };
    case PageComponentsType.Image:
      return {
        type,
        image: newImage
      };
    case PageComponentsType.Carousel:
      return {
        type,
        carousel: newCarousel
      };
    case PageComponentsType.ShowCase:
      return {
        type,
        showCase: newShowCase
      };
    case PageComponentsType.Notification:
      return {
        type,
        notification: newNotification
      };
    case PageComponentsType.Nav:
      return {
        type,
        nav: newNav
      };
    case PageComponentsType.Affix:
      return {
        type,
        affix: newAffix
      };
    case PageComponentsType.Goods:
      return {
        type,
        goods: newGoods
      };
    case PageComponentsType.MemberCard:
      return {
        type,
        memberCard: newMemberCard
      };
    case PageComponentsType.Coupon:
      return {
        type,
        coupon: newCoupon
      };
    case PageComponentsType.Evaluation:
      return {
        type,
        evaluation: newEvaluation
      };
    default:
      return null;
  }
};
