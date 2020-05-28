import React from "react";
import styles from "./index.less";
import Divider from "@/pages/page/type/component/Divider";

interface Props {
  divider: Divider
}

const Index: React.FC<Props> = props => (
  <div
    className={styles.main}
    style={{
      height: props.divider.height,
      background: props.divider.backgroundColor
    }}/>
);

export default Index;
