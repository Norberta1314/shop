import React from "react";
import ReactIf from "@/components/ReactIf";
import { imgUrlBase } from "../../../../../../../config/config";
import IconFont from "@/components/IconFont";

interface Props {
  src: string;
}

const CommonImage: React.FC<Props> = props => (
  <React.Fragment>
    <ReactIf vIf={props.src}>
      <img src={`${imgUrlBase}/${props.src}`} />
    </ReactIf>
    <ReactIf vIf={!props.src}>
      <IconFont type="icon-nopic" />
    </ReactIf>
  </React.Fragment>
);

export default CommonImage;
