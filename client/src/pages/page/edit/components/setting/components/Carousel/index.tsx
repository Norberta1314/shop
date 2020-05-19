import React from "react";
import { connect } from "dva";
import { Dispatch } from "redux";
import ImageManage from "../common/ImageManage";
import deepCopy from "@/utils/deepCopy";
import { namespace } from "@/pages/page/edit/ModelType";
import { PageComponentsType } from "@/pages/page/type/pageComponents";
import { Carousel } from "@/pages/page/type/component/Carousel";
import Switch from "../common/Switch";

interface Props {
  carousel: Carousel;
  dispatch: Dispatch<any>;
}

const Index = ({carousel, dispatch}: Props) => {
  function handleChangeImage(value: (string | undefined)[] | string | undefined) {
    if (value instanceof Array) {
      handleChange("imgList", value);
    }
  }

  function handleChange(attribute: string, e: any) {
    const localCarousel = deepCopy(carousel);
    if (localCarousel) {
      localCarousel[attribute] = e;
    }
    if (dispatch) {
      dispatch({
        type: `${namespace}/editComponent`,
        payload: {
          type: PageComponentsType.Carousel,
          carousel: localCarousel
        }
      });
    }
  }

  return (
    <div>
      <ImageManage
        imgNumber={5}
        fileList={carousel.imgList}
        onChangeImage={handleChangeImage} />
      <Switch
        label="自动播放"
        defaultChecked={carousel.auto}
        onChangeSwitch={(e) => handleChange("auto", e)} />
    </div>
  );
};

export default connect()(Index);
