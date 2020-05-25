import React from "react";
import styles from "./index.less";
import { ShowCase } from "@/pages/page/type/component/ShowCase";
import CommonImage from "@/pages/page/edit/components/preview/components/commonImage";

interface Props {
  showCase: ShowCase
}

const Index: React.FC<Props> = props => (
  <div className={styles.main}>
    {
      props.showCase.cells.map((cell, index) => (
        <div
          key={`${cell.imgUrl}-${index}`}
          style={{
            marginLeft: cell.marginLeft,
            width: cell.width
          }}
          className={styles.cell}>
          <CommonImage src={cell.imgUrl} />
        </div>
      ))
    }
  </div>
);

export default Index;
