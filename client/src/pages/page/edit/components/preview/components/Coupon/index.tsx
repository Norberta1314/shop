import React from "react";
import styles from "./index.less";
import { Coupon } from "@/pages/page/type/component/Coupon";

interface Props {
  coupon: Coupon;
  backgroundColor: string;
}

const Index = ({coupon, backgroundColor}: Props) => (
  <div
    className={styles.main}
    style={{background: backgroundColor}}>
    <div
      className={styles.block}
      style={{
        background: coupon.couponBackgroundColor,
        color: coupon.fontSizeColor
      }}>
      <div className={styles.leftBlock}>
        <div className={styles.priceBlock}>
          <span className={styles.rmb}>¥</span>
          <span className={styles.price}>{coupon.price}</span>
        </div>
        <div
          className={styles.infoBlock}>
          <div className={styles.title}>{coupon.title}</div>
          <div className={styles.info}>{coupon.info}</div>
        </div>
      </div>
      <div
        className={styles.rightBlock}
        style={{borderColor: backgroundColor}}>
        <div className={styles.now}>立即领取</div>
        <div
          className={styles.has}
          style={{background: coupon.buttonColor}}> 已领66%
        </div>
      </div>
    </div>
  </div>
);

export default Index;
