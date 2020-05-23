import React from "react";
import { Image } from "@/pages/page/type/component/Image";
import { connect } from "dva";
import { Dispatch } from "redux";
import ImageManage from "../common/ImageManage";
import deepCopy from "@/utils/deepCopy";
import { namespace } from "@/pages/page/edit/ModelType";
import { PageComponentsType } from "@/pages/page/type/pageComponents";

interface Props {
  image: Image;
  dispatch: Dispatch<any>;
}

const Index = ({image, dispatch}: Props) => {
  function handleChangeImage(value: (string | undefined)[] | string | undefined) {
    if (typeof value === "string") {
      uploadImage("src", value);
    }
  }

  function uploadImage(attribute: string, e: any) {
    const localImage = deepCopy(image);
    if (localImage) {
      localImage[attribute] = e;
    }
    if (dispatch) {
      dispatch({
        type: `${namespace}/editComponent`,
        payload: {
          type: PageComponentsType.Image,
          image: localImage
        }
      });
    }
  }

  return (
    <div>
      <ImageManage
        imgNumber={1}
        fileList={image.imgUrl}
        onChangeImage={handleChangeImage} />
    </div>
  );
};

export default connect()(Index);
