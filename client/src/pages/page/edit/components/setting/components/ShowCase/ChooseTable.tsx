import React from "react";
import commonStyle from "../../index.less";
import styles from "./index.less";
import { imgUrlBase } from "../../../../../../../../config/config";
import { Radio } from "antd";
import { ShowCaseMode } from "@/pages/page/type/component/ShowCase";
import { RadioChangeEvent } from "antd/lib/radio";

interface Props {
  mode: number;
  onChangeMode: (e: RadioChangeEvent) => void;
}

const Index: React.FC<Props> = (props) => {
  return (
    <div className={`${commonStyle.commonEdit} ${styles.chooseTable}`}>
      <div className={commonStyle.label}>选择板式</div>
      <div className={styles.main}>
        <Radio.Group
          value={props.mode}
          onChange={props.onChangeMode}>
          <Radio value={ShowCaseMode.mode1}>
            <img
              src={`${imgUrlBase}/showCase-mode1.png`}
              alt="" />
          </Radio>
          <Radio value={ShowCaseMode.mode2}>
            <img
              src={`${imgUrlBase}/showCase-mode2.png`}
              alt="" />
          </Radio>
        </Radio.Group>
      </div>
    </div>
  );
};

export default Index;
