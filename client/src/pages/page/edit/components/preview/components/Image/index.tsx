import React from "react";
import styles from "./index.less";
import { Image } from "@/pages/page/type/component/Image";
import CommonImage from "@/pages/page/edit/components/preview/components/commonImage";

interface Props {
  image: Image
}

declare type align = "left" | "center" | "right"

const alignOption: align[] = ["left", "center", "right"];

const Index: React.FC<Props> = props => (
  <div
    className={styles.main}
    style={{textAlign: alignOption[props.image.align]}}>
    <div
      style={{width: props.image.width || 375}}
      className={styles.warp}>
      <CommonImage src={props.image.imgUrl} />
    </div>
  </div>
);

export default Index;
