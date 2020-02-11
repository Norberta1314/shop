import { Headline, newHeadline } from "@/pages/page/type/component/Headline";

export enum PageComponentsType {
  Headline, Image, Carousel, ShowCase, Notification, Nav, Affix,
  Goods, MemberCard, Coupon, Evaluation,
}

export interface PageComponents {
  type: number;
  headline?: Headline;
}

export const newPageComponents: (type: number) => (PageComponents | null) = (type: number) => {
  switch (type) {
    case PageComponentsType.Headline:
      return {
        type,
        headline: newHeadline
      };
    default:
      return null;
  }
};
