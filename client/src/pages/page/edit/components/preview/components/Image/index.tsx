import React from "react";
import styles from "./index.less";
import { Image } from "@/pages/page/type/component/Image";
import { imgUrlBase } from "../../../../../../../../config/config";
import ReactIf from "@/components/ReactIf";

interface Props {
  image: Image
}

const Index: React.FC<Props> = props => (
  <div className={styles.main}>
    <ReactIf vIf={props.image.src}>
      <img src={`${imgUrlBase}/${props.image.src}`} />
    </ReactIf>

  </div>
);

export default Index;
