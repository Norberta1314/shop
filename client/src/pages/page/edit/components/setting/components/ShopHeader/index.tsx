import React from "react";
import { ShopHeader } from "@/pages/page/type/component/ShopHeader";
import ImageManage from "@/pages/page/edit/components/setting/components/common/ImageManage";
import InputText from "../common/InputText";
import commonStyle from "@/pages/page/edit/components/setting/index.less";
import { Dispatch } from "redux";
import { connect } from "dva";
import { changeEditCompoennt } from "@/pages/page/edit/ModelType";
import { PageComponentsType } from "@/pages/page/type/pageComponents";

interface Props {
  shopHeader: ShopHeader;
  dispatch?: Dispatch<any>
}

const Index: React.FC<Props> = props => {
  const {shopHeader, dispatch} = props;

  function handleChange(attribute: string, e: any) {
    if (dispatch) {
      changeEditCompoennt(dispatch, shopHeader, attribute, e, PageComponentsType.ShopHeader);
    }
  }

  return (
    <div>
      <div className={commonStyle.settingTitle}>店头</div>
      <InputText
        label="商城名称"
        text={shopHeader.name}
        onChangeInput={(e) => handleChange("name", e)} />
      <ImageManage
        label="背景图片"
        imgNumber={1}
        fileList={shopHeader.backgroundImgUrl}
        onChangeImage={(e) => handleChange("backgroundImgUrl", e)} />
      <ImageManage
        label="头像"
        imgNumber={1}
        fileList={shopHeader.avatorImgUrl}
        onChangeImage={(e) => handleChange("avatorImgUrl", e)} />
    </div>
  );
};

export default connect()(Index);
