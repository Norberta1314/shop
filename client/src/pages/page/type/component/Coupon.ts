export interface Coupon {
  price: number;
  title: string;
  info: string;
  couponBackgroundColor: string;
  backgroundColor: string;
  fontSizeColor: string;
  buttonColor: string;
}

export const newCoupon: Coupon = {
  price: 10,
  title: "优惠券标题",
  info: "优惠券额外信息",
  couponBackgroundColor: "#ff8d57",
  backgroundColor: "",
  fontSizeColor: "#ffffff",
  buttonColor: "#fc763b"
};
