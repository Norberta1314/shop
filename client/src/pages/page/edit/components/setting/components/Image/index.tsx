import React from "react";
import { Image, imageAlignOptions } from "@/pages/page/type/component/Image";
import { connect } from "dva";
import { Dispatch } from "redux";
import ImageManage from "../common/ImageManage";
import { changeEditCompoennt } from "@/pages/page/edit/ModelType";
import InputNumber from "../common/InputNumber";
import InputRadio from "../common/InputRadio";
import { PageComponentsType } from "@/pages/page/type/pageComponents";
import commonStyle from "@/pages/page/edit/components/setting/index.less";

interface Props {
  image: Image;
  dispatch: Dispatch<any>;
}

const Index = ({image, dispatch}: Props) => {
  function handleChangeImage(value: (string | undefined)[] | string | undefined) {
    if (typeof value === "string") {
      changeImage("imgUrl", value);
    }
  }

  function changeImage(attribute: string, e: any) {
    changeEditCompoennt(dispatch, image, attribute, e, PageComponentsType.Image);
  }

  return (
    <div>
      <div className={commonStyle.settingTitle}>图片</div>
      <ImageManage
        imgNumber={1}
        fileList={image.imgUrl}
        onChangeImage={handleChangeImage} />
      <InputNumber
        label="图片宽度"
        min={10}
        max={375}
        value={image.width}
        onChangeInput={(e) => changeImage("width", e)} />
      <InputRadio
        label="居中"
        options={imageAlignOptions}
        value={image.align}
        onChangeRadio={(e) => changeImage("align", e.target.value)} />
    </div>
  );
};

export default connect()(Index);
