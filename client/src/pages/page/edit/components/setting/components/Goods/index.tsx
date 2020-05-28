import React from "react";
import commonStyle from "@/pages/page/edit/components/setting/index.less";
import { Goods } from "@/pages/page/type/component/Goods";
import Choose from "./Choose";
import { changeEditCompoennt } from "@/pages/page/edit/ModelType";
import { Dispatch } from "redux";
import { connect } from "dva";
import { PageComponentsType } from "@/pages/page/type/pageComponents";
import Switch from "../common/Switch";

interface Props {
  goods: Goods
  dispatch?: Dispatch<any>;
}

const Index: React.FC<Props> = props => {
  const {goods, dispatch} = props;

  function handleChange(attribute: string, e: any) {
    if (dispatch) {
      changeEditCompoennt(dispatch, goods, attribute, e, PageComponentsType.Goods);
    }
  }

  return (
    <div>
      <div className={commonStyle.settingTitle}>商品</div>
      <Choose
        goodList={goods.goodList}
        onChangeGood={(e) => handleChange("goodList", e)} />
      <Switch
        label="是否有边框"
        defaultChecked={goods.isBorder}
        onChangeSwitch={(e) => handleChange("isBorder", e)} />
    </div>
  );
};

export default connect()(Index);
