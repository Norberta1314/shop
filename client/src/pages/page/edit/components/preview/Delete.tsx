import React, { useState } from "react";
import styles from "./index.less";
import { Dispatch } from "redux";
import { connect } from "dva";
import { namespace } from "@/pages/page/edit/ModelType";
import ReactIf from "@/components/ReactIf";

interface Prop {
  dragStart: number | null;
  dispatch?: Dispatch<any>;
}

const Index: React.FC<Prop> = (props) => {
  const {dispatch} = props;
  const [stay, setStay] = useState<boolean>(false);

  function handleDragEnter(e: React.DragEvent<HTMLDivElement>) {
    console.log("handle drag enter");
    setStay(true);
    if (dispatch) {
      dispatch({
        type: `${namespace}/deleteComponent`
      });
    }
  }

  function handleDragLeave(e: React.DragEvent<HTMLDivElement>) {
    console.log("handle drag leave");
    setStay(false);
  }

  return (
    <div
      className={styles.deleteWarp}
      draggable="true"
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}>
      <ReactIf vIf={stay}>
        <span className={`${styles.deleteIcon} ${styles.deleteIcon_hover}`} />
      </ReactIf>
      <ReactIf vIf={!stay}>
        <span className={styles.deleteIcon} />
      </ReactIf>

    </div>
  );
};

export default connect()(Index);
