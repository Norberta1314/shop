import React from "react";
import styles from "./index.less";
import { Coupon } from "@/pages/page/type/component/Coupon";

interface Props {
  coupon?: Coupon
}

interface Type extends React.FC<Props> {

}

const Index: Type = props => (
  <div className={styles.main}> coupon</div>
);

export default Index;
