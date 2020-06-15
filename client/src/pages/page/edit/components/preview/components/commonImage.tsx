import React from "react";
import ReactIf from "@/components/ReactIf";
import { imgUrlBase } from "../../../../../../../config/config";
import IconFont from "@/components/IconFont";
import commomStyles from "../index.less";

interface Props {
  src: string | undefined | null;
  background?: string;
  width?: number;
  height?: number;
}

function calaImgSrc(src: string | undefined | null, width: number | undefined, height: number | undefined) {
  if (width && height) {
    return `${imgUrlBase}/${src}?imageView2/1/w/${width}/h/${height}`;
  } else {
    return `${imgUrlBase}/${src}`;
  }

}

const CommonImage: React.FC<Props> = props => (
  <React.Fragment>
    <ReactIf vIf={props.src}>
      <img
        className={commomStyles.img}
        style={{width: "100%"}}
        src={calaImgSrc(props?.src, props.width, props.height)} />
    </ReactIf>
    <ReactIf vIf={!props.src}>
      <IconFont
        type="icon-nopic"
        style={{background: props.background, fontSize: 30}} />
    </ReactIf>
  </React.Fragment>
);

export default CommonImage;
