import React from "react";
import styles from "./index.less";
import { Image } from "@/pages/page/type/component/Image";
import CommonImage from "@/pages/page/edit/components/preview/components/commonImage";

interface Props {
  image: Image
}

const Index: React.FC<Props> = props => (
  <div className={styles.main}>
    <CommonImage src={props.image.imgUrl} />
  </div>
);

export default Index;
