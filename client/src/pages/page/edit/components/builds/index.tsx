import React from "react";
import { Radio } from "antd";
import { connect } from "dva";
import { RadioChangeEvent } from "antd/lib/radio";
import { Dispatch } from "redux";
import styles from "./index.less";
import { PageEdit } from "@/pages/page/edit/ModelType";
import { Page, StyleType } from "@/pages/page/type/page";
import Self from "@/pages/page/edit/components/builds/Self";
import ReactIf from "@/components/ReactIf";

interface BuildProps {
  page?: Page;
  dispatch: Dispatch<any>;
}

const Build = ({page, dispatch}: BuildProps) => {
  function handleClickStyleType(e: RadioChangeEvent) {
    if (dispatch) {
      dispatch({
        type: "pageEdit/savePage",
        payload: {
          styleType: e.target.value
        }
      });
    }
  }

  return (
    <div className={styles.main}>
      <Radio.Group
        onChange={handleClickStyleType}
        defaultValue={page?.styleType}
        buttonStyle="solid">
        <Radio.Button value={StyleType.default}>默认</Radio.Button>
        <Radio.Button value={StyleType.self}>自定义</Radio.Button>
      </Radio.Group>
      <ReactIf vIf={page?.styleType === StyleType.self}>
        <Self/>
      </ReactIf>

    </div>
  );
};

export default connect(
  ({pageEdit}: { pageEdit: PageEdit }) =>
    ({page: pageEdit.page})
)(Build);
