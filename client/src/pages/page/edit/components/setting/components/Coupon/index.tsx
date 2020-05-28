import React from "react";
import commonStyle from "@/pages/page/edit/components/setting/index.less";
import { changeEditCompoennt } from "@/pages/page/edit/ModelType";
import { Dispatch } from "redux";
import { PageComponentsType } from "@/pages/page/type/pageComponents";
import InputNumber from "@/pages/page/edit/components/setting/components/common/InputNumber";
import PickColor from "@/pages/page/edit/components/setting/components/common/PickColor";
import InputText from "../common/InputText";
import { Coupon } from "@/pages/page/type/component/Coupon";

interface Props {
  dispatch: Dispatch<any>;
  coupon: Coupon;
}

const Index: React.FC<Props> = props => {
  const {dispatch, coupon} = props;

  function handleChange(attribute: string, e: any) {
    changeEditCompoennt(dispatch, coupon, attribute, e, PageComponentsType.Coupon);
  }

  return (
    <div>
      <div className={commonStyle.settingTitle}>优惠券</div>
      <InputNumber
        label="优惠券面额"
        min={1}
        max={20}
        value={coupon.price}
        unit="px"
        onChangeInput={(e) => handleChange("price", e)} />
      <InputText
        label="优惠券标题"
        text={coupon.title}
        onChangeInput={(e) => handleChange("title", e)} />
      <InputText
        label="额外信息"
        text={coupon.info}
        onChangeInput={(e) => handleChange("info", e)} />
      <PickColor
        label="优惠券背景"
        value={coupon.couponBackgroundColor}
        onChangeInput={(e) => handleChange("couponBackgroundColor", e)} />
      <PickColor
        label="区块背景"
        value={coupon.backgroundColor}
        onChangeInput={(e) => handleChange("backgroundColor", e)} />
      <PickColor
        label="字体颜色"
        value={coupon.fontSizeColor}
        onChangeInput={(e) => handleChange("fontSizeColor", e)} />
      <PickColor
        label="按钮背景色"
        value={coupon.buttonColor}
        onChangeInput={(e) => handleChange("buttonColor", e)} />
    </div>
  );
};

export default Index;
