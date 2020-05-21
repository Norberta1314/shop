import React from "react";
import styles from "./index.less";
import { Nav, NavStyleMode } from "@/pages/page/type/component/Nav";
import ReactIf from "@/components/ReactIf";
import { imgUrlBase } from "../../../../../../../../config/config";
import IconFont from "@/components/IconFont";

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
            <ReactIf vIf={item.imgUrl}>
              <img src={`${imgUrlBase}/${item.imgUrl}`} />
            </ReactIf>
            <ReactIf vIf={!item.imgUrl}>
              <IconFont type="icon-nopic" />
            </ReactIf>
          </div>
        ))
      }
    </ReactIf>
  </div>
);

export default Index;
