import React from "react";
import styles from "./index.less";
import { ShowCase } from "@/pages/page/type/component/ShowCase";
import { imgUrlBase } from "../../../../../../../../config/config";
import ReactIf from "@/components/ReactIf";
import IconFont from "@/components/IconFont";

interface Props {
  showCase: ShowCase
}

const Index: React.FC<Props> = props => (
  <div className={styles.main}>
    {
      props.showCase.cells.map((cell) => (
        <div
          style={{
            marginLeft: cell.marginLeft,
            width: cell.width
          }}
          className={styles.cell}>
          <ReactIf vIf={cell.url}>
            <img src={`${imgUrlBase}/${cell.url}`} />
          </ReactIf>
          <ReactIf vIf={!cell.url}>
            <IconFont type="icon-nopic" />
          </ReactIf>
        </div>
      ))
    }
  </div>
);

export default Index;
