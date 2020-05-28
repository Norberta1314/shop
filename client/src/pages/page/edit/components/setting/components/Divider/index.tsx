import React from "react";
import commonStyle from "@/pages/page/edit/components/setting/index.less";
import { changeEditCompoennt } from "@/pages/page/edit/ModelType";
import { Dispatch } from "redux";
import Divider from "@/pages/page/type/component/Divider";
import { PageComponentsType } from "@/pages/page/type/pageComponents";
import InputNumber from "@/pages/page/edit/components/setting/components/common/InputNumber";
import PickColor from "@/pages/page/edit/components/setting/components/common/PickColor";

interface Props {
  dispatch: Dispatch<any>;
  divider: Divider;
}

const Index: React.FC<Props> = props => {
  const {dispatch, divider} = props;

  function handleChange(attribute: string, e: any) {
    changeEditCompoennt(dispatch, divider, attribute, e, PageComponentsType.Divider);
  }

  return (
    <div>
      <div className={commonStyle.settingTitle}>分隔</div>
      <InputNumber
        label="高度"
        min={1}
        max={20}
        value={divider.height}
        unit="px"
        onChangeInput={(e) => handleChange("height", e)} />
      <PickColor
        label="背景颜色"
        value={divider.backgroundColor}
        onChangeInput={(e) => handleChange("backgroundColor", e)} />
    </div>
  );
};

export default Index;
