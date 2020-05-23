import React from "react";
import styles from "./index.less";
import { Nav, NavStyleMode } from "@/pages/page/type/component/Nav";
import ReactIf from "@/components/ReactIf";
import CommonImage from "@/pages/page/edit/components/preview/components/commonImage";

interface Props {
  nav: Nav
}

const Index: React.FC<Props> = props => (
  <div className={styles.main}>
    <ReactIf vIf={props.nav.styleMode === NavStyleMode.char}>
      {
        props.nav.cells.map((item) => (
          <div
            key={item.text}
            className={styles.cell}>nav</div>
        ))
      }
    </ReactIf>
    <ReactIf vIf={props.nav.styleMode === NavStyleMode.image}>
      {
        props.nav.cells.map((item) => (
          <div
            key={item.imgUrl}
            className={styles.cell}>
            <CommonImage src={item.imgUrl} />
          </div>
        ))
      }
    </ReactIf>
  </div>
);

export default Index;
